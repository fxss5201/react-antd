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
 * 确定DOM元素是否在当前视野或者第二个参数值内
 * @param {DOM} el DOM元素 
 * @param {DOM} box DOM元素
 * @returns boolean
 */
export const isElementInView = (el, box) => {
  const rect = el.getBoundingClientRect();
  const vWidth = window.innerWidth || document.documentElement.clientWidth;
  const vHeight = window.innerHeight || document.documentElement.clientHeight;
  let boxRect = {
    left: 0,
    top: 0,
    right: vWidth,
    bottom: vHeight,
    width: vWidth,
    height: vHeight,
  }
  if (box) {
    boxRect = box.getBoundingClientRect();
  }
  if (rect.right < boxRect.left || rect.bottom < boxRect.top || rect.left > boxRect.right || rect.top > boxRect.bottom) {
    return false;
  }
  return true;
}
