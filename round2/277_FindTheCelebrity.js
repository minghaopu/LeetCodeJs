/**
 * Definition for knows()
 * 
 * @param {integer} person a
 * @param {integer} person b
 * @return {boolean} whether a knows b
 * knows = function(a, b) {
 *     ...
 * };
 */

/**
 * @param {function} knows()
 * @return {function}
 */
var solution = function(knows) {
  /**
   * @param {integer} n Total people
   * @return {integer} The celebrity
   */
  return function(n) {
    if (n <= 1) return n;
    let celebrity = 0;
    for (let i = 0; i < n; i++) {
      if (!knows(i, celebrity)) celebrity = i;
    }
    for (let i = 0; i < n; i++) {
      if (i === celebrity) continue;
      if (!knows(i, celebrity) || knows(celebrity, i)) return -1;
    }
    return celebrity;
  };
};