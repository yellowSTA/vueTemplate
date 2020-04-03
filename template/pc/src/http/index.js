import axios from 'axios';

//创建axios实例process.env.VUE_APP_API
const server = axios.create({
    baseURL: process.env.VUE_APP_API,
    timeout: 20000, // request timeout
    headers: {
        'Content-Type': 'application/json'
    }
})

server.interceptors.request.use(
    (config) => {
        if(config.url.indexOf('{') !== -1) {
            let paramObj = replaceUrl(config.url, config.data || config.params)
            console.log(paramObj);
        }
        return config;
    },
    (error) => {
        console.log('request error');
        console.log(error);
        return Promise.reject(error);
    }
)

server.interceptors.response.use(
    response => {
        return response.data;
    },
    error => {

        if (error.response) {
            // http状态码判断
            switch (error.response.status) {
                case 403:
                    alert('403 没有权限访问此接口！')
                    break
                case 404:
                    alert('404 Not Found！')
                    break
                case 500:
                    alert('500 Server Error！')
                    break
                case 502:
                    alert('502 Bad Gateway！')
                    break
                case 503:
                    alert('503服务器正在维护，请稍等！')
                    break
                default:
                    alert(error.message);
                    break;
            }
        } else {
            alert(error.message ? error.message : '服务器开小差！')
        }
        return Promise.reject(error);
    }
)

/**
 * url特殊变量替换
 * @param {string} url -要请求的url
 * @param {object} params -需要替换进url的值
 */
function replaceUrl(url, params) {
    let paramsArr = url.split('/');
    paramsArr = paramsArr.map(item => {
        if(item.indexOf('[') != -1) {
            item = item.slice(1, item.length -1);
            if(typeof params[item] == 'undefined' || params[item] === null) {
                console.warn(`${item}没有传值`)
            } else {
                let val = params[item];
                delete params[item];
                return val;
            }
        }
        return item;
    })
    return paramsArr.join('/')
}

export default server;