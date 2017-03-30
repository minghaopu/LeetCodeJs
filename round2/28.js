/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle === "") return 0;
    if (haystack === "") return -1;
    let m = haystack.length, n = needle.length;
    let next = new Array(n).fill(0);
    let i = 1, j = 0;
    while (i < n) {
        if (needle[i] !== needle[j]) {
            if (j > 0) j = next[j-1];
            else i++;
        } else {
            next[i] = j + 1;
            i++;
            j++;
        }
    }
    i = j = 0;
    while (i < m) {
        if (haystack[i] === needle[j]) {
            if (j === n-1) return i - (n - 1);
            else {
                i++;
                j++;
            }
        } else {
            if (j === 0) i++;
            else j = next[j-1];
        }
    }
    return -1;
};