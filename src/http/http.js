import axios from 'axios'
import { message } from 'antd'

axios.defaults.baseURL = "http://localhost:8080"
axios.defaults.timeout = 10000
axios.defaults.headers = {
  'Content-Type': 'application/json;'
}


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
    message.error(err.response.data.message)
    console.log(err.response)
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