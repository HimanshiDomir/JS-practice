// Time complexity: O(N2), where N is the length of the input string.
// Auxiliary Space: O(N), where N is the length of the input string.

function substring(str) {
    for (var i = 0; i < str.length; i++) {
        var substr = ''
        for (var j = i; j < str.length; j++) {
            substr += str.charAt(j);
            console.log(substr);
        }
    }
}
substring('abcd');


// Time complexity: O( n^3 )
// Auxiliary Space: O(1)
// Function to print all substring
function SubString( str , n)
{
   for (var i = 0; i < n; i++)
       for (var j = i+1; j <= n; j++)
        
            // Please refer below article for details
            // of substr in Java
            // https://www.geeksforgeeks.org/java-lang-string-substring-java/
            console.log(str.substring(i, j));
}
    var str = "abcd";
    SubString(str, str.length);

