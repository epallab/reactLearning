import React from 'react';
import Subsection from '../../components/Content/Subsection';
import CodeBlock from '../../components/UI/CodeBlock';
import InfoBox from '../../components/UI/InfoBox';
import Badge from '../../components/UI/Badge';

const SlidingWindow = () => {
  return (
    <Subsection id="dsa-sliding-window" title="10.3 — Sliding Window" icon="🪟">
      {/* Best Time to Buy and Sell Stock */}
      <h3>Best Time to Buy and Sell Stock</h3>
      <p>You are given an array <code>prices</code> where <code>prices[i]</code> is the price of a given stock on the ith day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.</p>
      
      <InfoBox type="warning">
        <h4>Brute Force Approach</h4>
        <p>Time Complexity: O(n²) | Space Complexity: O(1)</p>
        <CodeBlock language="javascript">
{`function maxProfit(prices) {
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      const profit = prices[j] - prices[i];
      maxProfit = Math.max(maxProfit, profit);
    }
  }
  return maxProfit;
}`}
        </CodeBlock>
      </InfoBox>

      <InfoBox type="success">
        <h4>Optimal Approach</h4>
        <p>Time Complexity: O(n) | Space Complexity: O(1)</p>
        <CodeBlock language="javascript">
{`function maxProfit(prices) {
  let left = 0; // buy
  let right = 1; // sell
  let maxProfit = 0;
  
  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      const profit = prices[right] - prices[left];
      maxProfit = Math.max(maxProfit, profit);
    } else {
      left = right;
    }
    right++;
  }
  return maxProfit;
}`}
        </CodeBlock>
      </InfoBox>

      {/* Longest Substring Without Repeating Characters */}
      <h3>Longest Substring Without Repeating Characters <Badge variant="purple">Frontend Priority</Badge></h3>
      <p>Given a string <code>s</code>, find the length of the longest substring without repeating characters.</p>
      
      <InfoBox type="warning">
        <h4>Brute Force Approach</h4>
        <p>Time Complexity: O(n³) | Space Complexity: O(n)</p>
        <CodeBlock language="javascript">
{`function lengthOfLongestSubstring(s) {
  const isUnique = (str) => {
    const set = new Set();
    for (let char of str) {
      if (set.has(char)) return false;
      set.add(char);
    }
    return true;
  };
  
  let maxLength = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      if (isUnique(s.slice(i, j + 1))) {
        maxLength = Math.max(maxLength, j - i + 1);
      }
    }
  }
  return maxLength;
}`}
        </CodeBlock>
      </InfoBox>

      <InfoBox type="success">
        <h4>Optimal Approach</h4>
        <p>Time Complexity: O(n) | Space Complexity: O(n)</p>
        <CodeBlock language="javascript">
{`function lengthOfLongestSubstring(s) {
  const set = new Set();
  let left = 0;
  let maxLength = 0;
  
  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
}`}
        </CodeBlock>
      </InfoBox>

      {/* Longest Repeating Character Replacement */}
      <h3>Longest Repeating Character Replacement</h3>
      <p>You are given a string <code>s</code> and an integer <code>k</code>. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most <code>k</code> times. Return the length of the longest substring containing the same letter you can get after performing the above operations.</p>
      
      <InfoBox type="warning">
        <h4>Brute Force Approach</h4>
        <p>Time Complexity: O(n²) | Space Complexity: O(1)</p>
        <CodeBlock language="javascript">
{`function characterReplacement(s, k) {
  let maxLength = 0;
  
  for (let i = 0; i < s.length; i++) {
    const counts = {};
    let maxFreq = 0;
    for (let j = i; j < s.length; j++) {
      counts[s[j]] = (counts[s[j]] || 0) + 1;
      maxFreq = Math.max(maxFreq, counts[s[j]]);
      
      // cells replaced = (length of substring) - (most frequent char)
      if ((j - i + 1) - maxFreq <= k) {
        maxLength = Math.max(maxLength, j - i + 1);
      }
    }
  }
  return maxLength;
}`}
        </CodeBlock>
      </InfoBox>

      <InfoBox type="success">
        <h4>Optimal Approach</h4>
        <p>Time Complexity: O(n) | Space Complexity: O(1) (26 characters)</p>
        <CodeBlock language="javascript">
{`function characterReplacement(s, k) {
  const count = {};
  let res = 0;
  let left = 0;
  let maxf = 0;
  
  for (let right = 0; right < s.length; right++) {
    count[s[right]] = (count[s[right]] || 0) + 1;
    maxf = Math.max(maxf, count[s[right]]);
    
    while ((right - left + 1) - maxf > k) {
      count[s[left]]--;
      left++;
    }
    res = Math.max(res, right - left + 1);
  }
  return res;
}`}
        </CodeBlock>
      </InfoBox>

      {/* Permutation in String */}
      <h3>Permutation in String</h3>
      <p>Given two strings <code>s1</code> and <code>s2</code>, return <code>true</code> if <code>s2</code> contains a permutation of <code>s1</code>, or <code>false</code> otherwise.</p>
      
      <InfoBox type="warning">
        <h4>Brute Force Approach</h4>
        <p>Time Complexity: O(n * (m log m)) where m is s1 length, n is s2 length | Space Complexity: O(m)</p>
        <CodeBlock language="javascript">
{`function checkInclusion(s1, s2) {
  const sortStr = (str) => str.split('').sort().join('');
  const s1Sorted = sortStr(s1);
  
  for (let i = 0; i <= s2.length - s1.length; i++) {
    if (sortStr(s2.slice(i, i + s1.length)) === s1Sorted) {
      return true;
    }
  }
  return false;
}`}
        </CodeBlock>
      </InfoBox>

      <InfoBox type="success">
        <h4>Optimal Approach</h4>
        <p>Time Complexity: O(n) | Space Complexity: O(1) (26 characters)</p>
        <CodeBlock language="javascript">
{`function checkInclusion(s1, s2) {
  if (s1.length > s2.length) return false;
  
  const s1Count = new Array(26).fill(0);
  const s2Count = new Array(26).fill(0);
  
  for (let i = 0; i < s1.length; i++) {
    s1Count[s1.charCodeAt(i) - 97]++;
    s2Count[s2.charCodeAt(i) - 97]++;
  }
  
  let matches = 0;
  for (let i = 0; i < 26; i++) {
    if (s1Count[i] === s2Count[i]) matches++;
  }
  
  let left = 0;
  for (let right = s1.length; right < s2.length; right++) {
    if (matches === 26) return true;
    
    let index = s2.charCodeAt(right) - 97;
    s2Count[index]++;
    if (s1Count[index] === s2Count[index]) {
      matches++;
    } else if (s1Count[index] + 1 === s2Count[index]) {
      matches--;
    }
    
    index = s2.charCodeAt(left) - 97;
    s2Count[index]--;
    if (s1Count[index] === s2Count[index]) {
      matches++;
    } else if (s1Count[index] - 1 === s2Count[index]) {
      matches--;
    }
    left++;
  }
  return matches === 26;
}`}
        </CodeBlock>
      </InfoBox>

      {/* Minimum Window Substring */}
      <h3>Minimum Window Substring</h3>
      <p>Given two strings <code>s</code> and <code>t</code> of lengths <code>m</code> and <code>n</code> respectively, return the minimum window substring of <code>s</code> such that every character in <code>t</code> (including duplicates) is included in the window. If there is no such substring, return the empty string <code>""</code>.</p>
      
      <InfoBox type="warning">
        <h4>Brute Force Approach</h4>
        <p>Time Complexity: O(n²) | Space Complexity: O(t)</p>
        <CodeBlock language="javascript">
{`function minWindow(s, t) {
  const getCount = (str) => {
    const map = {};
    for (let char of str) map[char] = (map[char] || 0) + 1;
    return map;
  };
  
  const tCount = getCount(t);
  let minLen = Infinity;
  let minStr = "";
  
  for (let i = 0; i < s.length; i++) {
    for (let j = i + t.length - 1; j < s.length; j++) {
      const sub = s.slice(i, j + 1);
      const subCount = getCount(sub);
      
      let valid = true;
      for (let char in tCount) {
        if (!subCount[char] || subCount[char] < tCount[char]) {
          valid = false;
          break;
        }
      }
      
      if (valid && sub.length < minLen) {
        minLen = sub.length;
        minStr = sub;
      }
    }
  }
  return minStr;
}`}
        </CodeBlock>
      </InfoBox>

      <InfoBox type="success">
        <h4>Optimal Approach</h4>
        <p>Time Complexity: O(m + n) | Space Complexity: O(m + n)</p>
        <CodeBlock language="javascript">
{`function minWindow(s, t) {
  if (t === "") return "";
  
  const countT = {};
  const window = {};
  for (let c of t) {
    countT[c] = (countT[c] || 0) + 1;
  }
  
  let have = 0;
  let need = Object.keys(countT).length;
  let res = [-1, -1];
  let resLen = Infinity;
  let left = 0;
  
  for (let right = 0; right < s.length; right++) {
    let c = s[right];
    window[c] = (window[c] || 0) + 1;
    
    if (countT[c] && window[c] === countT[c]) {
      have++;
    }
    
    while (have === need) {
      if ((right - left + 1) < resLen) {
        res = [left, right];
        resLen = right - left + 1;
      }
      
      window[s[left]]--;
      if (countT[s[left]] && window[s[left]] < countT[s[left]]) {
        have--;
      }
      left++;
    }
  }
  return resLen !== Infinity ? s.slice(res[0], res[1] + 1) : "";
}`}
        </CodeBlock>
      </InfoBox>
    </Subsection>
  );
};

export default SlidingWindow;
