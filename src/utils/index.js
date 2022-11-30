const pkg = require('./../../package.json');

export const addPrefixName = (val) => {
  return `${pkg.name}-${val}`
}
