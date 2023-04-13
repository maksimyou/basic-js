const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  let res = members.filter(i => { if (typeof i === 'string' && +i !== NaN) { return true } else { return false } }).map(k => k.trim()[0].toUpperCase()).sort().map(j => j.toUpperCase()).join('')
  if (res.length > 0) { return res } else { return false }
}

module.exports = {
  createDreamTeam
};
