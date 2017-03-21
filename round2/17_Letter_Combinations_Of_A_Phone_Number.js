/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (typeof digits !== "string" || digits === "") return [];
    let board = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
    let res = [""];
    for (let i = 0; i < digits.length; i++) {
        if (digits[i] >= '0' && digits[i] <= '9') {
            let add = board[digits[i] - '0'];
            if (add !== "") {
                let tmp = [];
                for (let j = 0; j < res.length; j++) {
                    for (let c of add) tmp.push(res[j] + c);
                }
                res = tmp;
                
            }
        } else break;
    }
    return res;
};