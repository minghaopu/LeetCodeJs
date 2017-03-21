/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    if (nums1.length < nums2.length) return findMedianSortedArrays(nums2, nums1);
    let m = nums1.length, n = nums2.length;
    if (n === 0) return (nums1[Math.floor((m-1)/2)] + nums1[Math.floor(m/2)]) / 2;
    let low = 0, high = 2 * n;
    while (low <= high) {
        let mid2 = Math.floor((low + high) / 2);
        let mid1 = m + n - mid2;
        
        let l1 = mid1 === 0 ? Number.MIN_SAFE_INTEGER : nums1[Math.floor((mid1-1)/2)];
        let l2 = mid2 === 0 ? Number.MIN_SAFE_INTEGER : nums2[Math.floor((mid2-1)/2)];
        let r1 = mid1 === 2 * m ? Number.MAX_SAFE_INTEGER : nums1[Math.floor(mid1/2)];
        let r2 = mid2 === 2 * n ? Number.MAX_SAFE_INTEGER : nums2[Math.floor(mid2/2)];
        if (l1 > r2) low = mid2 + 1;
        else if (l2 > r1) high = mid2 - 1;
        else return (Math.max(l1, l2) + Math.min(r1, r2)) / 2;
    }
    return
    
};