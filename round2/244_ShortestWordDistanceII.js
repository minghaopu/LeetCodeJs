/**
 * @param {string[]} words
 */
var WordDistance = function(words) {
  this.cache = {};
  for (let i = 0; i < words.length; i++) {
    if (!this.cache[words[i]]) this.cache[words[i]] = [];
    this.cache[words[i]].push(i);
  }
};

/** 
 * @param {string} word1 
 * @param {string} word2
 * @return {number}
 */
WordDistance.prototype.shortest = function(word1, word2) {
  let indices1 = this.cache[word1],
    indices2 = this.cache[word2];
  let res = Infinity;
  for (let i = 0; i < indices1.length; i++) {
    for (let j = 0; j < indices2.length; j++) {
      res = Math.min(Math.abs(indices1[i] - indices2[j]), res);
    }
  }
  return res;
};

/** 
 * Your WordDistance object will be instantiated and called as such:
 * var obj = Object.create(WordDistance).createNew(words)
 * var param_1 = obj.shortest(word1,word2)
 */