/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestWordDistance = function(words, word1, word2) {
  let len = words.length,
    w1 = -len,
    w2 = -len,
    res = Infinity;
  for (let i = 0; i < len; i++) {
    if (word1 === words[i]) {
      if (word1 === word2) res = Math.min(i - w1, res);
      else res = Math.min(i - w2, res);
      w1 = i;
    } else if (word2 === words[i]) {
      res = Math.min(i - w1, res);
      w2 = i;
    }
  }
  return res;
};