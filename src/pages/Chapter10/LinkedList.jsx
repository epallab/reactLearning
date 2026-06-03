import React from 'react';
import Subsection from '../../components/Content/Subsection';
import CodeBlock from '../../components/UI/CodeBlock';
import InfoBox from '../../components/UI/InfoBox';
import Badge from '../../components/UI/Badge';

const LinkedList = () => {
  return (
    <Subsection id="dsa-linked-list" title="10.6 — Linked List" icon="🔗">
      <h3>Reverse Linked List <Badge variant="purple">Frontend Priority</Badge></h3>
      <p>Given the head of a singly linked list, reverse the list, and return the reversed list.</p>
      
      <InfoBox type="warning">
        <h4>Normal Approach (Store in Array)</h4>
        <p>Traverse the linked list and store values in an array, then build a new reversed linked list. Time: O(n), Space: O(n)</p>
        <CodeBlock language="javascript">
{`function reverseList(head) {
  const vals = [];
  let curr = head;
  while (curr) {
    vals.push(curr.val);
    curr = curr.next;
  }
  
  let newHead = null;
  for (let val of vals) {
    newHead = new ListNode(val, newHead);
  }
  return newHead;
}`}
        </CodeBlock>
      </InfoBox>

      <InfoBox type="success">
        <h4>Optimal Approach (Iterative Pointers)</h4>
        <p>Use previous and current pointers to reverse the next links in-place. Time: O(n), Space: O(1)</p>
        <CodeBlock language="javascript">
{`function reverseList(head) {
  let prev = null;
  let curr = head;
  
  while (curr) {
    let nextTemp = curr.next; // save next
    curr.next = prev;         // reverse
    prev = curr;              // advance prev
    curr = nextTemp;          // advance curr
  }
  
  return prev;
}`}
        </CodeBlock>
      </InfoBox>

      <h3>Merge Two Sorted Lists <Badge variant="purple">Frontend Priority</Badge></h3>
      <p>Merge two sorted linked lists into one sorted linked list.</p>
      
      <InfoBox type="warning">
        <h4>Normal Approach (Collect and Sort)</h4>
        <p>Collect all values from both lists into an array, sort the array, and reconstruct the list. Time: O(n log n), Space: O(n)</p>
        <CodeBlock language="javascript">
{`function mergeTwoLists(l1, l2) {
  const vals = [];
  while (l1) { vals.push(l1.val); l1 = l1.next; }
  while (l2) { vals.push(l2.val); l2 = l2.next; }
  
  vals.sort((a, b) => a - b);
  
  let dummy = new ListNode(0);
  let curr = dummy;
  for (let val of vals) {
    curr.next = new ListNode(val);
    curr = curr.next;
  }
  return dummy.next;
}`}
        </CodeBlock>
      </InfoBox>

      <InfoBox type="success">
        <h4>Optimal Approach (Two Pointers)</h4>
        <p>Iterate through both lists simultaneously and link the smaller node to the merged list. Time: O(n + m), Space: O(1)</p>
        <CodeBlock language="javascript">
{`function mergeTwoLists(l1, l2) {
  let dummy = new ListNode(-1);
  let curr = dummy;
  
  while (l1 !== null && l2 !== null) {
    if (l1.val <= l2.val) {
      curr.next = l1;
      l1 = l1.next;
    } else {
      curr.next = l2;
      l2 = l2.next;
    }
    curr = curr.next;
  }
  
  curr.next = l1 !== null ? l1 : l2;
  return dummy.next;
}`}
        </CodeBlock>
      </InfoBox>

      <h3>Linked List Cycle <Badge variant="purple">Frontend Priority</Badge></h3>
      <p>Determine if a linked list has a cycle in it.</p>
      
      <InfoBox type="warning">
        <h4>Normal Approach (Hash Set)</h4>
        <p>Use a Set to keep track of nodes we've seen. If we encounter a seen node again, there is a cycle. Time: O(n), Space: O(n)</p>
        <CodeBlock language="javascript">
{`function hasCycle(head) {
  const seen = new Set();
  let curr = head;
  
  while (curr) {
    if (seen.has(curr)) return true;
    seen.add(curr);
    curr = curr.next;
  }
  return false;
}`}
        </CodeBlock>
      </InfoBox>

      <InfoBox type="success">
        <h4>Optimal Approach (Floyd's Tortoise and Hare)</h4>
        <p>Use a slow pointer and a fast pointer. If there is a cycle, the fast pointer will eventually catch up to the slow pointer. Time: O(n), Space: O(1)</p>
        <CodeBlock language="javascript">
{`function hasCycle(head) {
  let slow = head;
  let fast = head;
  
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    
    if (slow === fast) return true;
  }
  return false;
}`}
        </CodeBlock>
      </InfoBox>

      <h3>Remove Nth Node From End</h3>
      <p>Remove the nth node from the end of a linked list and return its head.</p>
      
      <InfoBox type="warning">
        <h4>Normal Approach (Two Passes)</h4>
        <p>First pass to count total length. Second pass to go to length - n node and remove it. Time: O(n), Space: O(1)</p>
        <CodeBlock language="javascript">
{`function removeNthFromEnd(head, n) {
  let length = 0;
  let curr = head;
  while (curr) {
    length++;
    curr = curr.next;
  }
  
  if (length === n) return head.next;
  
  curr = head;
  for (let i = 1; i < length - n; i++) {
    curr = curr.next;
  }
  curr.next = curr.next.next;
  
  return head;
}`}
        </CodeBlock>
      </InfoBox>

      <InfoBox type="success">
        <h4>Optimal Approach (One Pass with Two Pointers)</h4>
        <p>Use two pointers. Move the fast pointer n steps ahead, then move both at the same speed. Time: O(n), Space: O(1)</p>
        <CodeBlock language="javascript">
{`function removeNthFromEnd(head, n) {
  let dummy = new ListNode(0, head);
  let slow = dummy;
  let fast = dummy;
  
  for (let i = 0; i <= n; i++) {
    fast = fast.next;
  }
  
  while (fast !== null) {
    slow = slow.next;
    fast = fast.next;
  }
  
  slow.next = slow.next.next;
  return dummy.next;
}`}
        </CodeBlock>
      </InfoBox>

      <h3>LRU Cache</h3>
      <p>Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.</p>
      
      <InfoBox type="warning">
        <h4>Normal Approach (Array of Objects)</h4>
        <p>Keep an array or map tracking usage history and loop through to find the least recently used on evict. Time: O(n) for get/put, Space: O(n)</p>
        <CodeBlock language="javascript">
{`class LRUCache {
  constructor(capacity) {
    this.cap = capacity;
    this.cache = new Map();
  }
  get(key) {
    if (!this.cache.has(key)) return -1;
    const val = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, val);
    return val;
  }
  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    }
    this.cache.set(key, value);
    if (this.cache.size > this.cap) {
      // Maps iterate in insertion order, so the first key is the oldest
      const oldestKey = this.cache.keys().next().value;
      this.cache.delete(oldestKey);
    }
  }
}`}
        </CodeBlock>
      </InfoBox>

      <InfoBox type="success">
        <h4>Optimal Approach (Doubly Linked List + Hash Map)</h4>
        <p>Map gives O(1) lookup to nodes. Doubly linked list allows O(1) addition/removal of nodes to manage LRU status. Time: O(1) for get/put, Space: O(n)</p>
        <CodeBlock language="javascript">
{`class Node {
  constructor(key, val) {
    this.key = key;
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class LRUCache {
  constructor(capacity) {
    this.cap = capacity;
    this.map = new Map();
    
    // dummy nodes
    this.head = new Node(0, 0);
    this.tail = new Node(0, 0);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }
  
  _remove(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }
  
  _add(node) {
    node.prev = this.head;
    node.next = this.head.next;
    this.head.next.prev = node;
    this.head.next = node;
  }
  
  get(key) {
    if (this.map.has(key)) {
      const node = this.map.get(key);
      this._remove(node);
      this._add(node);
      return node.val;
    }
    return -1;
  }
  
  put(key, value) {
    if (this.map.has(key)) {
      this._remove(this.map.get(key));
    }
    const newNode = new Node(key, value);
    this.map.set(key, newNode);
    this._add(newNode);
    
    if (this.map.size > this.cap) {
      const lru = this.tail.prev;
      this._remove(lru);
      this.map.delete(lru.key);
    }
  }
}`}
        </CodeBlock>
      </InfoBox>
    </Subsection>
  );
};

export default LinkedList;
