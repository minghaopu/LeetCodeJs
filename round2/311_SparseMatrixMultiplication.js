/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
var multiply = function(A, B) {
  if (!Array.isArray(A) || !Array.isArray(B) || A.length === 0 || B.length === 0 || A[0].length === 0 || B[0].length === 0) return 0;
  let res = [];
  for (let i = 0; i < A.length; i++) {
    if (!res[i]) res[i] = [];
    for (let j = 0; j < B[0].length; j++) {
      let tmp = 0;
      for (let k = 0; k < B.length; k++) {
        tmp += A[i][k] * B[k][j];
      }
      res[i].push(tmp);
    }
  }
  return res;
};