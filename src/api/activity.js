import request from '@/utils/request';

// 查询活动详情
export const gerActivityDetailApi = id => {
    return  request(`/wealth/h5/decennial/v1/getActivityDetail/${id}`)
}


//查询用户已经领取过的奖品
export const queryAcquiredPrizeApi = id => {
    return  request(`/wealth/h5/decennial/v1/queryAcquiredPrize/${id}`)
}

// 领取奖品, 后台支持单个或者领取多个
export function acquireAwardApi({activityId,acquireAwardRequest}) {
  return request(`/wealth/h5/decennial/v1/acquireAward/${activityId}`, {
    prefix: 'wealth',
    method: 'post',
    headers: {
      'X-Requested-With': 'XMLHttpRequest'
    },
    data: acquireAwardRequest
  });
}

// 查询转盘抽奖
export const gerLuckyActivityDetailApi = id => {
  return  request(`/wealth/h5/activity/v1/queryActivityInfo/${id}`)
}


// 转盘抽奖 获取奖品
export const drawPrizeApi = ({id,platform}) => {
  return  request(`/wealth/h5/activity/v1/drawPrize/${id}?platform=${platform}`)
}

// 获取有所少人参与了抽奖
export const getParticipationNumApi = (id) => {
  return  request(`/wealth/h5/activity/v1/getParticipationNum/${id}`)
}

// 查看奖品列表
export const getCustomerPrizeListApi = (id) => {
  return  request(`/discount/h5/customerPrize/v1/getCustomerPrizeList?activityId=${id}`)
}




