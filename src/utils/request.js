import axios from 'axios'
import moment from 'moment'
import { YONG_XIANG_URL } from '@/utils/constant'
import { getSign } from '@/utils'

// create an axios instance
const service = axios.create({
  timeout: 60 * 1000, // request timeout,
  // baseURL: YONG_XIANG_URL,
  withCredentials: false,
})

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    const { method, data, params, url } = config
    const finalyParams = method === 'post' ? data : params
    const timestamp = Number(moment().format('x'))
    let headers = {
      token: localStorage.access_token || '',
      timestamp,
      sign: getSign(timestamp, finalyParams, method),
    }
    if (url.includes('callServiceByPath')) {
      headers = {
        ...headers,
        Authorization: url.includes('callServiceByPath')
          ? `Bearer ${localStorage.ticket || ''}`
          : `Bearer ${localStorage.access_token || ''}`,
        // Cookie: 'suposTicket=123456',
      }
    }
    // eslint-disable-next-line no-param-reassign
    config.headers = headers
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

//响应拦截器
service.interceptors.response.use(
  (response) => {
    const res = response.data
    // if (res.code !== 200) {
    //   return [res, res.data]
    // }
    return res
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default service
