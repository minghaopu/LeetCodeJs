/**
 * @param {number[]} heights
 * @return {number}
 */
// Array.prototype.top = function() {
//     return this[this.length - 1];
// }
var largestRectangleArea = function(heights) {
    heights.push(0);
    let stack = [], top = -1, res = 0;
    for (let i = 0; i < heights.length; i++) {
        // if (top === -1 || heights[stack[top]] < heights[i]) {
        //     stack.push(i);
        //     top++;
        // } else {
            while (top > -1 && heights[stack[top]] >= heights[i]) {
                let height = heights[stack[top]];
                stack.pop();
                top--;
                let width = top === -1 ? i : (i - (stack[top] + 1));
                res = Math.max(height * width, res);
            }
            stack.push(i);
            top++;
        // }
    }
    return res;
};