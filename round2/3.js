/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var cache = [];
    // cache.length = 128;
    var start = 0, length = 0;
    for (let i = 0; i < s.length; i++) {
        if (cache[s[i]] === undefined) cache[s[i]] = 1;
        else cache[s[i]]++;
        while (cache[s[i]] > 1) {
            cache[s[start++]]--;
        }
        length = Math.max(length, i - start + 1);
    }
    return Math.max(s.length - start, length);
};

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring2 = function(s) {
    var cache = {};
    var start = 0;
    return s.split('').reduce((max, val, idx) => {
        start = cache[val] !== undefined && cache[val] >= start ? cache[val] + 1 : start;
        cache[val] = idx;
        return Math.max(max, idx - start + 1);
    }, 0);
};

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring_Fastest = function(s) {
    var cache = {};
    var start = 0, length = 0;
    for (let i = 0; i < s.length; i++) {
        if (cache[s[i]] !== undefined && cache[s[i]] >= start) start = cache[s[i]] + 1;
        cache[s[i]] = i;
        length = Math.max(i - start + 1, length);
    }
    return length;
};