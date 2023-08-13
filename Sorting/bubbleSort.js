/**
Start by comparing the first two elements in an array.
Swap them if required.
Continue till the end of the array. 
At this point, you have made a series of inner passes and completed an outer pass.
Repeat the process until the entire array is sorted.
Worst-case time complexity: Big O (n^2).
Average-case time complexity: Big theta (n^2).
Best-case time complexity: Big omega (n).
Space complexity: Big O (1).
 */

function bubbleSort(arr){

    //Outer pass
    for(let i = 0; i < arr.length; i++){

        //Inner pass
        for(let j = 0; j < arr.length - i - 1; j++){

            //Value comparison using ascending order

            if(arr[j + 1] < arr[j]){

                //Swapping
                [arr[j + 1],arr[j]] = [arr[j],arr[j + 1]]
            }
        }
    };
    return arr;
};

console.log(bubbleSort([5,3,8,4,6]));