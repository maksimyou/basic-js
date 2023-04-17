const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */


function encodeLine(str) {
  if (str == '') return ''
  let groups = [];
  let currentChar = '';
  let currentCount = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === currentChar) {
      currentCount++;
    } else {
      if (currentCount > 0) {
        groups.push(currentCount + currentChar);
      }
      currentChar = str[i];
      currentCount = 1;
    }
  }

  groups.push(currentCount + currentChar);
  groups.map(e => { if (e[0] == 1) { return e[1] } else { return e } })
  console.log(groups)
  return groups.map(e => { if (e[0] == 1) { return e[1] } else { return e } }).join('');
}



module.exports = {
  encodeLine
};
