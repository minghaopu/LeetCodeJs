/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    const l1 = num1.length, l2 = num2.length;
    let sarr = new Array(l1 + l2).fill(0);
    
    for (let i = l1 - 1; i > -1; i--) {
        let carry = 0;
        for (let j = l2 - 1; j > -1; j--) {
            let tmp = (num1[i] - '0') * (num2[j] - '0') + sarr[i+j+1] + carry;
            carry = Math.floor(tmp / 10);
            sarr[i+j+1] = tmp % 10;
        }
        sarr[i] += carry;
    }
    let index = 0;
    while (index < l1 + l2 - 1) {
        if (sarr[index] === 0) index++;
        else break;
    }
    return sarr.slice(index).join('');
};