/**
Start by comparing the second element of the array 
with the first element assuming the first element is the sorted portion.
Swap if the second element is smaller than the first element.
Iterate through comparing the first element with each element of the unsorted portion.
If the element from the unsorted portion is smaller than the first element, swap.
After iterating through the entire array, increment the sorted portion to the next index 
and recursively compare
the value of the last index of the sorted portion with each value of the unsorted portion.
Swap where the value of the unsorted portion is smaller.
The sorted portion shall increase until it covers the entire array yielding a sorted array.
Worst-case time complexity: Big O (n^2).
Average-case time complexity: Big theta (n^2).
Best-case time complexity: Big omega (n).
Space complexity: Big O (1).
 */
function insertionSort(arr){
    //Start from the second element.
    for(let i = 1; i < arr.length;i++){

        //Go through the elements behind it.
        for(let j = i - 1; j > -1; j--){
            
            //value comparison using ascending order.
            if(arr[j + 1] < arr[j]){

                //swap
                [arr[j+1],arr[j]] = [arr[j],arr[j + 1]];

            }
        }
    };

  return arr;
}

console.log(insertionSort([23, 1, 10, 5, 2]));