/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1 || s.length < 2) return s;
    const cycle = 2 * numRows - 2;
    let rows = new Array(numRows).fill("");
    for (let i = 0; i < s.length; i++) {
        let idx = i % cycle;
        if (idx < numRows) rows[idx] += s[i];
        else rows[cycle - idx] += s[i];
    }
    return rows.reduce((res, v, i) => {
        res += v;
        return res;
    }, "");
};