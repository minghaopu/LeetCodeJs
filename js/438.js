/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    let smap = new Array(26), pmap = new Array(26);
    smap.fill(0);
    pmap.fill(0);
    for (let i = 0; i < p.length; i++) {
        smap[s.charCodeAt(i) - 97]++;
        pmap[p.charCodeAt(i) - 97]++;
    }
    let res = [];
    if (JSON.stringify(smap) === JSON.stringify(pmap)) res.push(0);
    for (let i = p.length; i < s.length; i++) {
        smap[s.charCodeAt(i) - 97]++;
        smap[s.charCodeAt(i - p.length) - 97]--;
        if (JSON.stringify(smap) === JSON.stringify(pmap)) res.push(i - p.length + 1);
    }
    return res;
    
};