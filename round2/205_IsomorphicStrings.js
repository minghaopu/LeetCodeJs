/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let smap = {}, tmap = {};
    for (let i = 0; i < s.length; i++) {
        if (smap[s[i]] !== tmap[t[i]]) return false;
        tmap[t[i]] = smap[s[i]] = i;
    }
    return true;
};