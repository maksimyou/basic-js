const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let res = matrix[0].reduce((a, b) => { return a + b }, 0);
  for (let i = 1; i < matrix.length; i++) {
    matrix[i].forEach((t, g) => { if (matrix[i - 1][g] != 0) { res += t } })
  }
  return res;
}

module.exports = {
  getMatrixElementsSum
};
