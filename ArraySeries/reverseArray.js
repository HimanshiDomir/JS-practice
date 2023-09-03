function reverseArray(array) {
    left = 0;
    right = array.length-1;
while (left < right){
    // let temp = array[left];
    // array[left] = array[right];
    // array[right] = temp;
    // without using temp, use destructuring
    [array[right],array[left]] =  [array[left],array[right]];
    left++;
    right--;
}
return array;
    
}

console.log(reverseArray([6,5,8,1,3,0]));