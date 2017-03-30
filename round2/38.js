/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if (typeof n !== "number" || n === 0) return "";
    let res = "1";
    while (--n) {
        let cur = "";
        for (let i = 0; i < res.length; i++) {
            let count = 1;
            while (i + 1 < res.length && res[i] === res[i+1]) {
                count++;
                i++;
            }
            cur += count.toString() + res[i];
        }
        res = cur;
    }
    return res;
};