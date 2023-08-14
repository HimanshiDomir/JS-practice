let calculateLPS = function(str) {
    const n = str.length
    let dp = Array(n).fill(0).map(() => Array(n).fill(0));
  
    for (let i=0; i<n; i++) dp[i][i] = 1 // diagnol elements
   
    for (let gap=2; gap<=n; gap++) {
        for (let i=0; i<n-gap+1; i++) {
          j = i+gap-1
        if (str[i] == str[j]) {
            dp[i][j] = 2 + dp[i+1][j-1]  // if elements are equal
        }
        else {
            dp[i][j] = Math.max(dp[i+1][j], dp[i][j-1]) // if not equal
        }
      }
    }
    return dp[0][n-1]
  };
  console.log('Length of LPS is ' + calculateLPS('abacaba'));
  console.log('Length of LPS is ' + calculateLPS('abdbca'));
  
  /**
   * Time Complexity: O(n^2)
  */
