import React, { useEffect, useCallback, useState } from 'react'
import {
  gerLuckyActivityDetailApi,
  drawPrizeApi,
  getParticipationNumApi,
  getCustomerPrizeListApi,
} from '@/api/activity'
import { getDeviceSource } from '@/utils'
import styles from './index.less'
import { message, Modal, Button, Drawer } from 'antd'
import Ticket from './components/Ticket';


export default ({ activityId }) => {
  const [activityInfo, setActivityInfo] = useState({})
  const [prizes, setPrizes] = useState([])
  const [activePrizeIndex, setActivePrizeIndex] = useState(-1)
  const [joinPeopleNum, setJoinPeopleNum] = useState(0)
  const [visible, setVisible] = useState(false)
  const [myPrizes, setMyPrizes] = useState([])

  const { boxImgUrl, selectedImgUrl, unselectedImgUrl, beginImgUrl } =
    activityInfo
  const deviceSource = getDeviceSource()

  console.log(boxImgUrl, 'boxImgUrl')

  function getListArr(len) {
    switch (len) {
      case 2:
        return [0, 1, 0, 1, 0, 1, 0, 1]
      case 3:
        return [0, 1, 0, 2, 0, 1, 0, 2]
      case 4:
        return [1, 0, 2, 3, 1, 0, 2, 3]
      case 5:
        return [1, 0, 2, 0, 4, 0, 3, 0]
      case 6:
        return [1, 0, 2, 3, 4, 0, 5, 0]
      case 7:
        return [1, 0, 2, 3, 4, 0, 5, 6]
      case 8:
        return [1, 0, 2, 0, 3, 0, 4, 0, 5, 6, 0, 7]
      case 9:
        return [1, 0, 2, 3, 4, 0, 5, 0, 6, 7, 8, 0]
      default:
        return []
    }
  }

  function prizeTempList(data) {
    const len = data ? data.length : 0
    // 排序，将谢谢参与放在第一个位置 1: 谢谢参与
    const noPrizes = data.filter((i) => i.prizeId === 1)
    const isPrizes = data.filter((i) => i.prizeId !== 1)
    const prizseArr = [...noPrizes, ...isPrizes]

    const arr = getListArr(len)
    return arr.map((i, index) => ({
      ...prizseArr[i],
      index,
      key: `${prizseArr[i].id}-${index}`,
    }))
  }

  const memoizedCallback = useCallback(() => {
    getActivityDetail()
  })

  // 查询活动中的优惠券
  async function getActivityDetail() {
    const res = await gerLuckyActivityDetailApi(activityId)
    await getJoinPeopleNum(activityId)
    if (res.code !== 200) {
      return message.error(res.msg)
    }
    const prizes = prizeTempList(res.data.activityPrizeResponseList)
    prizes.splice(4, 0, {})
    setPrizes(prizes)
    setActivityInfo(res.data)
  }

  // 获取参与抽奖的人数
  async function getJoinPeopleNum(id) {
    const res = await getParticipationNumApi(id)
    if (res.code === 200) {
      setJoinPeopleNum(res.data || 0)
    }
  }

  useEffect(() => {
    memoizedCallback()
  }, [activityId])
  console.log(selectedImgUrl)

  // 选中的样式
  const selectedGridItem = {
    backgroundImage: `url(${selectedImgUrl})`,
    backgroundSize: '100% 100%',
  }

  // 未选中样式
  const unselectedGridItem = {
    backgroundImage: `url(${unselectedImgUrl})`,
    backgroundSize: '100% 100%',
  }

  // 考试按钮的样式
  const startGridItem = {
    backgroundImage: `url(${beginImgUrl})`,
    backgroundSize: '100% 100%',
    cursor: 'pointer',
  }

  // 点击开始抽奖
  async function startGame(spend) {
    const { activityPrizeResponseList } = activityInfo
    console.log(activityPrizeResponseList, 'activityPrizeResponseList')
    const res = await drawPrizeApi({
      id: activityId,
      platform: deviceSource.id,
    })

    // 获奖ID
    const endPrizedId = res?.data?.prizeId
    const endPrizeInfo = activityPrizeResponseList.find(
      (item) => item.prizeId === endPrizedId
    )

    const {type, prizeType, amount} = res.data;
    if (res.data) {
        if( type === 2   && [1, 2].includes(prizeType)  ){
            message.success(`获得${amount}元红包`)
        }else{
            message.success(`恭喜你中了${endPrizeInfo?.prizeName}`)
        }
    } else {
      message.info('很遗憾你没有中奖')
    }
    getJoinPeopleNum(activityId)
  }

  // 打开活动规则
  function handleOpenRuleModal() {
    const { ruleDesc } = activityInfo
    Modal.info({
      title: '活动规则',
      content: <div>{ruleDesc}</div>,
    })
  }

  async function openMyPrizesModal() {
    const res = await getCustomerPrizeListApi(activityId)
    setVisible(true)
    console.log(res, 'res')
    setMyPrizes(res.data)
  }

  function onClose() {
    setVisible(false)
  }

  return (
    <div className={styles.root}>
      <div className={styles.luckyBox}>
        <img className={styles.luckyBoxImage} src={boxImgUrl} alt="" />
        <div className={styles.gridBox}>
          {prizes.map((item, i) => {
            let endGridItem = unselectedGridItem
            if (i === activePrizeIndex) {
              endGridItem = {
                ...endGridItem,
                ...selectedGridItem,
              }
            }
            if (i === 4) {
              return (
                <div
                  onClick={() => startGame(300)}
                  style={startGridItem}
                  className={styles.gridItem}
                ></div>
              )
            }
            return (
              <div
                key={i}
                style={unselectedGridItem}
                className={styles.gridItem}
              >
                <div
                  className={styles.selected}
                  style={i === activePrizeIndex ? selectedGridItem : null}
                >
                  <img className={styles.prize} src={item.imgUrl} alt="" />
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className={styles.joinBox}>参与抽奖人数:{joinPeopleNum}</div>
      <div className={styles.btns}>
        <Button onClick={handleOpenRuleModal}>查看活动规则</Button>
        <Button onClick={openMyPrizesModal} style={{ marginLeft: 20 }}>
          我的奖品
        </Button>
      </div>
      <Drawer
        title="我的奖品"
        placement="bottom"
        closable={false}
        onClose={onClose}
        visible={visible}
        key="bottom"
      >
        {myPrizes.map((item) => {
          return <div key={item.id}>
             <Ticket></Ticket>
          </div>
        })}
      </Drawer>
    </div>
  )
}
