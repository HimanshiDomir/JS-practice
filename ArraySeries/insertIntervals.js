/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 * TC SC O(N)
 * check if the intervals are overlapping and if not push it in result array
 * if overlapping then create a new interval witj start s min of(int,newint) and end as max(int,newint)
 */
 var insert = function(intervals, newInterval) {
    const result = []
    for (const interval of intervals) {
        if (interval[1] < newInterval[0]) {
            result.push(interval)
        } else if (newInterval[1] < interval[0]) {
            result.push(newInterval)
            newInterval = interval
        } else {
            newInterval[0] = Math.min(interval[0], newInterval[0])
            newInterval[1] = Math.max(interval[1], newInterval[1])
        }
    }
    result.push(newInterval)
    return result
};
console.log(insert([[1,2],[3,10],[12,16]],[2,10]));