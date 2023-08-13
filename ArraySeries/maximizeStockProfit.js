/**
 * @param {number[][]} intervals
 * @return {number[][]}
 * Declare a buy variable to store the buy cost and max_profit to store the maximum profit.
 * Initialize the buy variable to the first element of the prices array.
 * Iterate over the prices array and check if the current price is minimum or not.
 * If the current price is minimum then buy on this ith day.
 * If the current price is greater than the previous buy then make profit from it and maximize the max_profit.
 * Finally, return the max_profit.
 * TC: O(N) for array loop + sort O(NlogN)
 * SC O(N)
 * Greedy Algorithm
 */
 function maxProfit( prices, n)
 {
     let buy = prices[0], max_profit = 0;
     for (let i = 1; i < n; i++) {
  
         // Checking for lower buy value
         if (buy > prices[i]) {
          buy = prices[i];
         }
             
  
         // Checking for higher profit
         else if (prices[i] - buy > max_profit)
             max_profit = prices[i] - buy;
     }
     return max_profit;
 }
  
 // Driver Code
  
     let prices= [ 7, 1, 5, 6, 4 ];
     let n =5;
     let max_profit = maxProfit(prices, n);
     console.log(max_profit);