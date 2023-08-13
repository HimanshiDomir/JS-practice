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
 var twoSum = function(nums, target) {
    const map = new Map()
    for(const index in nums) {
        const pairNumber = target - nums[index]
        if (map.has(pairNumber)) return [index, map.get(pairNumber)]
        map.set(nums[index], index)
    }
};

console.log(twoSum([2, 7, 11, 15], 9));