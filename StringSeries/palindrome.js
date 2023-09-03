
function isPalindrome(str) {
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
  
var str1 = "racecar";
var str2 = "nitin";
var str3 = "Rama";
  
console.log(isPalindrome(str1));
console.log(isPalindrome(str2));
console.log(isPalindrome(str3));