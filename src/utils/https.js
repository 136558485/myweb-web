import axios from 'axios'

// axios.defaults.baseURL = 'http://127.0.0.1:3030'
axios.defaults.baseURL = '/api'
axios.defaults.timeout = 5000
axios.defaults.withCredentials = true
//axios.defaults.transformRequest = data => JSON.stringify(data)

const instance = axios.create({headers: {"Content-Type": "application/json"}});

// 设置请求拦截器
instance.interceptors.request.use(config => {
    // 拦截操作
    return config
}, error => {
    return Promise.reject(error)
})

// 设置响应拦截器
instance.interceptors.response.use(response => {
    return response.data
}, error => {
    // 当响应不是2XX的情况 进入这里
    throw error
})

export function get(url, params, headers) {
    return new Promise((resolve, reject) => {
        instance.get(url, {params, headers}).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}

export function post(url, params, headers) {
    return new Promise((resolve, reject) => {
        instance.post(url, params, headers).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}

export function put(url, params, headers) {
    return new Promise((resolve, reject) => {
        instance.put(url, params, headers).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}

export function del(url, params, headers) {
    return new Promise((resolve, reject) => {
        instance.delete(url, {data: params, headers}).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}