/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (!Array.isArray(strs) || strs.length === 0 || typeof strs[0] !== "string" || strs[0] === "") return "";
    let prefix = strs[0];
    for (let i = 0; i < prefix.length; i++) {
        for (let j = 1; j < strs.length; j++) {
            if (typeof strs[j] !== "string" || i > strs[j].length || strs[j][i] !== prefix[i]) return prefix.substring(0, i);
        }
    }
    return prefix;
};