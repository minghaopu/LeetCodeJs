/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let i = a.length - 1, j = b.length - 1;
    let carry = 0;
    let res = "";
    while (i >= 0 || j >= 0 || carry !== 0) {
        let val = 0;
        
        if (i >= 0 && j >= 0) {
            val = (a[i--] - '0') + (b[j--] - '0') + carry;
        } else if (i >= 0) {
            val = a[i--] - '0' + carry;
        } else if (j >= 0) {
            val = b[j--] - '0' + carry;
        } else {
            val = carry;
        }
        carry = Math.floor(val / 2);
        val %= 2;
        res = val + res;
    }
    return res;
};