/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    if (words.length === 0) return [];
    var map = {};
    for (let str of words) {
        if (map[str] === undefined) map[str] = 1;
        else map[str]++;
    }
    
    let len = words[0].length, size = words.length;
    
    let res = [];
    
    
    // TLE
    // const reg = new RegExp(`.{1,${len}}`, 'g');
    // for (let i = 0; i <= s.length - len * size; i++) {
    //     let arr = s.substr(i, len * size).match(reg);
    //     let window = {};
    //     let j = 0;
    //     while (j < size) {
    //         let word = arr[j];
    //         window[word] = window[word] === undefined ? 1 : window[word] + 1;
    //         if (map[word] === undefined || window[word] > map[word]) break;
    //         j++;
    //     }
    //     if (j === size) res.push(i);
    // }
    // return res;
        
        
    for (let i = 0; i <= s.length - len * size; i++) {
        let window = {};
        let j = 0;
        while (j < size) {
            let word = s.substr(i + j * len, len);
            if (map[word] !== undefined) {
                if (window[word] === undefined) window[word] = 1;
                else window[word]++;
                if (window[word] > map[word]) break;
            } else break;
            j++;
        }
        if (j === size) res.push(i);
    }
    
    return res;
    
};