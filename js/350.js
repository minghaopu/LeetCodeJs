/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
	var res = [];
	var map = {};
	for (var i = 0; i < nums1.length; i++) {
		if (map[nums1[i]] === undefined) map[nums1[i]] = 1;
		else map[nums1[i]]++;
	}
	for (var i = 0; i < nums2.length; i++) {
		if (map[nums2[i]] && --map[nums2[i]] >= 0) res.push(nums2[i]);
	}
	return res;
};