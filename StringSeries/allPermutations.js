//tree will iterate first ABC then A will be fix and further recursion will give ABC and ACB.
//then backtrack tree further and next parent iteration will increment i and swap A with B.
// BAC now B will be fixed and swap and run inner iterations
//https://tutorialhorizon.com/algorithms/print-all-the-permutations-of-a-string/ 
//https://www.geeksforgeeks.org/write-a-c-program-to-print-all-permutations-of-a-given-string/


// Time Complexity: O(N * N!) Note that there are N! permutations 
// and it requires O(N) time to print a permutation.
// SC O(N * N!) height of tree N 
let permutations = [];
function permute(str, l, r) {
    if (l == r){
permutations.push(str);
    }
       // console.log(str,'inside');
    else {
        for (let i = l; i <= r; i++) {
            str = swap(str, l, i);
            console.log(str,'str')
            permute(str, l + 1, r);
           // console.log(str,l,r,'222')
            str = swap(str, l, i);
        }
    }
}

function swap(a, i, j) {
    let charArray = a.split("");
    [charArray[j], charArray[i]] = [charArray[i], charArray[j]];
    //console.log(charArray)
    return (charArray).join("");
}

let str = "ABC";
let n = str.length;
permute(str, 0, n - 1);
console.log(permutations);