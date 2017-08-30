/**
 * @param {string} low
 * @param {string} high
 * @return {number}
 */
// bfs time too long, TLE
var strobogrammaticInRange = function(low, high) {

    const compare = (str1, str2) => {
        if (str1.length !== str2.length) return str1.length <= str2.length; // if str1 <= str2 true, str1 > str2 false;
        for (let i = 0; i < str1.length; ++i) {
            if (str1[i] < str2[i]) return true;
            else if (str1[i] > str2[i]) return false;
        }
        return true;
    } 
    if (low.length > high.length || !compare(low, high)) return 0;
    let map = {
        '0' : '0',
        '1' : '1',
        '6' : '9',
        '8' : '8',
        '9' : '6'
    };
    let q = ['', '0', '1', '8'];
    let res = [];
    count = 0;
    while (q.length !== 0) {
        let size = q.length;
        
        while (size--) {
            let front = q.shift();
            if (front.length === 1 || front[0] !== '0') {
                if (compare(low, front) && compare(front, high)) count++;
            }
            for (let num in map) {
                let tmp = num + front + map[num];
                if (tmp.length <= high.length) q.push(tmp);
            }
        }
    }
    return count;
};
// dp solution
/**
 * @param {string} low
 * @param {string} high
 * @return {number}
 */
var strobogrammaticInRange = function(low, high) {
  const helper = (len, total) => {
      if (len === 0) return [''];
      if (len === 1) return ['0', '1', '8'];
      let mid = helper(len - 2);
      let res = [];
      for (let num of mid) {
          if (len !== total) res.push('0' + num + '0');
          res.push('1' + num + '1');
          res.push('8' + num + '8');
          res.push('6' + num + '9');
          res.push('9' + num + '6');
      }
      return res;
  }
  const compare = (str1, str2) => {
      if (str1.length !== str2.length) return str1.length <= str2.length; // if str1 <= str2 true, str1 > str2 false;
      for (let i = 0; i < str1.length; ++i) {
          if (str1[i] < str2[i]) return true;
          else if (str1[i] > str2[i]) return false;
      }
      return true;
  } 
  let n1 = low.length, n2 = high.length;
  if (!compare(low, high)) return 0;
  let ls = helper(n1, n1), hs = helper(n2, n2);
  let l = 0, h = 0, count = 0;
  for (let n of ls) {
      if (!compare(low, n)) l++;
  }
  for (let n of hs) {
      if (!compare(n, high)) h++;
  }
  let dp = new Array(n2 + 1);
  dp.fill(0);
  for (let i = 0; i <= n2; i++) {
      if (i === 0 ) dp[i] = 0;
      else if (i === 1) dp[i] = 3;
      else if (i === 2) dp[i] = 4;
      else if (i === 3) dp[i] = 12;
      else dp[i] = dp[i-2] * 5;
  }
  for (let i = n1; i <= n2; i++) count += dp[i];
  return count - l - h;
};