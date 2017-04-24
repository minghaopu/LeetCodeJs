/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
    if (s === "" || wordDict.length === 0) return [];
    let words = new Set(wordDict);
    let cache = {};
    let l = s.length;
    let res = (function dfs(s) {
        if (cache[s] !== undefined) {
            return cache[s].slice();
        }
        let res = [];
        
        if (words.has(s)) res.push(s);
        for (let i = 1; i < s.length; i++) {
            let sub = s.substr(i);
            if (words.has(sub)) {
                let prev = dfs(s.substr(0, i));
                for (let j = 0; j < prev.length; j++) {
                    prev[j] += " " + sub;
                }
                res = res.concat(prev);
            }
        }
        cache[s] = res.slice();
        return res;
    })(s);
    return res;
};