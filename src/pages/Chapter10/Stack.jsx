import React from 'react';
import Subsection from '../../components/Content/Subsection';
import CodeBlock from '../../components/UI/CodeBlock';
import InfoBox from '../../components/UI/InfoBox';
import Badge from '../../components/UI/Badge';

const Stack = () => {
  return (
    <Subsection id="dsa-stack" title="10.4 — Stack" icon="📚">
      <h3>Valid Parentheses <Badge variant="purple">Frontend Priority</Badge></h3>
      <p>Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.</p>
      
      <InfoBox type="warning">
        <h4>Normal Approach (String Replace)</h4>
        <p>Repeatedly replace valid pairs "()", "{}", "[]" until no more pairs can be found. Time: O(n^2), Space: O(n)</p>
        <CodeBlock language="javascript">
{`function isValid(s) {
  while (s.includes('()') || s.includes('{}') || s.includes('[]')) {
    s = s.replace('()', '').replace('{}', '').replace('[]', '');
  }
  return s === '';
}`}
        </CodeBlock>
      </InfoBox>

      <InfoBox type="success">
        <h4>Optimal Approach (Stack)</h4>
        <p>Use a stack to keep track of opening brackets. When a closing bracket is encountered, check if it matches the top of the stack. Time: O(n), Space: O(n)</p>
        <CodeBlock language="javascript">
{`function isValid(s) {
  const stack = [];
  const map = {
    ')': '(',
    '}': '{',
    ']': '['
  };
  
  for (const char of s) {
    if (char === '(' || char === '{' || char === '[') {
      stack.push(char);
    } else {
      if (stack.pop() !== map[char]) {
        return false;
      }
    }
  }
  
  return stack.length === 0;
}`}
        </CodeBlock>
      </InfoBox>

      <h3>Min Stack</h3>
      <p>Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.</p>
      
      <InfoBox type="warning">
        <h4>Normal Approach (Search for Min)</h4>
        <p>Keep a standard stack. When getMin() is called, iterate through the stack to find the minimum. Time: O(1) push/pop, O(n) getMin. Space: O(n)</p>
        <CodeBlock language="javascript">
{`class MinStack {
  constructor() {
    this.stack = [];
  }
  push(val) {
    this.stack.push(val);
  }
  pop() {
    this.stack.pop();
  }
  top() {
    return this.stack[this.stack.length - 1];
  }
  getMin() {
    return Math.min(...this.stack);
  }
}`}
        </CodeBlock>
      </InfoBox>

      <InfoBox type="success">
        <h4>Optimal Approach (Two Stacks / Tuple)</h4>
        <p>Store pairs of [value, current_min] in the stack to retrieve the minimum in O(1) time. Time: O(1) all ops, Space: O(n)</p>
        <CodeBlock language="javascript">
{`class MinStack {
  constructor() {
    this.stack = [];
  }
  push(val) {
    if (this.stack.length === 0) {
      this.stack.push([val, val]);
    } else {
      const currentMin = this.stack[this.stack.length - 1][1];
      this.stack.push([val, Math.min(val, currentMin)]);
    }
  }
  pop() {
    this.stack.pop();
  }
  top() {
    return this.stack[this.stack.length - 1][0];
  }
  getMin() {
    return this.stack[this.stack.length - 1][1];
  }
}`}
        </CodeBlock>
      </InfoBox>

      <h3>Daily Temperatures <Badge variant="purple">Frontend Priority</Badge></h3>
      <p>Given an array of temperatures, return an array such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature.</p>
      
      <InfoBox type="warning">
        <h4>Normal Approach (Brute Force)</h4>
        <p>For each day, iterate forward to find the next warmer day. Time: O(n^2), Space: O(1) extra space.</p>
        <CodeBlock language="javascript">
{`function dailyTemperatures(temperatures) {
  const res = new Array(temperatures.length).fill(0);
  for (let i = 0; i < temperatures.length; i++) {
    for (let j = i + 1; j < temperatures.length; j++) {
      if (temperatures[j] > temperatures[i]) {
        res[i] = j - i;
        break;
      }
    }
  }
  return res;
}`}
        </CodeBlock>
      </InfoBox>

      <InfoBox type="success">
        <h4>Optimal Approach (Monotonic Stack)</h4>
        <p>Use a stack to keep track of indices. If we see a warmer temperature, we pop indices from the stack and calculate the difference. Time: O(n), Space: O(n)</p>
        <CodeBlock language="javascript">
{`function dailyTemperatures(temperatures) {
  const res = new Array(temperatures.length).fill(0);
  const stack = []; // stores indices
  
  for (let i = 0; i < temperatures.length; i++) {
    while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
      const idx = stack.pop();
      res[idx] = i - idx;
    }
    stack.push(i);
  }
  return res;
}`}
        </CodeBlock>
      </InfoBox>

      <h3>Next Greater Element</h3>
      <p>Given two arrays, find the next greater element for each element of the first array in the second array.</p>
      
      <InfoBox type="warning">
        <h4>Normal Approach (Brute Force)</h4>
        <p>For each element in nums1, find its position in nums2, then scan right to find the next greater. Time: O(n * m), Space: O(1) extra space.</p>
        <CodeBlock language="javascript">
{`function nextGreaterElement(nums1, nums2) {
  return nums1.map(num => {
    let idx = nums2.indexOf(num);
    for (let i = idx + 1; i < nums2.length; i++) {
      if (nums2[i] > num) return nums2[i];
    }
    return -1;
  });
}`}
        </CodeBlock>
      </InfoBox>

      <InfoBox type="success">
        <h4>Optimal Approach (Monotonic Stack + Hash Map)</h4>
        <p>Use a monotonic stack to find the next greater elements for all of nums2, store results in a map, and quickly lookup for nums1. Time: O(n + m), Space: O(m)</p>
        <CodeBlock language="javascript">
{`function nextGreaterElement(nums1, nums2) {
  const map = new Map();
  const stack = [];
  
  for (let num of nums2) {
    while (stack.length > 0 && num > stack[stack.length - 1]) {
      map.set(stack.pop(), num);
    }
    stack.push(num);
  }
  
  return nums1.map(num => map.has(num) ? map.get(num) : -1);
}`}
        </CodeBlock>
      </InfoBox>

      <h3>Largest Rectangle in Histogram</h3>
      <p>Given an array of integers representing the histogram's bar height, return the area of the largest rectangle.</p>
      
      <InfoBox type="warning">
        <h4>Normal Approach (Brute Force)</h4>
        <p>For each pair of bars, find the minimum height between them and calculate area. Time: O(n^2), Space: O(1)</p>
        <CodeBlock language="javascript">
{`function largestRectangleArea(heights) {
  let maxArea = 0;
  for (let i = 0; i < heights.length; i++) {
    let minHeight = heights[i];
    for (let j = i; j < heights.length; j++) {
      minHeight = Math.min(minHeight, heights[j]);
      maxArea = Math.max(maxArea, minHeight * (j - i + 1));
    }
  }
  return maxArea;
}`}
        </CodeBlock>
      </InfoBox>

      <InfoBox type="success">
        <h4>Optimal Approach (Monotonic Stack)</h4>
        <p>Use a stack to track indices of increasing bar heights. When a shorter bar is found, calculate areas for bars in the stack. Time: O(n), Space: O(n)</p>
        <CodeBlock language="javascript">
{`function largestRectangleArea(heights) {
  let maxArea = 0;
  const stack = []; // stores indices
  
  for (let i = 0; i <= heights.length; i++) {
    const currHeight = i === heights.length ? 0 : heights[i];
    
    while (stack.length > 0 && currHeight < heights[stack[stack.length - 1]]) {
      const h = heights[stack.pop()];
      const w = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
      maxArea = Math.max(maxArea, h * w);
    }
    stack.push(i);
  }
  
  return maxArea;
}`}
        </CodeBlock>
      </InfoBox>
    </Subsection>
  );
};

export default Stack;
