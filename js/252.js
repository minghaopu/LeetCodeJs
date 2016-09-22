/**
 * 252. Meeting Rooms
 */

/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function(intervals) {
    var sz = intervals.length;
    if (sz < 2) return true;
    var isAll = true;
    intervals.sort(function(i,j) {
    	if (i.start > j.start) {
    		if (i.start < j.end) {
    			isAll = false;
    		}
    		return 1;
    	}
    	if (i.start < j.start) {
    		if (i.end > j.start) {
    			isAll = false;
    		}
    		return -1;
    	}
    	isAll = false;
    	return 0;
    });
    return isAll;
};