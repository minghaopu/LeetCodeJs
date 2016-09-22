/**
 * 293. Flip Game
 */


/**
 * @param {string} s
 * @return {string[]}
 */
var generatePossibleNextMoves = function(s) {
    var result = [];

    var i = 0;
    while (i > -1) {
        i = s.indexOf("++", i);
        if (i !== -1) {
            var t = s.substr(0,i)+"--"+ (i+2 < s.length? s.substr(i+2):"");
            result.push(t);
            i++;
        }
    }
    return result;
};
var s = "++++";
generatePossibleNextMoves(s);