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
        // to remove duplicate triplets
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

// const threeSum = (nums) => {
// 	nums.sort((a, b) => a-b); // correct way to sort // O(n log(n)) time
// 	let result = [];
// 	// This `i` will be our FIXED value, while the left and right pointers move around
// 	for (let i = 0; i <= nums.length - 3; i++) {
// 		// if index > 0 and current number equals previous number
// 		// We do not want duplicates, and already taken the previous answer
// 		// Skip this iteration with `continue`
// 		//if (i > 0 && nums[i] === nums[i - 1]) continue;
// 		// nums[i] is fixed, left and right are moving
// 		let left = i + 1;
// 		let right = nums.length - 1;
// 		while (left < right) {
// 			const s = nums[i] + nums[left] + nums[right];
// 			// When sorted, moving from left to right increased sum
// 			if (s < 0) left += 1;
// 			// When sorted, moving from right to left decreases sum
// 			else if (s > 0) right -= 1;
// 			else {
// 				// We found three numbers that sum up to target
// 				result.push([nums[i], nums[left], nums[right]]);
// 				// Get rid of duplicates
// 				// while (left < right && nums[left] === nums[left + 1]) left += 1;
// 				// // Get rid of duplicates
// 				// while (left < right && nums[right] === nums[right - 1])
// 				// 	right -= 1;
// 				// Our left and right pointers are still on a duplicate , so move one more time
// 				left += 1;
// 				right -= 1;
// 			}
// 		}
// 	}

// 	return result;
// };

console.log(threeSum([0, 2, 2, 0, 2, 2, 5, 15, 4], 9));