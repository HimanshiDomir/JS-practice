// Maximum Substring With Max K Distinct Characters 
// Given a string you need to print longest possible substring that has exactly K unique characters.

// take 2 pointer l and r
// increment r and push that char in map
// if map has more than k disticnt charcter then 
// remove the char at l from map and increment l

/**
 * Time Complexity: O(N + N) = O(N)
 * Space: O(N)
 */
function kDistinct(str, k) {
    let left = 0
    let maxLen = 0
    let maxStr = '';
    let hm = {}
    for (let right = 0; right < str.length; right++) {
        const rightChar = str[right]
        if (!(rightChar in hm)) {
            hm[rightChar] = 0
        }
        hm[rightChar] += 1
        while (Object.keys(hm).length > k) {
            const leftChar = str[left]
            hm[leftChar] -= 1
            if (hm[leftChar] === 0) {
                delete hm[leftChar]
            }
            left += 1
        }
        if (maxLen < right - left + 1) {
            maxStr = str.slice(left, right + 1);
            maxLen = right - left + 1;
        }
        //  maxLen = Math.max(maxLen, right - left + 1) // only returns length
    }
    console.log({maxLen,maxStr});
    return {maxLen,maxStr}
}
console.log(`Length of the longest substring is ${kDistinct('mkmmap', 2)}`);
console.log(`Length of the longest substring is ${kDistinct('mkmmap', 1)}`);
console.log(`Length of the longest substring is ${kDistinct('kaataz', 3)}`);