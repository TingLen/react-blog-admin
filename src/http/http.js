import axios from 'axios'
import { message } from 'antd'
import history from '../history/history'

axios.defaults.baseURL = "http://localhost:8080"
axios.defaults.timeout = 10000
axios.defaults.headers = {
  'Content-Type': 'application/json;'
}
axios.defaults.withCredentials = true

export default axios
// Add a request interceptor
axios.interceptors.request.use( config => {
    // 加载动画
    return config
  }, err => {
    // Do something with request error
    return Promise.reject(err)
  });

// Add a response interceptor
axios.interceptors.response.use( response =>  {
    // Do something with response data
    let data = response.data
    
    return data
  }, err => {
    // Do something with response error
    console.log(err.response)
    if(err.response && err.response.status){
      switch (err.response.status) {
        case 401:
          message.error('token错误，请重新登录')
          history.push('/login')
          break;
        default:
          break;
      }

    }
    return Promise.reject(err)
  });



export const get = (url,params) => {
    return axios.get(url,params)
}

export const post = (url,params) => {
    return axios.post(url,params)
}

export const delete_ = (url,params) => {
  return axios.delete(url,{data: params})
}
export const put = (url,params) => {
  return axios.put(url,params)
}

export const allRequest = (requests) => {
    return axios.all(requests)
}

export const spread = axios.spread