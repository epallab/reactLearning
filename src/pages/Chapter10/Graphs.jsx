import React from 'react';
import Subsection from '../../components/Content/Subsection';
import CodeBlock from '../../components/UI/CodeBlock';
import InfoBox from '../../components/UI/InfoBox';
import Badge from '../../components/UI/Badge';

const Graphs = () => {
  return (
    <Subsection id="dsa-graphs" title="10.8 — Graphs" icon="🕸️">
      <p>Graph problems involve nodes (vertices) and connections (edges). Identifying whether to use BFS, DFS, or Topological Sort is key.</p>

      <h3>Number of Islands <Badge variant="purple">Frontend Priority</Badge></h3>
      <p>Given a 2D grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and formed by connecting adjacent lands horizontally or vertically.</p>
      <InfoBox type="warning">
        <h4>Normal Approach (BFS)</h4>
        <p>Iterate through grid. When a '1' is found, increment count and run BFS to mark all connected '1's as visited (or flip to '0'). Time: O(M * N), Space: O(min(M, N)) for queue.</p>
        <CodeBlock language="javascript">{`function numIslands(grid) {
  let count = 0;
  let dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (grid[r][c] === '1') {
        count++;
        let queue = [[r, c]];
        grid[r][c] = '0';
        
        while (queue.length) {
          let [currR, currC] = queue.shift();
          for (let [dr, dc] of dirs) {
            let nr = currR + dr, nc = currC + dc;
            if (nr >= 0 && nr < grid.length && nc >= 0 && nc < grid[0].length && grid[nr][nc] === '1') {
              queue.push([nr, nc]);
              grid[nr][nc] = '0';
            }
          }
        }
      }
    }
  }
  return count;
}`}</CodeBlock>
      </InfoBox>
      <InfoBox type="success">
        <h4>Optimal Approach (DFS)</h4>
        <p>Similar logic but recursive DFS. Usually cleaner to implement. Time: O(M * N), Space: O(M * N) worst case for recursion stack.</p>
        <CodeBlock language="javascript">{`function numIslands(grid) {
  let count = 0;
  
  function dfs(r, c) {
    if (r < 0 || c < 0 || r >= grid.length || c >= grid[0].length || grid[r][c] === '0') return;
    grid[r][c] = '0'; // mark as visited
    dfs(r + 1, c);
    dfs(r - 1, c);
    dfs(r, c + 1);
    dfs(r, c - 1);
  }
  
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (grid[r][c] === '1') {
        count++;
        dfs(r, c);
      }
    }
  }
  return count;
}`}</CodeBlock>
      </InfoBox>

      <h3>Clone Graph</h3>
      <p>Return a deep copy (clone) of a graph where each node contains a value and a list of neighbors.</p>
      <InfoBox type="warning">
        <h4>Normal Approach (BFS)</h4>
        <p>Use a queue and a hash map to map original nodes to their clones. Time: O(V + E), Space: O(V).</p>
        <CodeBlock language="javascript">{`function cloneGraph(node) {
  if (!node) return null;
  let map = new Map();
  let queue = [node];
  map.set(node, new Node(node.val));
  
  while (queue.length) {
    let curr = queue.shift();
    for (let neighbor of curr.neighbors) {
      if (!map.has(neighbor)) {
        map.set(neighbor, new Node(neighbor.val));
        queue.push(neighbor);
      }
      map.get(curr).neighbors.push(map.get(neighbor));
    }
  }
  return map.get(node);
}`}</CodeBlock>
      </InfoBox>
      <InfoBox type="success">
        <h4>Optimal Approach (DFS)</h4>
        <p>Recursive DFS using a map to keep track of already visited nodes to prevent cycles. Time: O(V + E), Space: O(V).</p>
        <CodeBlock language="javascript">{`function cloneGraph(node) {
  let map = new Map();
  function dfs(node) {
    if (!node) return null;
    if (map.has(node)) return map.get(node);
    
    let clone = new Node(node.val);
    map.set(node, clone);
    for (let neighbor of node.neighbors) {
      clone.neighbors.push(dfs(neighbor));
    }
    return clone;
  }
  return dfs(node);
}`}</CodeBlock>
      </InfoBox>

      <h3>Course Schedule <Badge variant="purple">Frontend Priority</Badge></h3>
      <p>Given total courses and prerequisites, determine if it is possible to finish all courses (detect cycles in a directed graph).</p>
      <InfoBox type="warning">
        <h4>Normal Approach (DFS Cycle Detection)</h4>
        <p>Track visiting state for nodes. If we hit a node currently in the path, there's a cycle. Time: O(V + E), Space: O(V + E).</p>
        <CodeBlock language="javascript">{`function canFinish(numCourses, prerequisites) {
  let adj = Array.from({length: numCourses}, () => []);
  for (let [crs, pre] of prerequisites) {
    adj[crs].push(pre);
  }
  
  let visiting = new Set();
  
  function dfs(crs) {
    if (visiting.has(crs)) return false; // Cycle detected
    if (adj[crs].length === 0) return true;
    
    visiting.add(crs);
    for (let pre of adj[crs]) {
      if (!dfs(pre)) return false;
    }
    visiting.delete(crs);
    adj[crs] = []; // Optimization: mark as completed
    return true;
  }
  
  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i)) return false;
  }
  return true;
}`}</CodeBlock>
      </InfoBox>
      <InfoBox type="success">
        <h4>Optimal Approach (Kahn's Algorithm - BFS)</h4>
        <p>Use in-degrees. Nodes with in-degree 0 can be completed. Decrement neighbors and add to queue. Time: O(V + E), Space: O(V + E).</p>
        <CodeBlock language="javascript">{`function canFinish(numCourses, prerequisites) {
  let inDegree = new Array(numCourses).fill(0);
  let adj = Array.from({length: numCourses}, () => []);
  
  for (let [crs, pre] of prerequisites) {
    adj[pre].push(crs);
    inDegree[crs]++;
  }
  
  let queue = [];
  for (let i = 0; i < numCourses; i++) {
    if (inDegree[i] === 0) queue.push(i);
  }
  
  let count = 0;
  while (queue.length) {
    let curr = queue.shift();
    count++;
    for (let next of adj[curr]) {
      inDegree[next]--;
      if (inDegree[next] === 0) queue.push(next);
    }
  }
  
  return count === numCourses;
}`}</CodeBlock>
      </InfoBox>

      <h3>Pacific Atlantic Water Flow</h3>
      <p>Given an m x n matrix of heights, find all coordinates that can flow to BOTH the Pacific (top/left) and Atlantic (bottom/right) oceans.</p>
      <InfoBox type="warning">
        <h4>Normal Approach (DFS from each cell)</h4>
        <p>Run a DFS from every single cell and check if it reaches both oceans. This repeats a lot of work. Time: O((M*N)^2), Space: O(M*N).</p>
        <CodeBlock language="javascript">{`// Pseudocode:
// For each cell [r, c]:
//   visited = set()
//   if dfs(r, c) reaches Pacific AND dfs(r, c) reaches Atlantic:
//     add [r, c] to result
// Very slow, will Time Out on large grids.`}</CodeBlock>
      </InfoBox>
      <InfoBox type="success">
        <h4>Optimal Approach (DFS from Oceans)</h4>
        <p>Start from ocean borders and flow water "uphill" to the inner cells. Intersect the results. Time: O(M*N), Space: O(M*N).</p>
        <CodeBlock language="javascript">{`function pacificAtlantic(heights) {
  let rows = heights.length, cols = heights[0].length;
  let pac = Array.from({length: rows}, () => Array(cols).fill(false));
  let atl = Array.from({length: rows}, () => Array(cols).fill(false));
  
  function dfs(r, c, visited, prevHeight) {
    if (r < 0 || c < 0 || r >= rows || c >= cols || visited[r][c] || heights[r][c] < prevHeight) return;
    visited[r][c] = true;
    dfs(r + 1, c, visited, heights[r][c]);
    dfs(r - 1, c, visited, heights[r][c]);
    dfs(r, c + 1, visited, heights[r][c]);
    dfs(r, c - 1, visited, heights[r][c]);
  }
  
  for (let c = 0; c < cols; c++) {
    dfs(0, c, pac, heights[0][c]);
    dfs(rows - 1, c, atl, heights[rows - 1][c]);
  }
  for (let r = 0; r < rows; r++) {
    dfs(r, 0, pac, heights[r][0]);
    dfs(r, cols - 1, atl, heights[r][cols - 1]);
  }
  
  let res = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (pac[r][c] && atl[r][c]) res.push([r, c]);
    }
  }
  return res;
}`}</CodeBlock>
      </InfoBox>

      <h3>Word Ladder</h3>
      <p>Transform a beginWord to an endWord changing one letter at a time, where every transformed word must be in a wordList. Return shortest sequence length.</p>
      <InfoBox type="warning">
        <h4>Normal Approach (DFS Backtracking)</h4>
        <p>Explore all possible paths recursively to find the minimum length. Extremely slow, easily leads to TLE. Time: Exponential, Space: O(N) call stack.</p>
        <CodeBlock language="javascript">{`// Pseudocode:
// dfs(currWord, length, visited)
//   if currWord == endWord: update minLength
//   for word in wordList:
//     if word diff by 1 char and not visited:
//       dfs(word, length + 1, visited + word)
// Will Time Out.`}</CodeBlock>
      </InfoBox>
      <InfoBox type="success">
        <h4>Optimal Approach (BFS)</h4>
        <p>Shortest path in an unweighted graph is best solved with BFS. Time: O(M^2 * N) where M is word length and N is word list size. Space: O(M * N).</p>
        <CodeBlock language="javascript">{`function ladderLength(beginWord, endWord, wordList) {
  let wordSet = new Set(wordList);
  if (!wordSet.has(endWord)) return 0;
  
  let queue = [[beginWord, 1]];
  
  while (queue.length) {
    let [word, steps] = queue.shift();
    if (word === endWord) return steps;
    
    for (let i = 0; i < word.length; i++) {
      for (let c = 97; c <= 122; c++) { // 'a' to 'z'
        let newWord = word.slice(0, i) + String.fromCharCode(c) + word.slice(i + 1);
        if (wordSet.has(newWord)) {
          queue.push([newWord, steps + 1]);
          wordSet.delete(newWord); // Mark visited
        }
      }
    }
  }
  return 0;
}`}</CodeBlock>
      </InfoBox>

    </Subsection>
  );
};

export default Graphs;
