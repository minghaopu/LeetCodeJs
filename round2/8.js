/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    let match = str.match(/^\s*[\-\+]?\d+/gi);
    let rel = match && +match[0] || 0;
    if (rel > Math.pow(2, 31) - 1) return Math.pow(2, 31) - 1;
    if (rel < -Math.pow(2, 31)) return -Math.pow(2, 31);
    return rel;
};