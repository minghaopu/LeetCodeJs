/**
 * @param {string} input
 * @return {number[]}
 */
var getComputeResult = function(a, b, op) {
    if (op === "-") return a - b;
    else if (op === '+') return a + b;
    else return a * b;
}
var subCompute = function(nums, ops, start, end) {
    var res = [];
    var front = [];
    var others = [];
    if (start === end - 1) {
        res.push(getComputeResult(nums[start], nums[end], ops[start]));
        return res;
    }
    for (var i = 0; start + i < end; i++) {
        if (i === 0) {
            others = subCompute(nums, ops, start + 1, end);
            for (var j = 0; j < others.length; j++) {
                res.push(getComputeResult(nums[start], others[j], ops[start]));
            }
        } else if (start + i === end - 1) {
            front = subCompute(nums, ops, start, end - 1);
            for (var j = 0; j < front.length; j++) {
                res.push(getComputeResult(front[j], nums[end], ops[end - 1]));
            }
        } else {
            front = subCompute(nums, ops, start, start + i);
            others = subCompute(nums, ops, start + 1 + i, end);
            for (var j = 0; j < front.length; j++) {
                for (var k = 0; k < others.length; k++) {
                    res.push(getComputeResult(front[j], others[k], ops[start + i]));
                }
            }
        }
    }
    return res;
}
var diffWaysToCompute = function(input) {
    var nums = [],
        ops = [];
    var num = "";
    for (var i = 0; i < input.length; i++) {
        var t = input[i];
        if (t <= "9" && t >= "0") num += t;
        else {
            nums.push(parseInt(num));
            ops.push(t);
            num = "";
        }
    }
    if (num !== "") nums.push(parseInt(num));
    if (ops.length === 0) return nums;
    return subCompute(nums, ops, 0, nums.length - 1);
};