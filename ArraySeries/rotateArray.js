
//TC: O(n)
// to handle cases where rotations is greater tha array length, we calculate modulo so that we perform 
// necessary no. of rotations
function rotateArray(array, rotations){
rotations %= array.length;
console.log(rotations);
const extractedArray = array.splice(0, rotations);
array.push(...extractedArray);
return array;
}

console.log(rotateArray([1,2,3,4,5], 3));