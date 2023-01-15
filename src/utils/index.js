import config from './../config/index';
import CryptoJS from 'crypto-js';
const pkg = require('./../../package.json');

/**
 * @description 获取类型
 * @param {string} val 
 * @returns string
 */
export const getType = (val) => {
  return Object.prototype.toString.call(val).slice(8, -1).toLowerCase();
}

/**
 * @description 追加前缀
 * @param {string} val 
 * @returns string
 */
export const addPrefixName = (val) => {
  const prefixName = config.prefixName || pkg.name
  return `${prefixName}-${val}`
}

/**
 * @description 加密
 * @param {string} val 
 * @returns string
 */
export const encryptFn = (val) => {
  const secretKey = config.secretKey || pkg.name
  return CryptoJS.AES.encrypt(val, secretKey).toString()
}

/**
 * @description 解密
 * @param {string} val 
 * @returns string
 */
export const decryptFn = (val) => {
  const secretKey = config.secretKey || pkg.name
  return CryptoJS.AES.decrypt(val, secretKey).toString(CryptoJS.enc.Utf8)
}


/**
 * @description 获取浏览器默认语言
 * @return string
 */
export const getBrowserLang = () => {
	let browserLang = navigator.language ? navigator.language : navigator.browserLanguage;
	return ['zh-cn', 'cn', 'zh'].includes(browserLang.toLowerCase()) ? 'zhCN' : 'enGb';
};
