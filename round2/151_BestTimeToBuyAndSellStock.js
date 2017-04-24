/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0, minPrice = Number.MAX_SAFE_INTEGER;
    for (let p of prices) {
        minPrice = Math.min(p, minPrice);
        profit = Math.max(profit, p - minPrice);
    }
    return profit;
};