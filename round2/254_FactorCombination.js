/**
 * @param {number} n
 * @return {number[][]}
 */
var getFactors = function(n) {
  if (typeof n !== 'number' || n === 1) return [];
  return (function helper(num, start) {
    let res = [];
    for (let i = start; i * i <= num; i++) {
      if (num % i === 0) {
        res.push([i, num / i]);
        let subs = helper(num / i, i);
        for (let j = 0; j < subs.length; j++) {
          subs[j].push(i);
          res.push(subs[j]);
        }
      }
    }
    return res;
  })(n, 2);
};