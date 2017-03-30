/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    candidates.sort((a, b) => {return a - b;});
    let res = [];
    let path = [];
    (function dfs(target, start) {
        if (target === 0) {
            res.push(path.slice());
            return;
        }
        for (let i = start; i < candidates.length; i++) {
            if (i > start && candidates[i] === candidates[i-1]) continue;
            if (candidates[i] > target) break;
            path.push(candidates[i]);
            dfs(target - candidates[i], i);
            path.pop();
        }
    })(target, 0);
    return res;
};

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    candidates.sort((a, b) => a - b);
    let res = [];
    (function dfs(target, start, path) {
        if (target === 0) {
            res.push(path.concat());
            return;
        }
        for (let i = start; i < candidates.length; i++) {
            if (i > start && candidates[i] === candidates[i-1]) continue;
            if (candidates[i] > target) break;
            path.push(candidates[i]);
            dfs(target - candidates[i], i + 1, path);
            path.pop();
        }
    })(target, 0, []);
    return res;
};