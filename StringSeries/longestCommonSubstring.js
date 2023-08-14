function FindSubstring(str1, str2) {

    const n1 = str1.length;
    const n2 = str2.length;

    let maxLen = 0;

    let x = 0;
    let y = 0;

    let dp = Array(n1 + 1).fill(0).map(() => Array(n2 + 1).fill(0));

    for (let i = 1; i <= n1; i++) {
        for (let j = 1; j <= n2; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = 1 + dp[i - 1][j - 1];
                if (dp[i][j] > maxLen) { // dont use else here as we want continuous sequence
                    maxLen = dp[i][j];
                    x = i;
                    y = j;
                }
            }
        }
    }

    let outputStr = "";

    while (dp[x][y] !== 0) {
        outputStr = str1[x - 1] + outputStr;
        x--;
        y--;
    }

    return [maxLen, outputStr]
}
console.log('Length of Longest Common Substring is', FindSubstring('absdchj', 'aisdklj'));
console.log('Length of Longest Common Substring is', FindSubstring('headphone', 'phone'));
