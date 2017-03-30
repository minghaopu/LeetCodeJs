/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    let col = new Array(n).fill(0);
    let dia1 = new Array(2 * n - 1).fill(0);
    let dia2 = new Array(2 * n - 1).fill(0);
    let total = 0;

    (function helper(i) {
        if (i === n) total++;
        else {
            for (let j = 0; j < n; j++) {
                if ((col & (1 << j)) || (dia1 & (1 << (i + j))) || (dia2 & (1 << (n - i - 1 + j)))) continue;
                col |= 1 << j;
                dia1 |= 1 << (i + j);
                dia2 |= 1 << (n - i - 1 + j);
                helper(i + 1);
                col ^= 1 << j;
                dia1 ^= 1 << (i + j);
                dia2 ^= 1 << (n - i - 1 + j);
            }
        }
    })(0);
    return total;
};