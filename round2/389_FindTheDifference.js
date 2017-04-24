/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let map = [];
    map.length = 26;
    map.fill(0);
    for (var i = 0; i < s.length; i++) {
        map[s.charCodeAt(i) - 97]++;
        map[t.charCodeAt(i) - 97]--;
    }
    map[t.charCodeAt(i) - 97]--;
    for (let j = 0; j < 26; j++) {
        if (map[j] !== 0) return String.fromCharCode(j + 97);
    }
    return "";
};