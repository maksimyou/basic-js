const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  if (n.split('-').length !== 6) { return false }
  let bull = 0;
  let res = false;
  n.split('-').forEach(y => y.split('').forEach(i => {
    if (+i + '' == 'NaN') {
      if (!(i >= 'A' && i <= 'F')) { bull = 1 }
    } else {
      if (!(i >= '0' && i <= '9')) { bull = 1 }
    }
  }))
  if (bull == 1) {
    return false;
  } else { return true }

}
module.exports = {
  isMAC48Address
};
