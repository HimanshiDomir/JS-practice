/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * sort the array
 * take two pointers left as 0 index and right as last index
 * while the left pointer is less than right pointer if sum of left and right is equal to target return the index
 * else if sum is greater than target then decrement the right pointer
 * else if sum is less than target then increment the left pointer
 * TC: O(NlogN) nd SC: O(1)
 */
 var twoSum = function(nums, target) {
    nums.sort((a,b) => a-b);
    console.log(nums);
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
      let s = nums[left] + nums[right];

      if (s === target) {
        return [nums[left], nums[right]];
      } else if (s < target) {
        left++;
      } else if (s > target) {
        right--;
      }
    }
    return [-1, -1];
  };

console.log(twoSum([2, 7, 11, 15], 9));