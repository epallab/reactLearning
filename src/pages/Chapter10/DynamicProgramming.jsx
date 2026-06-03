import React from 'react';
import Subsection from '../../components/Content/Subsection';
import CodeBlock from '../../components/UI/CodeBlock';
import InfoBox from '../../components/UI/InfoBox';
import Badge from '../../components/UI/Badge';

const DynamicProgramming = () => {
  return (
    <Subsection id="dsa-dp" title="10.9 — Dynamic Programming" icon="🧠">
      <p>Dynamic Programming (DP) is about breaking problems into subproblems and saving overlapping subproblem results (memoization/tabulation).</p>

      <h3>Climbing Stairs</h3>
      <p>You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. How many distinct ways can you climb?</p>
      <InfoBox type="warning">
        <h4>Normal Approach (Recursive)</h4>
        <p>Recurse tree taking 1 and 2 steps. This evaluates overlapping subproblems repeatedly. Time: O(2^n), Space: O(n) call stack.</p>
        <CodeBlock language="javascript">{`function climbStairs(n) {
  if (n <= 2) return n;
  return climbStairs(n - 1) + climbStairs(n - 2);
}`}</CodeBlock>
      </InfoBox>
      <InfoBox type="success">
        <h4>Optimal Approach (Iterative DP / Fibonacci)</h4>
        <p>Use two variables to track previous step combinations instead of an array. Time: O(n), Space: O(1).</p>
        <CodeBlock language="javascript">{`function climbStairs(n) {
  if (n <= 2) return n;
  let prev2 = 1, prev1 = 2;
  
  for (let i = 3; i <= n; i++) {
    let curr = prev1 + prev2;
    prev2 = prev1;
    prev1 = curr;
  }
  return prev1;
}`}</CodeBlock>
      </InfoBox>

      <h3>House Robber <Badge variant="purple">Frontend Priority</Badge></h3>
      <p>Given an array of integers representing house money, determine the max money you can rob without robbing adjacent houses.</p>
      <InfoBox type="warning">
        <h4>Normal Approach (Recursive with Memoization)</h4>
        <p>Top-down DP. Choice is either to rob current house + jump two, or skip current. Time: O(n), Space: O(n).</p>
        <CodeBlock language="javascript">{`function rob(nums) {
  let memo = {};
  function dp(i) {
    if (i >= nums.length) return 0;
    if (i in memo) return memo[i];
    
    let robCurr = nums[i] + dp(i + 2);
    let skipCurr = dp(i + 1);
    
    memo[i] = Math.max(robCurr, skipCurr);
    return memo[i];
  }
  return dp(0);
}`}</CodeBlock>
      </InfoBox>
      <InfoBox type="success">
        <h4>Optimal Approach (Iterative Bottom-Up O(1) Space)</h4>
        <p>Keep track of the max money at the last two steps. Time: O(n), Space: O(1).</p>
        <CodeBlock language="javascript">{`function rob(nums) {
  let rob1 = 0, rob2 = 0;
  
  for (let n of nums) {
    let temp = Math.max(n + rob1, rob2);
    rob1 = rob2;
    rob2 = temp;
  }
  return rob2;
}`}</CodeBlock>
      </InfoBox>

      <h3>Coin Change <Badge variant="purple">Frontend Priority</Badge></h3>
      <p>Given an array of coins and a target amount, return the fewest number of coins that make up that amount.</p>
      <InfoBox type="warning">
        <h4>Normal Approach (DFS with Memoization)</h4>
        <p>Try every coin repeatedly. Top-down DP. Time: O(amount * len(coins)), Space: O(amount) recursion stack.</p>
        <CodeBlock language="javascript">{`function coinChange(coins, amount) {
  let memo = {};
  function dfs(rem) {
    if (rem === 0) return 0;
    if (rem < 0) return -1;
    if (rem in memo) return memo[rem];
    
    let min = Infinity;
    for (let coin of coins) {
      let res = dfs(rem - coin);
      if (res >= 0 && res < min) min = 1 + res;
    }
    
    memo[rem] = min === Infinity ? -1 : min;
    return memo[rem];
  }
  return dfs(amount);
}`}</CodeBlock>
      </InfoBox>
      <InfoBox type="success">
        <h4>Optimal Approach (Bottom-Up Tabulation)</h4>
        <p>Build an array from 0 to amount. For each amount, check each coin. Time: O(amount * len(coins)), Space: O(amount).</p>
        <CodeBlock language="javascript">{`function coinChange(coins, amount) {
  let dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  
  for (let a = 1; a <= amount; a++) {
    for (let c of coins) {
      if (a - c >= 0) {
        dp[a] = Math.min(dp[a], 1 + dp[a - c]);
      }
    }
  }
  
  return dp[amount] === Infinity ? -1 : dp[amount];
}`}</CodeBlock>
      </InfoBox>

      <h3>Longest Increasing Subsequence</h3>
      <p>Given an integer array, return the length of the longest strictly increasing subsequence.</p>
      <InfoBox type="warning">
        <h4>Normal Approach (Dynamic Programming)</h4>
        <p>Compare each element with every element before it. Time: O(n^2), Space: O(n).</p>
        <CodeBlock language="javascript">{`function lengthOfLIS(nums) {
  let dp = new Array(nums.length).fill(1);
  let max = 1;
  
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], 1 + dp[j]);
      }
    }
    max = Math.max(max, dp[i]);
  }
  return max;
}`}</CodeBlock>
      </InfoBox>
      <InfoBox type="success">
        <h4>Optimal Approach (Binary Search)</h4>
        <p>Maintain a list of smallest tails for increasing subsequences. Overwrite with binary search. Time: O(n log n), Space: O(n).</p>
        <CodeBlock language="javascript">{`function lengthOfLIS(nums) {
  let tails = [];
  
  for (let x of nums) {
    let left = 0, right = tails.length;
    while (left < right) {
      let mid = Math.floor((left + right) / 2);
      if (tails[mid] < x) left = mid + 1;
      else right = mid;
    }
    tails[left] = x;
  }
  
  return tails.length;
}`}</CodeBlock>
      </InfoBox>

      <h3>Longest Common Subsequence</h3>
      <p>Given two strings, return the length of their longest common subsequence.</p>
      <InfoBox type="warning">
        <h4>Normal Approach (Recursive with Memoization)</h4>
        <p>Check characters from the end. If match, 1 + move both. Else max of moving one or the other. Time: O(m*n), Space: O(m*n).</p>
        <CodeBlock language="javascript">{`function longestCommonSubsequence(text1, text2) {
  let memo = {};
  function dfs(i, j) {
    if (i === text1.length || j === text2.length) return 0;
    let key = i + ',' + j;
    if (key in memo) return memo[key];
    
    if (text1[i] === text2[j]) {
      memo[key] = 1 + dfs(i + 1, j + 1);
    } else {
      memo[key] = Math.max(dfs(i + 1, j), dfs(i, j + 1));
    }
    return memo[key];
  }
  return dfs(0, 0);
}`}</CodeBlock>
      </InfoBox>
      <InfoBox type="success">
        <h4>Optimal Approach (Bottom-Up 2D Array)</h4>
        <p>Use a 2D matrix. Fill from bottom-right to top-left. Time: O(m*n), Space: O(m*n).</p>
        <CodeBlock language="javascript">{`function longestCommonSubsequence(text1, text2) {
  let m = text1.length, n = text2.length;
  let dp = Array.from({length: m + 1}, () => Array(n + 1).fill(0));
  
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      if (text1[i] === text2[j]) {
        dp[i][j] = 1 + dp[i + 1][j + 1];
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j + 1]);
      }
    }
  }
  return dp[0][0];
}`}</CodeBlock>
      </InfoBox>

    </Subsection>
  );
};

export default DynamicProgramming;
