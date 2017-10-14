const loaderUtils = require('loader-utils')
const Px2rem = require('venus-px2rem')
const jsdatatype = require("js-data-type");

module.exports = function (source) {
  let options = loaderUtils.getOptions(this) || null;
  if (!options) {
    options = this.query;
  }
  if (jsdatatype(options) == "String") {
    const str = options.substr(options.indexOf("?"));
    const arr = str.split("&");
    const ret = {};
    arr.forEach(function (item) {
      let a = item.split("=");
      ret[a[0]] = a[1];
    })
    options = ret;
  }
  return new Px2rem(options).generateRem(source)
}
