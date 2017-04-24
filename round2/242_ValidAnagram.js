/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    let map = [];
    map.length = 128;
    map.fill(0);
    for (let i = 0; i < s.length; i++) {
        map[s.charCodeAt(i)]++;
        map[t.charCodeAt(i)]--;
    }
    return map.every((item, idx) => {
        return item === 0;
    })
};