var sortmergeTwoArraysInOne = (nums1, m, nums2, n) => {
    let i = m - 1; // start from last element and keep comparing
    let j = n - 1;
    let k = m + n - 1;
    while (j >= 0) {
        if (i >= 0 && nums1[i] > nums2[j]) {
            nums1[k--] = nums1[i--];
        } else {
            nums1[k--] = nums2[j--];
        }

    }
    return nums1;
}
console.log(sortmergeTwoArraysInOne([1, 2, 3], 3, [0, 3, 5, 6, 10], 5));



// second way
// merge two sorted arrays :
function mergeTwo(arr1, arr2) {
    let merged = [];
    let index1 = 0;
    let index2 = 0;
    let current = 0;
  
    while (current < (arr1.length + arr2.length)) {
  
      let isArr1Depleted = index1 >= arr1.length;
      let isArr2Depleted = index2 >= arr2.length;
  
      if (!isArr1Depleted && (isArr2Depleted || (arr1[index1] < arr2[index2]))) {
        merged[current] = arr1[index1];
        index1++;
      } else {
        merged[current] = arr2[index2];
        index2++;
      }
  
      current++;
    }
  
    return merged;
  }
  
  mergeTwo([1, 2, 3],[0, 3, 5, 6, 10]);