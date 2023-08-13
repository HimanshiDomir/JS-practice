/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * create a map
 * check if the element is present in Map
 * if number is present then return true
 * else set the number with true as value in map
 * else return false
 * TC: O(n) nd SC: O(n)
 */
 var containsDuplicate = function(nums) {
    const map = new Map()
    for(const num of nums) {
        if (map.has(num)) return true;
        map.set(num,true);
    }
    return false;
};

console.log(containsDuplicate([2, 7, 11, 15]));

var containsDuplicateSet = function(nums) {
    const set = new Set(nums);
    return set.size === nums.length ? false : true;
};

console.log(containsDuplicateSet([2, 7, 11, 15, 2]));