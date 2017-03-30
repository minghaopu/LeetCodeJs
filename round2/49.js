/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let cache = {};
    for(let word of strs) {
        let tmp = word.split('').sort().join('');
        if (cache[tmp] === undefined) cache[tmp] = [word];
        else cache[tmp].push(word);
    }
    let res = [];
    for (let prop in cache) {
        if (cache.hasOwnProperty(prop)) {
            if (Array.isArray(cache[prop])) res.push(cache[prop]);
        }
    }
    return res;
};