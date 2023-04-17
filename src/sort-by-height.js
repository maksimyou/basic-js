const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let res = [];
  let arr2 = arr;
  let arr3 = arr2.filter(i => { if (i !== -1) { return true } else { return false } }).sort((a, b) => a - b)
  for (const itr of arr) {
    if (itr == -1) {
      res.push(itr)
    } else {
      res.push(arr3.shift())
    }
  }
  return res;
}

module.exports = {
  sortByHeight
};
