// push the elemnt in array
// run i = 0 and change case and push new element in array
// increment i = 1 and change case at i=1 for all pushed elemnts in array
// repeat till i is out of length of string
/**
 * Time complexity: O(N * 2^N)
 * Space: O(2^N)
 */
function findCasePermutations(str) {
    const permutations = []
  permutations.push(str)
    for (let i = 0; i < str.length; i++) {
        if (isNaN(parseInt(str[i], 10))) {
            let n = permutations.length;
            for (let j = 0; j < n; j++) {
                let permutation = permutations[j].split('');
                if (permutation[i].toLowerCase() === permutation[i]) {
                    permutation[i] = permutation[i].toUpperCase();
                } else {
                    permutation[i] = permutation[i].toLowerCase();
                }
                permutations.push(permutation.join(''));
            }
        }
    }
    return permutations;
}

console.log(`Case permutations are ${findCasePermutations("ad52")}`)
console.log(`Case permutations are ${findCasePermutations("ab7c")}`)