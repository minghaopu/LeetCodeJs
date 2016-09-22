/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
        var res = "";
        for (var i = s.length - 1; i > -1; i--) {
            res += s[i];
        }
        return res;
};