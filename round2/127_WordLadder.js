/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    if (wordList.length === 0) return 0;
    if (beginWord === endWord) return 1;
    let queue = [beginWord];
    let charMap = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let level = 1;
    let cache = new Set(wordList);
    while (queue.length !== 0) {
        let size = queue.length;
        while (size--) {
            let front = queue.shift();
            for (let i = 0; i < front.length; i++) {
                for (let ch of charMap) {
                    let tmp = front.slice(0, i) + ch + front.slice(i+1);
                    if (!cache.has(tmp) || tmp === beginWord) continue;
                    if (tmp === endWord) return level+1;
                    queue.push(tmp);
                    cache.delete(tmp);
                }
            }
        }
        level++;
    }
    return 0;
};