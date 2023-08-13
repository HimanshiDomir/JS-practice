/**
 * @param {number[]} nums
 * @return {number[]}
 * create left, right and output array 
 * assign values in both and then calculate the output array based on left and right array
 * TC and SC O(N)
 */
 var productExceptSelf = function(nums) {
    const n = nums.length
    const left = Array(n).fill(0)
    const right = Array(n).fill(0)
    const output = Array(n).fill(0)

    left[0] = nums[0]
    right[n-1] = nums[n-1]

    for (let i = 1; i < n; i++) {
        left[i] = left[i-1] * nums[i]
    }

    for (let i = n - 2; i > 0; i--) {
        right[i] = right[i+1] * nums[i]
    }

    output[0] = right[1]
    output[n-1] = left[n-2]
    for (let i = 1; i < n-1; i++) {
        output[i] = left[i-1] * right[i+1]
    }

    return output
};
console.log(productExceptSelf([1,2,3,4]));