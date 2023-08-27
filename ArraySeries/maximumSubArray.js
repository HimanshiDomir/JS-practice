/**
 * @param {number[]} nums
 * @return {number[]}
 * take max as arr[0] and sum as 0
 * iterate over the array and add that number to the sum
 * assign max the value of maximum from max and sum
 * if sum is less than 0 make it zero again
 * TC and SC O(1)
 */
 var maximumSubArray = function(nums) {
    let sm = 0;
    let max = nums[0];
    let s = 0;
    let start = 0;
    let end = 0;

    nums.forEach((n,i) => {
        sm += n;
       if(max<sm) {
           max = sm;
           start=s;
           end=i;
        
        }
        //max = Math.max(sm, max);
        if (sm < 0) {
            s = i+1;
            sm = 0;
        }
    });
    console.log(nums.slice(start,end+1));
    return sm;
};
console.log(maximumSubArray([2,-1,-3,4,-1,2,1,-5,4]));