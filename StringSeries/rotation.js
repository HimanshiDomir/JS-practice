// Define two string 1 and string 2.
// To check whether string 2 is rotation of string 1 then, first check the length of both the strings. 
// If they are not equal, then string 2 cannot be a rotation of string 1.
// Concatenate string 1 with itself and assign it to string 1.
// Check the index of string 2 in string 1. If it exists then, string 2 is a rotation of string 1.
// Time Complexity: O(N), where N is the length of the string.
// Auxiliary Space: O(N)

function areRotations( str1,  str2)
    {
        // There lengths must be same and str2 must be
        // a substring of str1 concatenated with str1. 
        return (str1.length == str2.length) &&
              // ((str1 + str1).includes(str2));
               ((str1 + str1).indexOf(str2) !== -1);
    }
     
    // Driver method
 
        var str1 = "AACD";
        var str2 = "ACDA";
 
        if (areRotations(str1, str2))
            console.log("Strings are rotations of each other");
        else
            console.log("Strings are not rotations of each other");