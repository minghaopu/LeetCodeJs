/**
 * @param {string} s
 * @return {string}
 */
 var longestParlindrome = function (s) {
 	let start = 0, end = 0;
 	const getCenter = function (s, c) {
 		let l = c, r = c;
 		while (s[l] === s[r] && r <= s.length) r++;
 		return [l, --r];
 	}
 	const expend = function (s, position) {
 		let l = position[0], r = position[1];
 		while (l >= 0 && r < s.length && s[l] == s[r]) {
 			l--;
 			r++;
 		}
 		return [++l, --r];
 	}

 	for (let i = 0; i < s.length; i++) {
 		let center = getCenter(s, i);
 		let bounds = expend(s, center);
 		let left = bounds[0], right = bounds[1];
 		if (right - left >= end - start) {
 			start = left;
 			end = right;
 		}
 		i = center[1];
 	}
 	return s.substring(start, end + 1);
 }


 /**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    var table = [];
    var length = 1, start = 0;
    for (let i = 0; i < s.length; i++) {
        table[i] = new Array(s.length).fill(0);
        table[i][i] = 1;
    }
    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] === s[i+1]) {
            table[i][i+1] = 1;
            length = 2;
            start = i;
        }
    }
    for (let len = 3; len <= s.length; len++) {
        for (let i = 0; i < s.length - len + 1; i++) {
            let j = i + len - 1;
            if (s[i] === s[j] && table[i+1][j-1] === 1) {
                table[i][j] = 1;
                start = i;
                length = len;
            }
        }
    }
    
    return s.substr(start, length);
};
