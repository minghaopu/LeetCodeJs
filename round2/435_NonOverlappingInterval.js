/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {number}
 */
// intervals = [];
// 
var eraseOverlapIntervals = function(intervals) {
    if (intervals.length < 2) return 0;
    intervals.sort((a, b) => {
        return a.start === b.start ? a.end - b.end : a.start - b.start;
    })
    let res = 0, pre = 0;
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i].start < intervals[pre].end) {
            res++;
            if (intervals[i].end < intervals[pre].end) pre = i;
        } else pre = i;
    }
    return res;
};