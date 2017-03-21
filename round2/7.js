/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if (x < 0) return -reverse(-x);
    let res = 0;
    while (x !== 0) {
        let tail = x % 10;
        let tmp = res * 10 + tail;
        if (Math.floor((tmp - tail) / 10) !== res) return 0;
        res = tmp;
        x = Math.floor(x / 10);
    }
    return res;
};