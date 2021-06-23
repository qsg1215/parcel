import request from '@/utils/request'
import {
  appKey,
  appSecret,
  // callFunction_URL,
  // login_URL,
} from '@/utils/constant'
export const getTokenApi = () => {
  return request('/yongxiang/secdev/login/getToken', {
    params: {
      appKey,
      appSecret,
    },
  })
}

export const getAllWbsApi = () => {
  return request('/yongxiang/secdev/projectinfo/getwbs', {
    method: 'post',
    data: {
      pc_no: '',
    },
  })
}

export const create_tjzljcgkApi = (data) => {
  return
  return request('/tjzljcgk/post', {
    method: 'post',
    data,
  })
}

export const callFunctionApi = () => {
  return request('/project/dam/supngin/api/dam/callServiceByPath', {
    method: 'post',
    data: {
      path: 'yx_pm.CivilStandard',
      service: 'yx_pm.getTemplates',
      params: {},
    },
  })
}

export const loginApi = () => {
  return request('/inter-api/auth/login', {
    method: 'post',
    data: {
      userName: 'admin',
      password: 'Supos@1304',
      autoLogin: false,
      clientId: 'ms-content-sample',
    },
  })
}
