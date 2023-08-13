/**
 * @param {number[][]} intervals
 * @return {number[][]}
 * first sort the array with interval[0] in ascending order
 * pick first element of array
 * check if intervals are overlapping then update the pair value with max(pair,interval)
 * if not overlapping then push it in result array
 * TC: O(N) for array loop + sort O(NlogN)
 * SC O(N)
 */
 var merge = function(intervals) {
    intervals = intervals.sort((a,b) => a[0] - b[0])
    const result = []
    let pair = intervals[0]
    for(const interval of intervals) {
      if (interval[0] <= pair[1]) {
        pair[1] = Math.max(pair[1], interval[1])
      } else {
        result.push(pair)
        pair = interval
      }
    }
    result.push(pair)
    return result
};
console.log(merge([[1,3],[2,6],[8,10],[9,12],[15,18]]));