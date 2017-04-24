/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if (matrix.length === 0 || matrix[0].length === 0) return false;
    let i = 0, j = matrix[0].length - 1;
    while (i < matrix.length && j > -1) {
        if (target === matrix[i][j]) return true;
        else if (target > matrix[i][j]) i++;
        else j--;
    }
    return false;
};