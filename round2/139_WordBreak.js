/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    if (s === "" || wordDict.length === 0) return false;
    let l = s.length;
    let dp = new Array(l+1).fill(0);
    dp[0] = 1;
    let cache = new Set(wordDict);
    for (let i = 1; i <= l; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] && cache.has(s.substr(j, i - j))) {
                dp[i] = 1;
                break;
            }
        }
    }
    return dp[l] === 1;
};
