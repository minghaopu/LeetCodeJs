/**
 * 121. Best Time to Buy and Sell Stock (maximum subarray problem, better than D&C)
 */


/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
	var maxProfit = 0;
	var bestBuy = Number.MAX_VALUE;
	if (prices.length === 0) return 0;
	for (var i = 0; i < prices.length; i++) {
		if (bestBuy > prices[i]) bestBuy = prices[i];
		else if (prices[i] - bestBuy > maxProfit) maxProfit = prices[i] - bestBuy;
	}
	return maxProfit;
};
// faster solution
var maxProfit2 = function(prices) {
    var maxProfit = 0, sum = 0;
    var l = prices.length;
    if (l < 2) return 0;
    for (var i = 0; i < l-1; i++) {
        var change = prices[i+1] - prices[i];
        sum = Math.max(sum + change, change);
        maxProfit = Math.max(maxProfit, sum);
    }
    return maxProfit;
};