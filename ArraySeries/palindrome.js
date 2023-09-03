
function isPalindrome(arr) {
    let str = arr.join('');
    console.log(str)
    var rev="";
    for(var i=str.length-1; i>=0; i--){
        rev+= str[i];
    }
    if(rev==str){
        return true
    } else{
        return false;
    }
}
  
var arr1 = [1,2,3,4];
var arr2 = [4,3,5,2,1];
var arr3 = [4,3,5,3,4];
  
console.log(isPalindrome(arr1));
console.log(isPalindrome(arr2));
console.log(isPalindrome(arr3));