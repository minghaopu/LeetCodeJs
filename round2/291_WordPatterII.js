/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPatternMatch = function(pattern, str) {
    let chMap = {}, tokenMap = {};
    return (function helper(i, j) {
        if (i === pattern.length && j === str.length) return true;
        else if (i === pattern.length || j === str.length) return false;
        else if (str.length - j >= pattern.length - i) {
            let ch = pattern[i];
            for (let len = 1; len <= str.length - j - (pattern.length - (i + 1)); len++) {
                let token = str.substr(j, len);
                if (tokenMap[token] === undefined && chMap[ch] === undefined) {
                    tokenMap[token] = ch;
                    chMap[ch] = token;
                    if (helper(i + 1, j + len)) return true;
                    delete tokenMap[token];
                    delete chMap[ch];
                } else if (tokenMap[token] === ch && chMap[ch] === token && helper(i + 1, j + len)) return true;
            }
            return false;
        } else return false;
    })(0, 0);
};