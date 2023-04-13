const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */


//function getSeason(date) {
//  if (!date) {
//    return 'Unable to determine the time of year!';
//  }
//  if (Object.prototype.toString.call(date) !== '[object Date]' || isNaN(date.getTime())) {
//    throw new Error('Invalid date!');
//  }
//  const month = date.getMonth();
//  switch (month) {
//    case 11:
//    case 0:
//    case 1:
//      return 'winter';
//    case 2:
//    case 3:
//    case 4:
//      return 'spring';
//    case 5:
//    case 6:
//    case 7:
//      return 'summer';
//    case 8:
//    case 9:
//    case 10:
//      return 'autumn';
//    default:
//      throw new Error('Invalid date!');
//  }
//}



function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }
  if (Object.prototype.toString.call(date) !== '[object Date]' || isNaN(date.getTime()) || Object.keys(date).some(key => date[key] !== Date.prototype[key])) {
    throw new Error('Invalid date!');
  }
  const month = date.getUTCMonth();
  switch (month) {
    case 11:
    case 0:
    case 1:
      return 'winter';
    case 2:
    case 3:
    case 4:
      return 'spring';
    case 5:
    case 6:
    case 7:
      return 'summer';
    case 8:
    case 9:
    case 10:
      return 'autumn';
    default:
      throw new Error('Invalid date!');
  }
}





//function getSeason(date) {
//  let season = ['spring', 'summer', 'autumn', 'winter'];
//  if (date === undefined) return 'Unable to determine the time of year!';
//  if (!(date instanceof Date) || typeof date == 'string' || typeof date == 'number') throw new Error('Invalid date!');


//  //0 1 2   3 4 5   6 7 8   9 10 11

//  if (date.getMonth() === 0 || date.getMonth() === 1 || date.getMonth() === 11) { return season[3] }
//  if (date.getMonth() >= 2 && date.getMonth() <= 4) { return season[0] }
//  if (date.getMonth() >= 5 && date.getMonth() <= 7) { return season[1] }
//  if (date.getMonth() >= 8 && date.getMonth() <= 10) { return season[2] }

//}

module.exports = {
  getSeason
};
