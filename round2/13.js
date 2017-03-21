/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    if (typeof s !== "string" || s === "") return 0;
    let cache = new Map([
        ['M', 1000],
        ['C', 100],
        ['D', 500],
        ['L', 50],
        ['X', 10],
        ['V', 5],
        ['I', 1]
    ]);
    let pre = 1001;
    let num = 0;
    for (let i = 0; i < s.length; i++) {
        if (!cache.has(s[i])) return num;
        let val = cache.get(s[i]);
        if (pre < val) num = num - pre + val - pre;
        else num += val;
        pre = val;
    }
    return num;
};