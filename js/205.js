/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    var smap = {};
    var tmap = {};
    for (var i = 0; i < s.length; i++) {
        if (smap[s[i]] === undefined && tmap[t[i]] === undefined) {
            smap[s[i]] = i + 1; // record position
            tmap[t[i]] = i + 1;
        }
        if (smap[s[i]] !== tmap[t[i]]) {
        	return false;
        }
    }
    return true;
};
