/**
 * @param {number[][]} costs
 * @return {number}
 */
var minCost = function(costs) {
  if (!Array.isArray(costs) || costs.length === 0) return 0;
  const len = costs.length;
  for (let i = 1; i < len; i++) {
    costs[i][0] += Math.min(costs[i - 1][1], costs[i - 1][2]);
    costs[i][1] += Math.min(costs[i - 1][0], costs[i - 1][2]);
    costs[i][2] += Math.min(costs[i - 1][1], costs[i - 1][0]);
  }
  return Math.min(costs[len - 1][0], Math.min(costs[len - 1][1], costs[len - 1][2]));
};