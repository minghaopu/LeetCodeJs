/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    if (Array.isArray(height) && height.length === 0) return 0;
    let water = 0;
    let l = 0, r = height.length - 1;
    let h = 0;
    while (l < r) {
        h = Math.min(height[l], height[r]);
        water = Math.max(water, h * (r - l));
        while (l < r && height[l] <= h) l++;
        while (l < r && height[r] <= h) r--;
    }
    return water;
};