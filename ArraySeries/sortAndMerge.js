


// Time Complexity: O(n*m)
// Space Complexity: O(1)
function mergeArray(arr1, arr2,
    n, m)
{

// Now traverse the array1 and if
// arr2 first element
// is less than arr1 then swap
for(let i = 0; i < n; i++)
{
if (arr1[i] > arr2[0])
{
 
// Swap
let temp = arr1[i];
arr1[i] = arr2[0];
arr2[0] = temp;

// After swapping we have to sort the array2
// again so that it can be again swap with
// arr1

// We will store the firstElement of array2
// and left shift all the element and store
// the firstElement in arr2[k-1]
let firstElement = arr2[0];

let k;
 
for(k = 1;
    k < m && arr2[k] < firstElement;
    k++)
{
    arr2[k - 1] = arr2[k];
}
arr2[k - 1] = firstElement;
}
}
return {arr1,arr2}
}

// Driver Code

let arr1 = [ 1, 3, 5, 7 ];
let arr2 = [ 0, 2, 6, 8, 9 ];
let n = 4, m = 5;

console.log(mergeArray(arr1, arr2, n, m));
