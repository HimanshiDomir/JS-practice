/**
Given an array, assume that the first element in the array is the smallest.
From the other portion of the array, find the minimum value, and swap it with the first element. 
At this point, you have completed the first pass.
Repeat the same procedure with the rest of the array comparing the elements to the right, not the left.
Worst-case time complexity: Big O (n^2).
Average-case time complexity: Big theta (n^2).
Best-case time complexity: Big O (n^2).
Space complexity: Big O (1).
 */

function selectionSort(arr) {
    let min;
  
    //start passes.
    for (let i = 0; i < arr.length; i++) {
      //index of the smallest element to be the ith element.
      min = i;
  
      //Check through the rest of the array for a lesser element
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[min]) {
          min = j;
        }
      }
  
      //compare the indexes
      if (min !== i) {
        //swap
        [arr[i], arr[min]] = [arr[min], arr[i]];
      }
    }
  
    return arr;
  }
  
  console.log(selectionSort([29, 72, 98, 13, 87, 66, 52, 51, 36]));