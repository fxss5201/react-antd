import config from './../config/index';
import CryptoJS from 'crypto-js';
const pkg = require('./../../package.json');

export const addPrefixName = (val) => {
  const prefixName = config.prefixName || pkg.name
  return `${prefixName}-${val}`
}

// 加密
export const encryptFn = (val) => {
  const secretKey = config.secretKey || pkg.name
  return CryptoJS.AES.encrypt(val, secretKey).toString()
}

// 解密
export const decryptFn = (val) => {
  const secretKey = config.secretKey || pkg.name
  return CryptoJS.AES.decrypt(val, secretKey).toString(CryptoJS.enc.Utf8)
}
