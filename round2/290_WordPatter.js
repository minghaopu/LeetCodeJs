/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    let chMap = {}, strMap = {};
    let i = 0, start = 0, j = 0;
    let token = "", ch = "";
    while (start < str.length) {
        if (i >= pattern.length) return false;
        while (j < str.length && str[j] !== ' ') j++;
        token = str.substring(start, j);
        start = ++j; // remove space
        ch = pattern[i++];
        if (strMap[token] === undefined && chMap[ch] === undefined) {
            strMap[token] = ch;
            chMap[ch] = token;
        } else if (strMap[token] === ch && chMap[ch] === token) continue;
        else return false;
    }
    return i === pattern.length;
};