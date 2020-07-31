// 接口请求
import { getCookie } from '@/utils/cookie'

import axios from 'axios'
const service = axios.create({
  timeout: 15000
})
// 添加token && lang
service.interceptors.request.use(
  (config) => {
    config.headers.lang = getCookie('lang', config)
    config.headers.lang = 'cn'
    // 其他请求待定
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

export default service