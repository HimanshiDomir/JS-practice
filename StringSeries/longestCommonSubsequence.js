function getLCSLength(str1, str2) {
  const n1 = str1.length
  const n2 = str2.length
  const dp = Array(n1+1).fill(0).map(() => Array(n2+1).fill(0))
  console.log(dp,'dp');
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

console.log(`Length of Longest Common Subsequence is ${getLCSLength('absdchj', 'aisdkl')}`);
console.log(`Length of Longest Common Subsequence is ${getLCSLength('hometown', 'omtwn')}`);
