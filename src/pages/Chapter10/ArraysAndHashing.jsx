import Subsection from '../../components/Content/Subsection';
import CodeBlock from '../../components/UI/CodeBlock';
import InfoBox from '../../components/UI/InfoBox';
import Badge from '../../components/UI/Badge';

const ArraysAndHashing = () => {
  return (
    <Subsection id="dsa-arrays" title="10.1 — Arrays & Hashing" icon="📦">
      {/* Two Sum */}
      <h3>Two Sum <Badge variant="purple">Frontend Priority</Badge></h3>
      <p>Given an array of integers <code>nums</code> and an integer <code>target</code>, return indices of the two numbers such that they add up to <code>target</code>.</p>
      
      <InfoBox type="warning">
        <h4>Brute Force Approach</h4>
        <p>Time Complexity: O(n²) | Space Complexity: O(1)</p>
        <CodeBlock language="javascript">
{`function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}`}
        </CodeBlock>
      </InfoBox>

      <InfoBox type="success">
        <h4>Optimal Approach</h4>
        <p>Time Complexity: O(n) | Space Complexity: O(n)</p>
        <CodeBlock language="javascript">
{`function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (map.has(diff)) {
      return [map.get(diff), i];
    }
    map.set(nums[i], i);
  }
  return [];
}`}
        </CodeBlock>
      </InfoBox>

      {/* Contains Duplicate */}
      <h3>Contains Duplicate</h3>
      <p>Given an integer array <code>nums</code>, return <code>true</code> if any value appears at least twice in the array, and return <code>false</code> if every element is distinct.</p>
      
      <InfoBox type="warning">
        <h4>Brute Force Approach</h4>
        <p>Time Complexity: O(n²) | Space Complexity: O(1)</p>
        <CodeBlock language="javascript">
{`function containsDuplicate(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        return true;
      }
    }
  }
  return false;
}`}
        </CodeBlock>
      </InfoBox>

      <InfoBox type="success">
        <h4>Optimal Approach</h4>
        <p>Time Complexity: O(n) | Space Complexity: O(n)</p>
        <CodeBlock language="javascript">
{`function containsDuplicate(nums) {
  const set = new Set();
  for (const num of nums) {
    if (set.has(num)) return true;
    set.add(num);
  }
  return false;
}`}
        </CodeBlock>
      </InfoBox>

      {/* Group Anagrams */}
      <h3>Group Anagrams <Badge variant="purple">Frontend Priority</Badge></h3>
      <p>Given an array of strings, group the anagrams together. You can return the answer in any order.</p>
      
      <InfoBox type="warning">
        <h4>Brute Force Approach (Sorting)</h4>
        <p>Time Complexity: O(n * k log k) | Space Complexity: O(n * k)</p>
        <CodeBlock language="javascript">
{`function groupAnagrams(strs) {
  const map = {};
  for (let str of strs) {
    const sorted = str.split('').sort().join('');
    if (!map[sorted]) map[sorted] = [];
    map[sorted].push(str);
  }
  return Object.values(map);
}`}
        </CodeBlock>
      </InfoBox>

      <InfoBox type="success">
        <h4>Optimal Approach (Character Frequency)</h4>
        <p>Time Complexity: O(n * k) | Space Complexity: O(n * k)</p>
        <CodeBlock language="javascript">
{`function groupAnagrams(strs) {
  const map = {};
  for (let str of strs) {
    const count = new Array(26).fill(0);
    for (let char of str) {
      count[char.charCodeAt(0) - 97]++;
    }
    const key = count.join(',');
    if (!map[key]) map[key] = [];
    map[key].push(str);
  }
  return Object.values(map);
}`}
        </CodeBlock>
      </InfoBox>

      {/* Product of Array Except Self */}
      <h3>Product of Array Except Self <Badge variant="purple">Frontend Priority</Badge></h3>
      <p>Given an integer array <code>nums</code>, return an array <code>answer</code> such that <code>answer[i]</code> is equal to the product of all the elements of <code>nums</code> except <code>nums[i]</code>. You must write an algorithm that runs in O(n) time and without using the division operation.</p>
      
      <InfoBox type="warning">
        <h4>Brute Force Approach</h4>
        <p>Time Complexity: O(n²) | Space Complexity: O(n)</p>
        <CodeBlock language="javascript">
{`function productExceptSelf(nums) {
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    let product = 1;
    for (let j = 0; j < nums.length; j++) {
      if (i !== j) product *= nums[j];
    }
    res.push(product);
  }
  return res;
}`}
        </CodeBlock>
      </InfoBox>

      <InfoBox type="success">
        <h4>Optimal Approach</h4>
        <p>Time Complexity: O(n) | Space Complexity: O(1) (excluding output array)</p>
        <CodeBlock language="javascript">
{`function productExceptSelf(nums) {
  const res = [];
  let prefix = 1;
  for (let i = 0; i < nums.length; i++) {
    res[i] = prefix;
    prefix *= nums[i];
  }
  let postfix = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    res[i] *= postfix;
    postfix *= nums[i];
  }
  return res;
}`}
        </CodeBlock>
      </InfoBox>

      {/* Top K Frequent Elements */}
      <h3>Top K Frequent Elements</h3>
      <p>Given an integer array <code>nums</code> and an integer <code>k</code>, return the <code>k</code> most frequent elements. You may return the answer in any order.</p>
      
      <InfoBox type="warning">
        <h4>Brute Force Approach (Sorting)</h4>
        <p>Time Complexity: O(n log n) | Space Complexity: O(n)</p>
        <CodeBlock language="javascript">
{`function topKFrequent(nums, k) {
  const map = new Map();
  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  const sorted = [...map.entries()].sort((a, b) => b[1] - a[1]);
  return sorted.slice(0, k).map(entry => entry[0]);
}`}
        </CodeBlock>
      </InfoBox>

      <InfoBox type="success">
        <h4>Optimal Approach (Bucket Sort)</h4>
        <p>Time Complexity: O(n) | Space Complexity: O(n)</p>
        <CodeBlock language="javascript">
{`function topKFrequent(nums, k) {
  const map = new Map();
  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  
  const bucket = Array.from({ length: nums.length + 1 }, () => []);
  for (let [num, freq] of map) {
    bucket[freq].push(num);
  }
  
  const res = [];
  for (let i = bucket.length - 1; i >= 0; i--) {
    if (bucket[i].length > 0) {
      res.push(...bucket[i]);
      if (res.length >= k) {
        return res.slice(0, k);
      }
    }
  }
  return res;
}`}
        </CodeBlock>
      </InfoBox>

      {/* Longest Consecutive Sequence */}
      <h3>Longest Consecutive Sequence</h3>
      <p>Given an unsorted array of integers <code>nums</code>, return the length of the longest consecutive elements sequence. You must write an algorithm that runs in O(n) time.</p>
      
      <InfoBox type="warning">
        <h4>Brute Force Approach (Sorting)</h4>
        <p>Time Complexity: O(n log n) | Space Complexity: O(1) or O(n) depending on sort</p>
        <CodeBlock language="javascript">
{`function longestConsecutive(nums) {
  if (nums.length === 0) return 0;
  nums.sort((a, b) => a - b);
  
  let longest = 1;
  let current = 1;
  
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      if (nums[i] === nums[i - 1] + 1) {
        current++;
      } else {
        longest = Math.max(longest, current);
        current = 1;
      }
    }
  }
  return Math.max(longest, current);
}`}
        </CodeBlock>
      </InfoBox>

      <InfoBox type="success">
        <h4>Optimal Approach</h4>
        <p>Time Complexity: O(n) | Space Complexity: O(n)</p>
        <CodeBlock language="javascript">
{`function longestConsecutive(nums) {
  const set = new Set(nums);
  let longest = 0;
  
  for (let num of set) {
    if (!set.has(num - 1)) {
      let length = 1;
      while (set.has(num + length)) {
        length++;
      }
      longest = Math.max(longest, length);
    }
  }
  return longest;
}`}
        </CodeBlock>
      </InfoBox>
    </Subsection>
  );
};

export default ArraysAndHashing;
