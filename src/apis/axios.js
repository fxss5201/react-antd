import axios from 'axios';
import Cookies from 'js-cookie';
import { addPrefixName } from './../utils';
import config from '../config';

let axiosconfig = {
  baseURL: process.env.NODE_ENV === 'development' ? '' : config.axiosBaseURL,
  timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
};

const _axios = axios.create(axiosconfig);

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

