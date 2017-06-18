/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestDistance = function(words, word1, word2) {
  const len = words.length;
  let w1 = -len,
    w2 = -len,
    res = len;
  for (let i = 0; i < words.length; i++) {
    if (words[i] === word1) {
      res = Math.min(i - w2, res);
      w1 = i;
    } else if (words[i] === word2) {
      res = Math.min(i - w1, res);
      w2 = i;
    }
  }
  return res;
};