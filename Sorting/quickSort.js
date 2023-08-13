/**
Choose a pivot element from the array.
Partition the array into two subarrays, one containing elements smaller than the pivot,
and the other containing elements larger than the pivot.
Recursively apply the quick sort algorithm to the two subarrays until the entire array is sorted.
Worst-case time complexity: Big O (n^2).
Average-case time complexity: Big theta (n * log n).
Best-case time complexity: Big omega (n * log n).
Space complexity: Big O (n * log n).
 */
function quickSort(arr, start, end) {
    // Base case or terminating case
    if (start >= end) {
        return;
    }
    
    // Returns pivotIndex
    let index = partition(arr, start, end);
    
    // Recursively apply the same logic to the left and right subarrays
    quickSort(arr, start, index - 1);
    quickSort(arr, index + 1, end);
}
function partition(arr, start, end){
    // Taking the last element as the pivot
    const pivotValue = arr[end];
    let pivotIndex = start; 
    for (let i = start; i < end; i++) {
        if (arr[i] < pivotValue) {
        // Swapping elements
        [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
        // Moving to next element
        pivotIndex++;
        }
    }
    
    // Putting the pivot value in the middle
    [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]] 
    return pivotIndex;
};
array = [7, -2, 4, 1, 6, 5, 0, -4, 2]
quickSort(array, 0, array.length - 1)

console.log(array);