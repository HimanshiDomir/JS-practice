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
//  Two Pointer Technique
//  Another approach is to use the two pointer technique. The idea is to sort the array first,
//   and then use two pointers, one starting from the beginning and one from the end,
//    to find the triplets that add up to the target value.
//   This approach has a time complexity of O(n²) and doesn’t take up extra space.
function threeSum(nums, target) {
  let result = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
      if (i > 0 && nums[i] === nums[i - 1]) continue;
      let left = i + 1;
      let right = nums.length - 1;
      while (left < right) {
          const sum = nums[i] + nums[left] + nums[right];
          if (sum === target) {
              result.push([nums[i], nums[left], nums[right]]);
             // return result; // will give only one result
              while (left < right && nums[left] === nums[left + 1]) left++;
              while (left < right && nums[right] === nums[right - 1]) right--;
              left++;
              right--;
          } else if (sum < target) {
              left++;
          } else {
              right--;
          }
      }
  }
  return result;
}

console.log(threeSum([0, 2, 2, 5, 15, 4], 9));