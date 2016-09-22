/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
	var r = [];
	nums1.sort(); 											//mlogm
	nums2.sort(); 											//nlogn
	for (var i = 0, j = 0; i < nums1.length; i++) {			//nlogm
		j = nums2.indexOf(nums1[i]);
		if (j > -1 && r.indexOf(nums1[i]) === -1) {
			r.push(nums1[i]);
			nums2.splice(0, j);
		}
	}
	return r;
};