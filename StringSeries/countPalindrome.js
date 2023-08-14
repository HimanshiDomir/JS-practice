function countPallindromes(sentence, left, right) {
    let count = 0
    while(left >= 0 && right < sentence.length && sentence[left] == sentence[right]) {
        count++
        left--
        right++
    }
    return count
}
function findPallindromes(sentence) {
    let count = 0
    for (let i=0; i<sentence.length; i++) {
        count += countPallindromes(sentence, i, i) // odd palindromes
        count += countPallindromes(sentence, i, i+1) // even palindromes
    }
    return count
}

let palindrome = "aabbba";
console.log("Count of pallindromes ", findPallindromes(palindrome));
/**
 * Time Complexity: O(n^2)
 * Space: O(1)
 */