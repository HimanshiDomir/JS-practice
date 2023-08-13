/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var removeDuplicate = function(nums) {
    let unique = nums.reduce((acc, num) => {
        if (!acc.includes(num)) {
            acc.push(num);
        }
        return acc;
    },[]);
    return unique;
};

console.log(removeDuplicate([2, 7, 11, 15, 2, 15]));

var removeDuplicates = function(nums) {
    let unique = nums.filter((num,index) => {
        return nums.indexOf(num) === index;
    });
    return unique;
};

console.log(removeDuplicates([2, 7, 11, 15, 2, 15, 3]));