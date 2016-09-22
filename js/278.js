/**
 * 278. First Bad Version
 */


/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

var isBadVersion = function (n) {
	var vb = [];
	var value = false;
	for (var i = 0; i<1000; i++) {
		if (i == 2) {
			value = true;
		}
		vb.push(value);
	}
	return vb[n];
}
/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */

    return function(n) {
        var low = 1;
        var high = n;
        var mid;
        while (low<=high) {
        	mid = Math.floor(low + (high-low)/2);
        	if (isBadVersion(mid)) {
        		high = mid - 1;
        	}else{
        		low = mid + 1;
        	}

        }
        return low;
    };
};
console.log(solution(isBadVersion)(2))