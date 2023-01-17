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

/**
 * 获取最终值，针对多语言情况，利用多语言 t('aaa') 是否等于 'aaa' 来判断是否使用多语言
 * @param {function} t 
 * @param {string} val 
 * @returns 
 */
export const getFinalValue = (t, val) => {
  return t(val) === val ? val : t(val)
}

/**
 * 获取主题色
 * @returns string
 */
export const getColorPrimary = () => {
  return config.theme ? config.theme.colorPrimary : '#1677ff';
}
