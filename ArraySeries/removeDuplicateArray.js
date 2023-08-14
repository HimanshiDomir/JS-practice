/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var removeDuplicate = function (nums) {
    let unique = nums.reduce((acc, num) => {
        if (!acc.includes(num)) {
            acc.push(num);
        }
        return acc;
    }, []);
    return unique;
};

console.log(removeDuplicate([2, 7, 11, 15, 2, 15]));

var removeDuplicates = function (nums) {
    let unique = nums.filter((num, index) => {
        return nums.indexOf(num) === index;
    });
    return unique;
};

console.log(removeDuplicates([2, 7, 11, 15, 2, 15, 3]));



// if equal then increment only read Pointer
// else if not equal 
    // first increment write pointer and put value of read pointer in it
    // and then increment read pointer


const removeDup = function (nums) {
    let readPointer = 1;
    let writePointer = 0;
    while (readPointer <= nums.length - 1) {
        if (nums[writePointer] == nums[readPointer]) {
            readPointer++
        }
        else {
            writePointer++;
            nums[writePointer] = nums[readPointer]
            readPointer++;
        }

    }
    return nums.splice(0, writePointer);
}
console.log(removeDup([1, 2, 2, 3, 4, 5, 6, 6, 5]));