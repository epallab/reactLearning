import Subsection from '../../components/Content/Subsection';
import CodeBlock from '../../components/UI/CodeBlock';
import InfoBox from '../../components/UI/InfoBox';
import Badge from '../../components/UI/Badge';

const Trees = () => {
  return (
    <Subsection id="dsa-trees" title="10.7 — Trees" icon="🌲">
      <p>Trees are hierarchical data structures. The most common is the Binary Tree, where each node has at most two children. Tree traversal algorithms like DFS (Pre, In, Post) and BFS are foundational.</p>
      
      <h3>Maximum Depth of Binary Tree <Badge variant="purple">Frontend Priority</Badge></h3>
      <p>Find the maximum depth (number of nodes along the longest path from root to leaf) of a binary tree.</p>
      <InfoBox type="warning">
        <h4>Normal Approach (Iterative BFS)</h4>
        <p>Traverse level by level using a queue, incrementing depth at each level. Time: O(N), Space: O(N) for the queue in the worst case (the widest level).</p>
        <CodeBlock language="javascript">{`function maxDepth(root) {
  if (!root) return 0;
  let queue = [root];
  let depth = 0;
  
  while (queue.length > 0) {
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      let node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    depth++;
  }
  return depth;
}`}</CodeBlock>
      </InfoBox>
      <InfoBox type="success">
        <h4>Optimal Approach (Recursive DFS)</h4>
        <p>Use depth-first search recursively. The max depth of a tree is 1 + max(left_depth, right_depth). Time: O(N), Space: O(H) where H is tree height for the recursion stack.</p>
        <CodeBlock language="javascript">{`function maxDepth(root) {
  if (!root) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}`}</CodeBlock>
      </InfoBox>

      <h3>Invert Binary Tree</h3>
      <p>Invert a binary tree (flip it like a mirror). This is famously the question Max Howell was asked in an interview.</p>
      <InfoBox type="warning">
        <h4>Normal Approach (Iterative BFS)</h4>
        <p>Use a queue to process nodes level by level, swapping the left and right children. Time: O(N), Space: O(N) for the queue.</p>
        <CodeBlock language="javascript">{`function invertTree(root) {
  if (!root) return null;
  let queue = [root];
  while (queue.length) {
    let node = queue.shift();
    let temp = node.left;
    node.left = node.right;
    node.right = temp;
    
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return root;
}`}</CodeBlock>
      </InfoBox>
      <InfoBox type="success">
        <h4>Optimal Approach (Recursive DFS)</h4>
        <p>Recursively swap left and right subtrees. Time: O(N), Space: O(H) for the call stack.</p>
        <CodeBlock language="javascript">{`function invertTree(root) {
  if (!root) return null;
  let temp = root.left;
  root.left = root.right;
  root.right = temp;
  
  invertTree(root.left);
  invertTree(root.right);
  
  return root;
}`}</CodeBlock>
      </InfoBox>

      <h3>Same Tree</h3>
      <p>Check if two binary trees are structurally identical and have the same node values.</p>
      <InfoBox type="warning">
        <h4>Normal Approach (Iterative BFS)</h4>
        <p>Use a queue to traverse both trees together and compare nodes. Time: O(N), Space: O(N).</p>
        <CodeBlock language="javascript">{`function isSameTree(p, q) {
  let queue = [[p, q]];
  while (queue.length) {
    let [n1, n2] = queue.shift();
    if (!n1 && !n2) continue;
    if (!n1 || !n2 || n1.val !== n2.val) return false;
    queue.push([n1.left, n2.left]);
    queue.push([n1.right, n2.right]);
  }
  return true;
}`}</CodeBlock>
      </InfoBox>
      <InfoBox type="success">
        <h4>Optimal Approach (Recursive DFS)</h4>
        <p>Recursively check if current nodes are equal and their subtrees are equal. Time: O(N), Space: O(H).</p>
        <CodeBlock language="javascript">{`function isSameTree(p, q) {
  if (!p && !q) return true;
  if (!p || !q || p.val !== q.val) return false;
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}`}</CodeBlock>
      </InfoBox>

      <h3>Binary Tree Level Order Traversal <Badge variant="purple">Frontend Priority</Badge></h3>
      <p>Return the level order traversal of its nodes' values. (i.e., from left to right, level by level).</p>
      <InfoBox type="warning">
        <h4>Normal Approach (Recursive DFS)</h4>
        <p>Pass the depth down the recursive calls to place node values into the correct array index. Time: O(N), Space: O(N) for output arrays + recursion stack.</p>
        <CodeBlock language="javascript">{`function levelOrder(root) {
  let res = [];
  function dfs(node, level) {
    if (!node) return;
    if (res.length === level) res.push([]);
    res[level].push(node.val);
    dfs(node.left, level + 1);
    dfs(node.right, level + 1);
  }
  dfs(root, 0);
  return res;
}`}</CodeBlock>
      </InfoBox>
      <InfoBox type="success">
        <h4>Optimal Approach (Iterative BFS)</h4>
        <p>Use a queue. Process level by level naturally. Time: O(N), Space: O(N) for queue and result arrays.</p>
        <CodeBlock language="javascript">{`function levelOrder(root) {
  if (!root) return [];
  let res = [];
  let queue = [root];
  
  while (queue.length) {
    let levelSize = queue.length;
    let currentLevel = [];
    for (let i = 0; i < levelSize; i++) {
      let node = queue.shift();
      currentLevel.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    res.push(currentLevel);
  }
  return res;
}`}</CodeBlock>
      </InfoBox>

      <h3>Lowest Common Ancestor</h3>
      <p>Find the lowest common ancestor (LCA) of two given nodes in a Binary Search Tree.</p>
      <InfoBox type="warning">
        <h4>Normal Approach (Recursive Search)</h4>
        <p>If both values are lesser, search left. If both are greater, search right. Otherwise, we found the split point. Time: O(H), Space: O(H).</p>
        <CodeBlock language="javascript">{`function lowestCommonAncestor(root, p, q) {
  if (p.val < root.val && q.val < root.val) {
    return lowestCommonAncestor(root.left, p, q);
  } else if (p.val > root.val && q.val > root.val) {
    return lowestCommonAncestor(root.right, p, q);
  } else {
    return root;
  }
}`}</CodeBlock>
      </InfoBox>
      <InfoBox type="success">
        <h4>Optimal Approach (Iterative)</h4>
        <p>Same logic, but iterate down the tree avoiding call stack overhead. Time: O(H), Space: O(1).</p>
        <CodeBlock language="javascript">{`function lowestCommonAncestor(root, p, q) {
  let curr = root;
  while (curr) {
    if (p.val < curr.val && q.val < curr.val) {
      curr = curr.left;
    } else if (p.val > curr.val && q.val > curr.val) {
      curr = curr.right;
    } else {
      return curr;
    }
  }
}`}</CodeBlock>
      </InfoBox>

      <h3>Validate BST <Badge variant="purple">Frontend Priority</Badge></h3>
      <p>Determine if a binary tree is a valid binary search tree (BST).</p>
      <InfoBox type="warning">
        <h4>Normal Approach (Inorder Array)</h4>
        <p>Do an inorder traversal, collect values, and check if array is strictly increasing. Time: O(N), Space: O(N).</p>
        <CodeBlock language="javascript">{`function isValidBST(root) {
  let values = [];
  function inorder(node) {
    if (!node) return;
    inorder(node.left);
    values.push(node.val);
    inorder(node.right);
  }
  inorder(root);
  for (let i = 1; i < values.length; i++) {
    if (values[i] <= values[i - 1]) return false;
  }
  return true;
}`}</CodeBlock>
      </InfoBox>
      <InfoBox type="success">
        <h4>Optimal Approach (Recursive with Boundaries)</h4>
        <p>Pass down a valid range [min, max] for each node to ensure every node satisfies the BST condition constraint. Time: O(N), Space: O(H).</p>
        <CodeBlock language="javascript">{`function isValidBST(root, min = null, max = null) {
  if (!root) return true;
  if ((min !== null && root.val <= min) || (max !== null && root.val >= max)) {
    return false;
  }
  return isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val, max);
}`}</CodeBlock>
      </InfoBox>

      <h3>Kth Smallest Element in BST</h3>
      <p>Given the root of a BST, find the kth smallest value (1-indexed).</p>
      <InfoBox type="warning">
        <h4>Normal Approach (Recursive Inorder Array)</h4>
        <p>Flatten the tree to an array via inorder traversal, then pick the (k-1)th element. Time: O(N), Space: O(N).</p>
        <CodeBlock language="javascript">{`function kthSmallest(root, k) {
  let values = [];
  function inorder(node) {
    if (!node) return;
    inorder(node.left);
    values.push(node.val);
    inorder(node.right);
  }
  inorder(root);
  return values[k - 1];
}`}</CodeBlock>
      </InfoBox>
      <InfoBox type="success">
        <h4>Optimal Approach (Iterative Inorder Traversal)</h4>
        <p>Use a stack to simulate inorder traversal and stop early when we hit the k-th node. Time: O(H + k), Space: O(H) for the stack.</p>
        <CodeBlock language="javascript">{`function kthSmallest(root, k) {
  let stack = [];
  let curr = root;
  let count = 0;
  
  while (curr || stack.length) {
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }
    curr = stack.pop();
    count++;
    if (count === k) return curr.val;
    curr = curr.right;
  }
}`}</CodeBlock>
      </InfoBox>

    </Subsection>
  );
};

export default Trees;
