/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function(num) {
    const d1 = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", 'Twelve', "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
    const d2 = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
    const base = ["", "Thousand", "Million", "Billion"];
    function hundredToWord(num) {
        let res = "";
        let fac = Math.floor(num / 100);
        let mod = num % 100;
        if (fac !== 0) res += d1[fac] + " Hundred";
        if (mod !== 0) res += (fac === 0 ? "" : " ") + (mod < 20 ? d1[mod] : (d2[Math.floor(mod/10)] + (mod % 10 === 0 ? "" : " " + d1[mod%10])));
        return res;
    }
    if (num === 0) return "Zero";
    let res = "";
    let count = 0, hundred = 0;
    while (num !== 0) {
        hundred = num % 1000;
        num = Math.floor(num / 1000);
        if (hundred !== 0) res = hundredToWord(hundred) + " " + base[count++] + " " + res;
        else count++;
    }
    let idx = res.length - 1;
    while (res[idx] === " ") idx--;
    return res.substr(0, idx + 1);
};