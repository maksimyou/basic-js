const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */


function getDNSStats(domains) {
  let res = {};
  let l = domains.length;
  domains.forEach((i, id) => {
    let arr = []
    i.split('.').reverse().forEach(el => { if (!res[arr.join('') + '.' + el]) { res[arr.join('') + '.' + el] = l - id; } arr.push('.' + el) })

  })

  return res;

}

module.exports = {
  getDNSStats
};
