/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    var res = [];
    res.length = n;
    var val;
    for (var i = 0; i < n; i++) {
        val = i + 1;
        if (val % 15 === 0) res[i] = "FizzBuzz";
        else if (val % 3 === 0) res[i] = "Fizz";
        else if (val % 5 === 0) res[i] = "Buzz";
        else res[i] = "" + val;
    }
    return res;
};