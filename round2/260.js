/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    let res = [];
    let bit = 0;
    for (let n of nums) bit ^= n;
    bit &= -bit;
    for (let n of nums) {
        if (n & bit) res[0] ^= n;
        else res[1] ^= n;
    }
    return res;
};