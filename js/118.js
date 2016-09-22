/**
 * 118. Pascal's Triangle
 */

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    var result = [];
    for (var i = 0; i < numRows; i++) {
        result[i] = [];
        for (var j = 0; j <= i; j++) {
            result[i][j] = combinations(i,j);
        }
    }
    return result;
};

var combinations = function (n, k) {
    var max = k > n - k ? k : n-k;
    var result = 1;
    for (var i = 1; i <= n - max; i++) {
        result = result * (max + i) / i;
    }
    return result;
}