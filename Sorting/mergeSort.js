/**
Choose a pivot element from the array.
Partition the array into two subarrays, one containing elements smaller than the pivot,
and the other containing elements larger than the pivot.
Recursively apply the quick sort algorithm to the two subarrays until the entire array is sorted.
Worst-case time complexity: Big O (n * log n).
Average-case time complexity: Big theta (n * log n).
Best-case time complexity: Big omega (n * log n).
Space complexity: Big O (n).
 */
function mergeSortedList(leftList, rightList) {
    let sortedList = [];
    // create sorted array with left and right sublist
    while(leftList.length && rightList.length) {
        if (leftList[0] <= rightList[0]) {
            sortedList.push(leftList.shift());
        } else {
            sortedList.push(rightList.shift());
        }
    }
    // add the remaining elements, if any
    if (leftList.length) {
        sortedList = sortedList.concat(leftList);
    }
    if (rightList.length) {
        sortedList = sortedList.concat(rightList);
    }
    return sortedList;
}
function mergeSort(unsortedList) {
    const list = [...unsortedList];
    // base case
    if (list.length <= 1) {
        return list;
    }
    const middle = Math.floor(list.length / 2);
    const leftList = list.slice(0, middle);
    const rightList = list.slice(middle, list.length);
    const leftSortedList = mergeSort(leftList); // left sublist
    const rightSortedList = mergeSort(rightList); // right sublist
    return mergeSortedList(leftSortedList, rightSortedList);
}
  
console.log(mergeSort([29, 72, 98, 13, 87, 66, 52, 51, 36]));