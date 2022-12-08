import config from './../config/index';
const pkg = require('./../../package.json');

export const addPrefixName = (val) => {
  const prefixName = config.prefixName || pkg.name
  return `${prefixName}-${val}`
}
