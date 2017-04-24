/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let len = nums.length;
    if (k > len) return nums;
    let map = {};
    for (let n of nums) {
        if (map[n] === undefined) map[n] = 1;
        else map[n]++;
    }
    let bucket = [];
    for (let key in map) {
        if (map.hasOwnProperty(key)) {
            if (bucket[map[key]] === undefined) bucket[map[key]] = [parseInt(key)];
            else bucket[map[key]].push(parseInt(key));
        }
    }
    let res = [];
    for (let i = len; i > - 1 && k > 0; i--) {
        if (bucket[i] === undefined) continue;
        for (let n of bucket[i]) {
            res.push(n);
            if (--k === 0) return res;
        }
    }
    return res;
};