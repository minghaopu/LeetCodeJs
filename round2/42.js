/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    var left = 0, right = height.length - 1;
    var minLeft = 0, minRight = 0;
    var water = 0;
    while (left <= right) {
        if (height[left] <= height[right]) {
            if (height[left] >= minLeft) minLeft = height[left];
            else water += minLeft - height[left];
            left++;
        } else {
            if (height[right] >= minRight) minRight = height[right];
            else water += minRight - height[right];
            right--;
        }
    }
    return water;
};