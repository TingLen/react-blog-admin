import axios from 'axios'

axios.defaults.baseURL = "/"
axios.defaults.timeout = 10000


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
    console.log(err)
    return Promise.reject(err)
  });



export const get = (url,params) => {
    return axios({
        method: 'get',
        url,
        params
    })
}

export const post = (url,params) => {
    return axios({
        method: 'post',
        url,
        params
    })
}

export const allRequest = (requests) => {
    return axios.all(requests)
}

export const spread = axios.spread