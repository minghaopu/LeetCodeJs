/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    if (typeof num !== 'number') return "";
    let map = [
        ["","I","II","III","IV","V", "VI", "VII", "VIII", "IX"],
        ["","X","XX","XXX","XL","L", "LX", "LXX", "LXXX", "XC"],
        ["","C","CC","CCC","CD","D", "DC", "DCC", "DCCC", "CM"],
        ["", "M", "MM", "MMM"]
    ];
    return map[3][Math.floor(num/1000)] + map[2][Math.floor((num % 1000) / 100)] + map[1][Math.floor((num % 100) / 10)] + map[0][num % 10];
};