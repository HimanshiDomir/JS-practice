/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * create a map
 * check if the element by target - target - nums[index] is present in Map
 * if number is present then , return the index
 * else set the number with index as value in map
 * TC: O(n) nd SC: O(n)
 */


//  Brute Force Solution
//  The brute force solution is the most straightforward approach to solving this problem. 
// We can simply iterate through the array and compare every possible triplet of elements to see 
// if they add up to the target value. This can be done by using nested loops. 
// The outermost loop iterates through the array, the middle loop starts from the outer loop’s current index +1 
// and continues till the end of the array, and the innermost loop starts from the middle loop’s current index +1 
// and continues till the end of the array. For every triplet of elements being checked, if the sum is equal to the target, we add it to the result array.
//time complexity of O(n³)  and SC O(N)
 function threeSum(nums, target) {
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                if (nums[i] + nums[j] + nums[k] === target) {
                    result.push([nums[i], nums[j], nums[k]]);
                }
            }
        }
    }
    return result;
}

console.log(threeSum([2, 5, 2, 15], 9));



// Using a hash table
// Another approach is to use a hash table to store the elements as we iterate through the array.
//  For each element, we check if the pair (the target minus the current element) is already in the hash table.
// If it is, we have found the two elements that add up to the target value.
//time complexity of O(n2)  and SC O(N)
function threeSumHash(nums, target) {
    let result = [];
    const hash = {};
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            const complement = target - (nums[i] + nums[j]);
            if (complement in hash) {
                result.push([nums[i], nums[j], complement]);
            } else {
                hash[nums[j]] = true;
            }
        }
    }
   
    return result;
}
console.log(threeSumHash([2, 5, 2, 15], 9));