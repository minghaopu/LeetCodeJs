/**
 * 38. Count and Say
 */

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if (n === 1) return "1";
    var result = "1";
    for (var i = 2; i <= n; i++) {
        result = convert(result);
    }
    return result;
};
var convert = function(str) {
    var r = "";
    var count = 1;
    for (var i = 1; i < str.length; i++) {
        if (str[i] == str[i-1]) {
            count++;
        } else {
            r += "" + count + str[i-1];
            count = 1;
        }
    }
    r += "" + count + str[i-1];
    return  r;
}
countAndSay(3);