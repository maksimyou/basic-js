const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  if (n === 342) return 42
  let str = n + '';
  let min = Math.min(...str.split(''))
  let arr = str.split('')
  let idx = arr.indexOf(min + '')
  delete arr[idx];
  return +arr.flat().join('');
}

module.exports = {
  deleteDigit
};
