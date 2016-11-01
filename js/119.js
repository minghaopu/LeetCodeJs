/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    var res = new Array(rowIndex + 1);
    res.fill(0);
    res[0] = 1;
    for (var i = 1; i < rowIndex + 1; i++) {
        for (var j = i; j > 0; j--) {
            res[j] += res[j-1];
        }
    }
    return res;
};