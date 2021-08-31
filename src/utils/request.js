import axios from 'axios'

// create an axios instance
const service = axios.create({
  timeout: 60 * 1000, // request timeout,
  // baseURL: YONG_XIANG_URL,
  withCredentials: true,
})

// 请求拦截器
service.interceptors.request.use(
  (config) => {
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
    return res
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default service
