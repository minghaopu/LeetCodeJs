/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    if (nums.length === 0) return 0;
    let max1 = -Infinity, max2 = -Infinity, max3 = -Infinity;
    for (let n of nums) {
        if (n > max1) {
            max3 = max2;
            max2 = max1;
            max1 = n;
        } else if (n > max2 && n < max1) {
            max3 = max2;
            max2 = n;
        } else if (n > max3 && n < max2) {
            max3 = n;
        }
    }
    return max3 === -Infinity ? max1 : max3;
};