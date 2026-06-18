import Subsection from '../../components/Content/Subsection';
import CodeBlock from '../../components/UI/CodeBlock';
import InfoBox from '../../components/UI/InfoBox';
import Badge from '../../components/UI/Badge';

const BinarySearch = () => {
  return (
    <Subsection id="dsa-binary-search" title="10.5 — Binary Search" icon="🔍">
      <h3>Binary Search <Badge variant="purple">Frontend Priority</Badge></h3>
      <p>Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums.</p>
      
      <InfoBox type="warning">
        <h4>Normal Approach (Linear Search)</h4>
        <p>Iterate through the array one by one until the target is found. Time: O(n), Space: O(1)</p>
        <CodeBlock language="javascript">
{`function search(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) return i;
  }
  return -1;
}`}
        </CodeBlock>
      </InfoBox>

      <InfoBox type="success">
        <h4>Optimal Approach (Binary Search)</h4>
        <p>Compare target with middle element, eliminate half the search space based on result. Time: O(log n), Space: O(1)</p>
        <CodeBlock language="javascript">
{`function search(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    
    if (nums[mid] === target) return mid;
    else if (nums[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  
  return -1;
}`}
        </CodeBlock>
      </InfoBox>

      <h3>Search in Rotated Sorted Array <Badge variant="purple">Frontend Priority</Badge></h3>
      <p>Search for a target value in a sorted array that has been rotated at some pivot.</p>
      
      <InfoBox type="warning">
        <h4>Normal Approach (Linear Search)</h4>
        <p>Scan through the entire array. Time: O(n), Space: O(1)</p>
        <CodeBlock language="javascript">
{`function search(nums, target) {
  return nums.indexOf(target);
}`}
        </CodeBlock>
      </InfoBox>

      <InfoBox type="success">
        <h4>Optimal Approach (Modified Binary Search)</h4>
        <p>Determine which half is properly sorted, and check if target falls within that sorted half. Time: O(log n), Space: O(1)</p>
        <CodeBlock language="javascript">
{`function search(nums, target) {
  let left = 0, right = nums.length - 1;
  
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return mid;
    
    // Left half is sorted
    if (nums[left] <= nums[mid]) {
      if (target >= nums[left] && target < nums[mid]) right = mid - 1;
      else left = mid + 1;
    } 
    // Right half is sorted
    else {
      if (target > nums[mid] && target <= nums[right]) left = mid + 1;
      else right = mid - 1;
    }
  }
  return -1;
}`}
        </CodeBlock>
      </InfoBox>

      <h3>Find Minimum in Rotated Sorted Array</h3>
      <p>Find the minimum element in a sorted array that has been rotated.</p>
      
      <InfoBox type="warning">
        <h4>Normal Approach (Linear Search)</h4>
        <p>Iterate and find the minimum value. Time: O(n), Space: O(1)</p>
        <CodeBlock language="javascript">
{`function findMin(nums) {
  return Math.min(...nums);
}`}
        </CodeBlock>
      </InfoBox>

      <InfoBox type="success">
        <h4>Optimal Approach (Binary Search)</h4>
        <p>Look for the inflection point where the array drops. The drop represents the minimum. Time: O(log n), Space: O(1)</p>
        <CodeBlock language="javascript">
{`function findMin(nums) {
  let left = 0, right = nums.length - 1;
  
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    // If mid is greater than right, min is in the right half
    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  
  return nums[left];
}`}
        </CodeBlock>
      </InfoBox>

      <h3>Koko Eating Bananas</h3>
      <p>Determine the minimum eating speed (k) for Koko to eat all bananas within h hours.</p>
      
      <InfoBox type="warning">
        <h4>Normal Approach (Linear Search for k)</h4>
        <p>Try every speed starting from 1 up to the max pile size. Time: O(max(piles) * n), Space: O(1)</p>
        <CodeBlock language="javascript">
{`function minEatingSpeed(piles, h) {
  const maxPile = Math.max(...piles);
  
  for (let speed = 1; speed <= maxPile; speed++) {
    let hours = 0;
    for (let pile of piles) {
      hours += Math.ceil(pile / speed);
    }
    if (hours <= h) return speed;
  }
}`}
        </CodeBlock>
      </InfoBox>

      <InfoBox type="success">
        <h4>Optimal Approach (Binary Search on Answer)</h4>
        <p>Binary search the eating speed between 1 and max pile size. Time: O(n * log(max(piles))), Space: O(1)</p>
        <CodeBlock language="javascript">
{`function minEatingSpeed(piles, h) {
  let left = 1;
  let right = Math.max(...piles);
  
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    let hours = 0;
    
    for (let pile of piles) {
      hours += Math.ceil(pile / mid);
    }
    
    if (hours <= h) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  
  return left;
}`}
        </CodeBlock>
      </InfoBox>

      <h3>Median of Two Sorted Arrays</h3>
      <p>Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.</p>
      
      <InfoBox type="warning">
        <h4>Normal Approach (Merge and Sort/Find)</h4>
        <p>Merge both arrays into one sorted array, then find the median. Time: O(n + m), Space: O(n + m)</p>
        <CodeBlock language="javascript">
{`function findMedianSortedArrays(nums1, nums2) {
  const merged = [...nums1, ...nums2].sort((a, b) => a - b);
  const mid = Math.floor(merged.length / 2);
  
  if (merged.length % 2 === 0) {
    return (merged[mid - 1] + merged[mid]) / 2;
  }
  return merged[mid];
}`}
        </CodeBlock>
      </InfoBox>

      <InfoBox type="success">
        <h4>Optimal Approach (Binary Search on Partitions)</h4>
        <p>Binary search to find a partition in both arrays such that left half elements are less than or equal to right half elements. Time: O(log(min(m, n))), Space: O(1)</p>
        <CodeBlock language="javascript">
{`function findMedianSortedArrays(nums1, nums2) {
  if (nums1.length > nums2.length) {
    return findMedianSortedArrays(nums2, nums1);
  }
  
  const m = nums1.length;
  const n = nums2.length;
  let low = 0, high = m;
  
  while (low <= high) {
    let partitionX = Math.floor((low + high) / 2);
    let partitionY = Math.floor((m + n + 1) / 2) - partitionX;
    
    let maxLeftX = partitionX === 0 ? -Infinity : nums1[partitionX - 1];
    let minRightX = partitionX === m ? Infinity : nums1[partitionX];
    
    let maxLeftY = partitionY === 0 ? -Infinity : nums2[partitionY - 1];
    let minRightY = partitionY === n ? Infinity : nums2[partitionY];
    
    if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
      if ((m + n) % 2 === 0) {
        return (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2;
      } else {
        return Math.max(maxLeftX, maxLeftY);
      }
    } else if (maxLeftX > minRightY) {
      high = partitionX - 1;
    } else {
      low = partitionX + 1;
    }
  }
}`}
        </CodeBlock>
      </InfoBox>
    </Subsection>
  );
};

export default BinarySearch;
