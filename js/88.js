/**
 * 88. Merge Sorted Array
 */

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// var merge = function(nums1, m, nums2, n) {
// 	var i = 0, j = 0;
// 	if (nums1.length > m) nums1.length = m;
// 	while (j < n) {
// 		if (nums1[i]===undefined||nums2[j]<nums1[i]) {
// 			nums1.splice(i,0,nums2[j]);
// 			j++;
// 		}else{
// 			i++;
// 		}
// 	} 
// }
var merge = function(nums1, m, nums2, n) {
    for (var i = m - 1, j = n - 1, k = m + n - 1; j >= 0; k--) {
        if (i >= 0 && nums1[i] >= nums2[j]) {
            nums1[k] = nums1[i--];
        }else{
            nums1[k] = nums2[j--];
        }
    }
}