/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    let sl = s.length, pl = p.length, sstar = -1, pstar = -1, i = null, j = null;
    for (i = 0, j = 0; i < sl; i++, j++) {
        if (p[j] === '*') {
            sstar = i;
            pstar = j;
            i--;
        } else {
            if (s[i] !== p[j] && p[j] !== '?') {
                if (pstar >= 0) {
                    i = sstar;
                    sstar++;
                    j = pstar;
                } else return false;
            }
        }
    }
    while (p[j] === '*') j++;
    return j === pl;
};