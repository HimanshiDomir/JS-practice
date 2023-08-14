// You will be given 2 strings s1 and s2, you need to find the count of minimum insertions
// and deletion operations
// that is needed to transform s1 into s2 (vice versa)
function getLCSLength(str1, str2) {
  const n1 = str1.length
  const n2 = str2.length
  const dp = Array(n1+1).fill(0).map(() => Array(n2+1).fill(0))
  for (let i=1; i<=n1; i++) {
  	for (let j=1; j<=n2; j++) {
    	if (str1[i-1] === str2[j-1]) {
      	dp[i][j] = 1 + dp[i-1][j-1]
      } else {
      	dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1])
      }
    }
  }
  return dp[n1][n2]
}

function transform(str1, str2) {
	const n1 = str1.length
  const n2 = str2.length
  const lcs = getLCSLength(str1, str2)
  console.log(`Minimum deletions needed is ${n1 - lcs}`);
  console.log(`Minimum insertions needed is ${n2 - lcs}`);
}

transform('absdchj', 'aisdklj')
transform('hometown', 'omkwn')
  /**
   * Time Complexity: O(N1 * N2)
   * Space: O(N1 * N2)
   */