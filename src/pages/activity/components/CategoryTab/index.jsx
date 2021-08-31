import React, { useState, useEffect, useCallback } from 'react'
import {
  gerActivityDetailApi,
  queryAcquiredPrizeApi,
  acquireAwardApi,
} from '@/api/activity'
import { Tabs, Button, message, Modal } from 'antd'
import moment from 'moment'
// import './test'
import {
  getDeviceSource,
  userPortraitInit,
  trackActivityEnvelop,
  getReportParams,
} from '@/utils'
import styles from './index.less'
const { TabPane } = Tabs

// 赤水事件, 初始化
const CELEBRATE_10TH_ID = '65ec171652fd3b12a70fe43d18352778'
const CELEBRATE_2020111_ACTIVITY_NAME = '周年庆'
const REPORT_PARAMS = getReportParams()

userPortraitInit([CELEBRATE_10TH_ID])

export default ({ activityId, callbackLogin = () => {} }) => {
  const [skuList, setSkuList] = useState([]) // sku 列表
  const [activityDetail, setActivityDetail] = useState({}) //活动详情
  const [usePrizeModalVisible, setUsePrizeModalVisible] = useState(false) // 去使用的弹窗
  const deviceSource = getDeviceSource()
  function callback(key) {
    console.log(key)
  }

  // 赤水时间上报
  function track(data = {}) {
    try {
      trackActivityEnvelop({
        activityId: CELEBRATE_10TH_ID,
        data: {
          activityName: CELEBRATE_2020111_ACTIVITY_NAME,
          activityId: Number(activityId),
          ...data,
          ...REPORT_PARAMS,
        },
      })
    } catch (e) {
      console.error(e)
    }
  }

  const memoizedCallback = useCallback(() => {
    getSkuList()
  })

  useEffect(() => {
    memoizedCallback()
  }, [activityId])

  // 查询活动中的优惠券
  async function getSkuList() {
    const res = await gerActivityDetailApi(activityId)
    if (res.code !== 200) {
      return message.error(res.msg)
    }
    // 查询已经领取过的奖品
    const hasgetPrizedListRes = await queryAcquiredPrizeApi(activityId)
    let hasGetPrizedIds = []
    if (hasgetPrizedListRes.code == 200) {
      hasGetPrizedIds = hasgetPrizedListRes.data || []
    }
    if (res.data && res.data.categoryPrizeVoList) {
      res.data.categoryPrizeVoList = res.data.categoryPrizeVoList.map(
        (skuItem) => {
          skuItem.couponVoList = skuItem.couponVoList.map((coupon) => {
            return {
              ...coupon,
              hasGet: hasGetPrizedIds.includes(coupon.prizeId),
            }
          })
          return skuItem
        }
      )
    }

    let { categoryPrizeVoList } = res.data || {}
    setActivityDetail(res.data || {})
    categoryPrizeVoList = categoryPrizeVoList || []
    setSkuList(categoryPrizeVoList)
  }

  // 领奖
  async function hanldeGetPrize(record, isBatch) {
    // TODO 领奖埋点
    // gioSendEvent('h5_activities_2020_1111_discounts_click', {
    //   prizeId: String(prizeId)
    // });
    try {
      const hasgetParizedRes = await acquireAwardApi({
        activityId,
        acquireAwardRequest: {
          platform: deviceSource.id,
          prizeIdList: [record.prizeId],
        },
      })
      const { couponName, prizeId } = record
      const { code } = hasgetParizedRes || {}
      let { acitivityStartTime } = activityDetail
      acitivityStartTime = acitivityStartTime || moment().format('YYYY-MM-DD')
      const duration = 0.5

      switch (code) {
        // 未登录
        case 401:
          callbackLogin()
          break
        // 活动未开始
        case 5002:
          !isBatch &&
            message.error(
              `活动未开始,开始时间${moment(acitivityStartTime).format(
                'YYYY年M月D日'
              )}!`
            )
          break
        // 活动已经结束
        case 5003:
          !isBatch && message.error(hasgetParizedRes.msg, duration)
          break
        case 5006:
          !isBatch && message.error('您已领取过优惠券!', duration)
          break
        case 200:
          // 赤水上报
          track({
            marketAction: '1',
            marketActionName: `用户领取优惠券-${couponName}-${prizeId}`,
          })
          message.success(
            !isBatch && '优惠券已发放至您的嗨学账户，可以使用嗨学课堂查看!',
            duration
          )
          // 从接口更新优惠券的状态
          getSkuList()
          break
        //TODO 这里需要埋点 GIO
        default:
          !isBatch && message.error('未知状态码', duration)
          break
      }

      return hasgetParizedRes
    } catch (err) {
      message.error('系统繁忙，请稍后重试')
    }
  }

  // 批量领奖
  async function handleBatchGetPrized(coupons) {
    const canGetPrizes = coupons.filter((item) => !item.hasGet)
    const res = await Promise.all(
      canGetPrizes.map((item) => {
        return hanldeGetPrize(item, true)
      })
    )

    // 未授权
    const isNotLogin = res.filter((item) => item.code === 401)
    isNotLogin.length > 0 && callbackLogin()
    // 活动未开始
    const isActivityStart = res.filter((item) => item.code === 5002)
    isActivityStart.length > 0 && message.error(isActivityStart[0].msg, 0.5)
    // 活动已经结束
    const isActivityEnd = res.filter((item) => item.code === 5003)
    isActivityEnd.length > 0 && message.error(isActivityEnd[0].msg, 0.5)
    // 领取后需要更新优惠券状态
    getSkuList()
  }

  // 去使用, 只是打开了一个弹窗
  function handleUse(record) {
    const { couponName, prizeId } = record
     // 上报
     track({
      marketAction: '2',
      marketActionName: `用户点击使用-${couponName}-${prizeId}`
    });
    setUsePrizeModalVisible(true)
  }

  return (
    <div className={styles.skuContainer}>
      <Tabs defaultActiveKey="1" onChange={callback}>
        {skuList.map(({ couponVoList, categoryName, categoryId }) => {
          couponVoList = couponVoList || []
          return (
            <TabPane tab={categoryName} key={categoryId}>
              <div className={styles.couponList}>
                {couponVoList.map((coupon) => {
                  const {
                    couponMoney,
                    supportLimitMoney,
                    couponName,
                    hasGet,
                    validityStartTime,
                    validityEndTime,
                    validityType,
                    validityDays,
                    exchangeName,
                    couponType,
                    couponId,
                  } = coupon
                  // 有效期
                  const validityDiv = (
                    <div>
                      {
                        <div>
                          {validityType === 1
                            ? `领取后${validityDays}天有效`
                            : `${moment(validityStartTime).format(
                                'YYYY-MM-DD'
                              )}-${moment(validityEndTime).format(
                                'YYYY-MM-DD'
                              )}`}
                        </div>
                      }
                    </div>
                  )
                  if (couponType === 13) {
                    return (
                      <div className={styles.coupon}>
                        <div>{exchangeName}</div>
                        {validityDiv}
                        {hasGet && <div>课程已开通，请在嗨学课堂App查看</div>}
                        <div>
                          {!hasGet && (
                            <Button onClick={() => hanldeGetPrize(coupon)}>
                              领取
                            </Button>
                          )}
                        </div>
                      </div>
                    )
                  } else {
                    return (
                      <div className={styles.coupon} key={couponId}>
                        <div>{couponMoney}</div>
                        <div>满 {supportLimitMoney} 可用</div>
                        <div>{couponName}</div>
                        <div>{validityDiv}</div>
                        {hasGet ? (
                          <Button onClick={() => handleUse(coupon)}>
                            去使用
                          </Button>
                        ) : (
                          <Button onClick={() => hanldeGetPrize(coupon)}>
                            领取
                          </Button>
                        )}
                      </div>
                    )
                  }
                })}
              </div>
              <div>
                <Button
                  disabled={couponVoList.every((item) => item.hasGet)}
                  onClick={() => handleBatchGetPrized(couponVoList)}
                >
                  领取优惠
                </Button>
              </div>
            </TabPane>
          )
        })}
      </Tabs>
      <Modal
        title="使用优惠券"
        footer={null}
        onCancel={() => setUsePrizeModalVisible(false)}
        visible={usePrizeModalVisible}
      >
        24小时内专业课程规划老师, 会与您电话联系制定专属学习计划
      </Modal>
    </div>
  )
}
