/**
 * 125. Valid Palindrome
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    var r = /[a-z0-9]/i;
    var i = 0, j = s.length - 1;
    var c1, c2;
    while (i <= j) {
        c1 = s[i];
        if (!r.test(c1)) {
            i++;
            continue;
        }
        c2 = s[j];
        if (!r.test(c2)) {
            j--;
            continue;
        }
        if (c1.toUpperCase() != c2.toUpperCase()) return false;
        i++;
        j--;
    }
    return true;
};