/**
 * @param {string[]} strings
 * @return {string[][]}
 */
var groupStrings = function(strings) {
    let map = {};
    let res = [];
    for (let word of strings) {
        let num = 1;
        for (let i = 1; i < word.length; ++i) {
            let j = word.charCodeAt(i) - word.charCodeAt(i-1);
            if (j < 0) j = j + 26;
            num = num * 26 + j;
        }
        if (map[num] === undefined) map[num] = [];
        map[num].push(word);
    }
    for (let prop in map) {
        if (map.hasOwnProperty(prop)) res.push(map[prop]);
    }
    return res;
};