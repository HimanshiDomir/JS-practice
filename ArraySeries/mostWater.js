/**
 * @param {number[]} height
 * @return {number}
 * calculate min of l and r so that we can check how much max water it can hold
 * multiple the above result with the gap between l and r to get the total amount it can hold
 * find the maximum of above and max
 * if l is greater than r then decrement r, 
 * else if l is less than r then, increment l,
 *  else increment l and decrement r
 * TC O(N) and SC O(1)
 */
 var maxArea = function(height) {
    let mx = 0
    let l = 0
    let r = height.length - 1

    while (l < r) {
        mx = Math.max(mx, Math.min(height[l], height[r]) * (r-l))
        if (height[l] < height[r]) l += 1
        else if (height[r] < height[l]) r -= 1
        else {
            l += 1
            r -= 1
        }
    }
    return mx
};
console.log(maxArea([1,8,6,2,5,4,8,3,7]));