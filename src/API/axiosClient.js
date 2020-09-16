//http client for my website
import axios from 'axios'
import queryString from 'query-string'
import cookie from 'react-cookies'
const axiosClient = axios.create({
    baseURL: "http://127.0.0.1:8000/",
    headers:{
        "Content-Type": "application/json",
        "X-CSRFTOKEN": cookie.load("csrftoken")
        // 'Authorization': "Token 88cf7c95ce9204f6d8ee0190011caaa8c872d938"
    },
    paramsSerializer: params => queryString.stringify(params),
});

axiosClient.interceptors.request.use(function(config){
    const token = /*localStorageService.getAccessToken(); */ "88cf7c95ce9204f6d8ee0190011caaa8c872d938";
    if(token){
        config.headers['Authorization'] = "Token 88cf7c95ce9204f6d8ee0190011caaa8c872d938";
    }
    //config.headers["Content-Type"] = "application/json"           
    return config;
}, err=>{
    Promise.reject(err);
})

axiosClient.interceptors.response.use((response)=>{
    if(response && response.data){
        return response.data;
    }
    return response;
}, (error)=>{
    throw error;
});

axiosClient.defaults.xsrfCookieName= "csrftoken";
axiosClient.defaults.xsrfHeaderName = "X-CSRFTOKEN";

export default axiosClient;