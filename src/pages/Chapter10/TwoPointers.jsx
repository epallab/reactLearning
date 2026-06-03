import React from 'react';
import Subsection from '../../components/Content/Subsection';
import CodeBlock from '../../components/UI/CodeBlock';
import InfoBox from '../../components/UI/InfoBox';
import Badge from '../../components/UI/Badge';

const TwoPointers = () => {
  return (
    <Subsection id="dsa-two-pointers" title="10.2 — Two Pointers" icon="👉">
      {/* Valid Palindrome */}
      <h3>Valid Palindrome <Badge variant="purple">Frontend Priority</Badge></h3>
      <p>A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward.</p>
      
      <InfoBox type="warning">
        <h4>Brute Force Approach</h4>
        <p>Time Complexity: O(n) | Space Complexity: O(n)</p>
        <CodeBlock language="javascript">
{`function isPalindrome(s) {
  const cleanStr = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  const reversedStr = cleanStr.split('').reverse().join('');
  return cleanStr === reversedStr;
}`}
        </CodeBlock>
      </InfoBox>

      <InfoBox type="success">
        <h4>Optimal Approach</h4>
        <p>Time Complexity: O(n) | Space Complexity: O(1)</p>
        <CodeBlock language="javascript">
{`function isPalindrome(s) {
  let left = 0;
  let right = s.length - 1;
  
  const isAlphaNumeric = (c) => /^[a-zA-Z0-9]*$/.test(c);
  
  while (left < right) {
    if (!isAlphaNumeric(s[left])) {
      left++;
    } else if (!isAlphaNumeric(s[right])) {
      right--;
    } else if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    } else {
      left++;
      right--;
    }
  }
  return true;
}`}
        </CodeBlock>
      </InfoBox>

      {/* Two Sum II */}
      <h3>Two Sum II - Input Array Is Sorted</h3>
      <p>Given a 1-indexed array of integers <code>numbers</code> that is already sorted in non-decreasing order, find two numbers such that they add up to a specific <code>target</code> number. Return the indices (1-indexed).</p>
      
      <InfoBox type="warning">
        <h4>Brute Force Approach</h4>
        <p>Time Complexity: O(n²) | Space Complexity: O(1)</p>
        <CodeBlock language="javascript">
{`function twoSum(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        return [i + 1, j + 1];
      }
    }
  }
  return [];
}`}
        </CodeBlock>
      </InfoBox>

      <InfoBox type="success">
        <h4>Optimal Approach</h4>
        <p>Time Complexity: O(n) | Space Complexity: O(1)</p>
        <CodeBlock language="javascript">
{`function twoSum(numbers, target) {
  let left = 0;
  let right = numbers.length - 1;
  
  while (left < right) {
    const sum = numbers[left] + numbers[right];
    if (sum === target) {
      return [left + 1, right + 1];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return [];
}`}
        </CodeBlock>
      </InfoBox>

      {/* 3Sum */}
      <h3>3Sum <Badge variant="purple">Frontend Priority</Badge></h3>
      <p>Given an integer array nums, return all the triplets <code>[nums[i], nums[j], nums[k]]</code> such that <code>i != j</code>, <code>i != k</code>, and <code>j != k</code>, and <code>nums[i] + nums[j] + nums[k] == 0</code>. The solution set must not contain duplicate triplets.</p>
      
      <InfoBox type="warning">
        <h4>Brute Force Approach</h4>
        <p>Time Complexity: O(n³) | Space Complexity: O(n) (for storing sets)</p>
        <CodeBlock language="javascript">
{`function threeSum(nums) {
  const result = [];
  const set = new Set();
  
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          const triplet = [nums[i], nums[j], nums[k]].sort((a, b) => a - b);
          const key = triplet.join(',');
          if (!set.has(key)) {
            set.add(key);
            result.push(triplet);
          }
        }
      }
    }
  }
  return result;
}`}
        </CodeBlock>
      </InfoBox>

      <InfoBox type="success">
        <h4>Optimal Approach</h4>
        <p>Time Complexity: O(n²) | Space Complexity: O(1) or O(n) (depending on sorting algorithm)</p>
        <CodeBlock language="javascript">
{`function threeSum(nums) {
  const res = [];
  nums.sort((a, b) => a - b);
  
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    
    let left = i + 1;
    let right = nums.length - 1;
    
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum > 0) {
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        res.push([nums[i], nums[left], nums[right]]);
        left++;
        while (nums[left] === nums[left - 1] && left < right) left++;
      }
    }
  }
  return res;
}`}
        </CodeBlock>
      </InfoBox>

      {/* Container With Most Water */}
      <h3>Container With Most Water</h3>
      <p>Given an integer array <code>height</code> of length <code>n</code>, find two lines that together with the x-axis form a container, such that the container contains the most water. Return the maximum amount of water a container can store.</p>
      
      <InfoBox type="warning">
        <h4>Brute Force Approach</h4>
        <p>Time Complexity: O(n²) | Space Complexity: O(1)</p>
        <CodeBlock language="javascript">
{`function maxArea(height) {
  let maxArea = 0;
  for (let i = 0; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      const area = Math.min(height[i], height[j]) * (j - i);
      maxArea = Math.max(maxArea, area);
    }
  }
  return maxArea;
}`}
        </CodeBlock>
      </InfoBox>

      <InfoBox type="success">
        <h4>Optimal Approach</h4>
        <p>Time Complexity: O(n) | Space Complexity: O(1)</p>
        <CodeBlock language="javascript">
{`function maxArea(height) {
  let maxArea = 0;
  let left = 0;
  let right = height.length - 1;
  
  while (left < right) {
    const area = Math.min(height[left], height[right]) * (right - left);
    maxArea = Math.max(maxArea, area);
    
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxArea;
}`}
        </CodeBlock>
      </InfoBox>

      {/* Trapping Rain Water */}
      <h3>Trapping Rain Water</h3>
      <p>Given <code>n</code> non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.</p>
      
      <InfoBox type="warning">
        <h4>Brute Force Approach</h4>
        <p>Time Complexity: O(n²) | Space Complexity: O(1)</p>
        <CodeBlock language="javascript">
{`function trap(height) {
  let res = 0;
  for (let i = 0; i < height.length; i++) {
    let leftMax = height[i];
    for (let j = 0; j < i; j++) {
      leftMax = Math.max(leftMax, height[j]);
    }
    
    let rightMax = height[i];
    for (let j = i + 1; j < height.length; j++) {
      rightMax = Math.max(rightMax, height[j]);
    }
    
    res += Math.min(leftMax, rightMax) - height[i];
  }
  return res;
}`}
        </CodeBlock>
      </InfoBox>

      <InfoBox type="success">
        <h4>Optimal Approach</h4>
        <p>Time Complexity: O(n) | Space Complexity: O(1)</p>
        <CodeBlock language="javascript">
{`function trap(height) {
  if (height.length === 0) return 0;
  
  let left = 0;
  let right = height.length - 1;
  let leftMax = height[left];
  let rightMax = height[right];
  let res = 0;
  
  while (left < right) {
    if (leftMax < rightMax) {
      left++;
      leftMax = Math.max(leftMax, height[left]);
      res += leftMax - height[left];
    } else {
      right--;
      rightMax = Math.max(rightMax, height[right]);
      res += rightMax - height[right];
    }
  }
  return res;
}`}
        </CodeBlock>
      </InfoBox>
    </Subsection>
  );
};

export default TwoPointers;
