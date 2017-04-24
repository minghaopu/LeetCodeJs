/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals) {
    if (intervals.length < 2) return intervals; 
    intervals.sort((a, b) => {
        return a.start === b.start ? a.end - b.end : a.start - b.start;
    })
    let start = intervals[0].start, end = intervals[0].end;
    let res = [];
    for (let i = 1; i < intervals.length; i++) {
        let interval = intervals[i]
        if (interval.start <= end) {
            if (end < interval.end) end = interval.end;
        } else {
            res.push(new Interval(start, end));
            start = interval.start;
            end = interval.end;
        }
    }
    res.push(new Interval(start, end));
    return res;
};

