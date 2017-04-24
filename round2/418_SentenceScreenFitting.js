/**
 * @param {string[]} sentence
 * @param {number} rows
 * @param {number} cols
 * @return {number}
 */
var wordsTyping = function(sentence, rows, cols) {
    let s = "";
    for (let word of sentence) s += word + " ";
    let start = 0, l = s.length;
    for (let i = 0; i < rows; i++) {
        start += cols;
        while (start > 0 && s[start % l] !== " ") start--;
        start++; // jump space
    }
    return Math.floor(start / l);
};