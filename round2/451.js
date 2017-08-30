/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let map = [];
    for (let i = 0; i < 128; i++) map[i] = [i, 0];
    for (let i = 0; i < s.length; i++) map[s.charCodeAt(i)][1]++;
    map.sort((a, b) => {
        if (a[1] - b[1] > 0) return -1;
        else if (a[1] - b[1] < 0) return 1;
        else return 0;
    });
    let res = "";
    for (let i = 0; i < 128; i++) {
        if (map[i][1] === 0) continue;
        res += String.fromCharCode(map[i][0]).repeat(map[i][1]);
    }
    return res;
};