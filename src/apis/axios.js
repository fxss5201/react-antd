import axios from 'axios';
import Cookies from 'js-cookie';
import { addPrefixName } from './../utils';

let config = {
  baseURL: process.env.NODE_ENV === 'development' ? '' : 'https://www.fastmock.site/mock/ca7c6a1ac02a88f8297b5f881f4583bf',
  timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
};

const _axios = axios.create(config);

_axios.interceptors.request.use(
  config => {
    // Do something before request is sent
    const accessToken = Cookies.get(addPrefixName('accessToken'));
    config.headers.token = accessToken;
    return config
  },
  error => {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
_axios.interceptors.response.use(
  response => {
    // Do something with response data
    return response
  },
  error => {
    // Do something with response error
    return Promise.reject(error)
  }
)

export default _axios;

