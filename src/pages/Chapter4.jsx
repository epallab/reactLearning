import Section from '../components/Content/Section';
import Subsection from '../components/Content/Subsection';
import CodeBlock from '../components/UI/CodeBlock';
import InfoBox from '../components/UI/InfoBox';
import DataTable from '../components/UI/DataTable';
import Badge from '../components/UI/Badge';

const Chapter4 = () => {
  return (
    <Section id="chapter-4" number={4} title="Performance Optimization & Lazy Loading" theme="orange">
      <p>
        Performance isn't a feature — it's a requirement. Users expect your application to load
        instantly, respond immediately to interactions, and never stutter during animations. A slow app
        loses users: studies show that 53% of mobile users abandon sites that take longer than 3
        seconds to load. This chapter covers how React's rendering model works under the hood, how to
        measure performance with Core Web Vitals, and the specific techniques — code splitting,
        memoization, and lazy loading — that keep your app fast at any scale.
      </p>

      <h3>Core Web Vitals</h3>
      <DataTable headers={['Metric', 'Full Name', 'Good Target', 'What It Measures']}>
        <tr>
          <td><Badge variant="green">LCP</Badge></td>
          <td>Largest Contentful Paint</td>
          <td>≤ 2.5s</td>
          <td>Time until the largest visible element (image, text block) is rendered. Measures perceived load speed.</td>
        </tr>
        <tr>
          <td><Badge variant="blue">FID</Badge></td>
          <td>First Input Delay</td>
          <td>≤ 100ms</td>
          <td>Time from first user interaction (click, tap) to the browser's response. Measures interactivity responsiveness.</td>
        </tr>
        <tr>
          <td><Badge variant="orange">CLS</Badge></td>
          <td>Cumulative Layout Shift</td>
          <td>≤ 0.1</td>
          <td>Measures visual stability — how much elements shift during page load. Low scores mean a stable layout.</td>
        </tr>
        <tr>
          <td><Badge variant="purple">TTI</Badge></td>
          <td>Time to Interactive</td>
          <td>≤ 3.8s</td>
          <td>Time until the page is fully interactive and responds to user input without delay.</td>
        </tr>
        <tr>
          <td><Badge variant="red">TBT</Badge></td>
          <td>Total Blocking Time</td>
          <td>≤ 200ms</td>
          <td>Total time the main thread was blocked by long tasks (&gt;50ms) between FCP and TTI.</td>
        </tr>
      </DataTable>

      <h3>How React's Rendering Model Works</h3>
      <p>
        React uses a Virtual DOM — a lightweight JavaScript representation of the actual DOM. When state
        changes, React creates a new Virtual DOM tree, diffs it against the previous one (reconciliation),
        and applies only the minimal set of changes to the real DOM. This process has three phases:
      </p>
      <ol>
        <li>
          <strong>Trigger:</strong> A state update is triggered (via <code>setState</code>,
          <code>useReducer dispatch</code>, or a parent re-render).
        </li>
        <li>
          <strong>Render:</strong> React calls your component function to compute the new JSX output.
          This is pure computation — no DOM manipulation happens here.
        </li>
        <li>
          <strong>Commit:</strong> React compares the new Virtual DOM with the previous one and applies
          the differences to the actual DOM. This is the only phase that touches the browser.
        </li>
      </ol>

      <InfoBox type="warning" title="Common Performance Anti-Patterns">
        <ul>
          <li><strong>Creating objects/arrays inside render:</strong> Every render creates a new reference, causing child components to re-render unnecessarily.</li>
          <li><strong>Inline function definitions in JSX:</strong> <code>onClick=&#123;() =&gt; handleClick(id)&#125;</code> creates a new function on every render.</li>
          <li><strong>Not using keys properly:</strong> Using array index as key causes React to remount components instead of reordering them.</li>
          <li><strong>Unnecessary state:</strong> Derived data should be computed during render, not stored in state. If you can calculate it from existing state or props, don't add another <code>useState</code>.</li>
          <li><strong>Context overuse:</strong> Putting too much data in a single Context causes every consumer to re-render when any value changes.</li>
        </ul>
      </InfoBox>

      <Subsection id="lazy-loading" icon="⚡" iconBg="#fff7ed" iconColor="#ea580c" title="4.1 React.lazy, Suspense & Code Splitting">
        <p>
          Code splitting is the technique of breaking your JavaScript bundle into smaller chunks that
          are loaded on demand. Instead of loading your entire application upfront (which could be
          several megabytes), you load only what the user needs for the current view. React provides
          built-in support for code splitting via <code>React.lazy</code> and <code>Suspense</code>.
        </p>

        <h4>How It Works Under the Hood</h4>
        <ol>
          <li>
            <code>React.lazy()</code> takes a function that calls a dynamic <code>import()</code> — this
            tells your bundler (Vite, Webpack) to create a separate chunk for that module.
          </li>
          <li>
            When the lazy component is first rendered, React triggers the dynamic import and shows the
            <code>Suspense</code> fallback while the chunk is downloading.
          </li>
          <li>
            Once the chunk is loaded, React replaces the fallback with the actual component. Subsequent
            renders use the cached module — no additional network requests.
          </li>
        </ol>

        <h4>Route-Based vs Component-Based Splitting</h4>
        <ul>
          <li>
            <strong>Route-Based:</strong> Split at the page/route level. Each page is a separate chunk.
            This is the most common and safest approach — users naturally expect a brief loading moment
            during navigation.
          </li>
          <li>
            <strong>Component-Based:</strong> Split individual components that are heavy or rarely used
            (charts, rich text editors, modals). This is more granular and can significantly reduce initial
            bundle size.
          </li>
        </ul>

        <CodeBlock filename="App.jsx" language="jsx">
{`<span class="kw">import</span> React, { Suspense, lazy } <span class="kw">from</span> <span class="str">'react'</span>;
<span class="kw">import</span> { BrowserRouter, Routes, Route } <span class="kw">from</span> <span class="str">'react-router-dom'</span>;
<span class="kw">import</span> LoadingSpinner <span class="kw">from</span> <span class="str">'./components/LoadingSpinner'</span>;

<span class="cm">// ─── Lazy-loaded route components ────────────</span>
<span class="kw">const</span> Home <span class="op">=</span> <span class="fn">lazy</span>(() <span class="kw">=&gt;</span> <span class="kw">import</span>(<span class="str">'./pages/Home'</span>));
<span class="kw">const</span> Dashboard <span class="op">=</span> <span class="fn">lazy</span>(() <span class="kw">=&gt;</span> <span class="kw">import</span>(<span class="str">'./pages/Dashboard'</span>));
<span class="kw">const</span> Settings <span class="op">=</span> <span class="fn">lazy</span>(() <span class="kw">=&gt;</span> <span class="kw">import</span>(<span class="str">'./pages/Settings'</span>));
<span class="kw">const</span> Analytics <span class="op">=</span> <span class="fn">lazy</span>(() <span class="kw">=&gt;</span> <span class="kw">import</span>(<span class="str">'./pages/Analytics'</span>));

<span class="kw">export default function</span> <span class="fn">App</span>() {
  <span class="kw">return</span> (
    <span class="tag">&lt;BrowserRouter&gt;</span>
      <span class="tag">&lt;Suspense</span> <span class="attr">fallback</span><span class="op">=</span>{<span class="tag">&lt;LoadingSpinner /&gt;</span>}<span class="tag">&gt;</span>
        <span class="tag">&lt;Routes&gt;</span>
          <span class="tag">&lt;Route</span> <span class="attr">path</span><span class="op">=</span><span class="str">"/"</span> <span class="attr">element</span><span class="op">=</span>{<span class="tag">&lt;Home /&gt;</span>} <span class="tag">/&gt;</span>
          <span class="tag">&lt;Route</span> <span class="attr">path</span><span class="op">=</span><span class="str">"/dashboard"</span> <span class="attr">element</span><span class="op">=</span>{<span class="tag">&lt;Dashboard /&gt;</span>} <span class="tag">/&gt;</span>
          <span class="tag">&lt;Route</span> <span class="attr">path</span><span class="op">=</span><span class="str">"/settings"</span> <span class="attr">element</span><span class="op">=</span>{<span class="tag">&lt;Settings /&gt;</span>} <span class="tag">/&gt;</span>
          <span class="tag">&lt;Route</span> <span class="attr">path</span><span class="op">=</span><span class="str">"/analytics"</span> <span class="attr">element</span><span class="op">=</span>{<span class="tag">&lt;Analytics /&gt;</span>} <span class="tag">/&gt;</span>
        <span class="tag">&lt;/Routes&gt;</span>
      <span class="tag">&lt;/Suspense&gt;</span>
    <span class="tag">&lt;/BrowserRouter&gt;</span>
  );
}`}
        </CodeBlock>

        <CodeBlock filename="useLazyLoad.js" language="javascript">
{`<span class="kw">import</span> { useState, useEffect, useRef } <span class="kw">from</span> <span class="str">'react'</span>;

<span class="cm">/**
 * Uses IntersectionObserver to detect when an element
 * enters the viewport. Perfect for lazy-loading images,
 * infinite scroll, or triggering animations on scroll.
 *
 * @param {Object} options - IntersectionObserver options
 * @returns {[ref, boolean]} Ref to attach and visibility state
 */</span>
<span class="kw">export function</span> <span class="fn">useLazyLoad</span>(options <span class="op">=</span> {}) {
  <span class="kw">const</span> {
    threshold <span class="op">=</span> <span class="num">0.1</span>,
    rootMargin <span class="op">=</span> <span class="str">'50px'</span>,
    triggerOnce <span class="op">=</span> <span class="bool">true</span>,
  } <span class="op">=</span> options;

  <span class="kw">const</span> [isVisible, setIsVisible] <span class="op">=</span> <span class="fn">useState</span>(<span class="bool">false</span>);
  <span class="kw">const</span> elementRef <span class="op">=</span> <span class="fn">useRef</span>(<span class="bool">null</span>);

  <span class="fn">useEffect</span>(() <span class="kw">=&gt;</span> {
    <span class="kw">const</span> element <span class="op">=</span> elementRef.current;
    <span class="kw">if</span> (<span class="op">!</span>element) <span class="kw">return</span>;

    <span class="kw">const</span> observer <span class="op">=</span> <span class="kw">new</span> <span class="fn">IntersectionObserver</span>(
      ([entry]) <span class="kw">=&gt;</span> {
        <span class="kw">if</span> (entry.isIntersecting) {
          <span class="fn">setIsVisible</span>(<span class="bool">true</span>);
          <span class="kw">if</span> (triggerOnce) {
            observer.<span class="fn">unobserve</span>(element);
          }
        } <span class="kw">else if</span> (<span class="op">!</span>triggerOnce) {
          <span class="fn">setIsVisible</span>(<span class="bool">false</span>);
        }
      },
      { threshold, rootMargin }
    );

    observer.<span class="fn">observe</span>(element);

    <span class="kw">return</span> () <span class="kw">=&gt;</span> observer.<span class="fn">disconnect</span>();
  }, [threshold, rootMargin, triggerOnce]);

  <span class="kw">return</span> [elementRef, isVisible];
}`}
        </CodeBlock>
      </Subsection>

      <Subsection id="memoization" icon="🧠" iconBg="#fff7ed" iconColor="#ea580c" title="4.2 useMemo, useCallback & React.memo">
        <p>
          Memoization is the technique of caching the result of an expensive computation so you don't
          have to repeat it on every render. React provides three memoization tools, each designed for a
          specific use case.
        </p>

        <h4>Deep Dive: How Each One Works</h4>
        <ul>
          <li>
            <strong>React.memo (Component-level):</strong> A higher-order component that wraps your
            component and performs a shallow comparison of its props. If the props haven't changed, React
            skips re-rendering the component entirely and reuses the previous output. Ideal for
            components that receive the same props frequently.
          </li>
          <li>
            <strong>useMemo (Value-level):</strong> Caches the result of an expensive computation
            between re-renders. React only recomputes the value when one of its dependencies changes.
            Use it for filtering large arrays, complex calculations, or creating derived data.
          </li>
          <li>
            <strong>useCallback (Function-level):</strong> Caches a function definition between
            re-renders. Without <code>useCallback</code>, every render creates a new function reference,
            which can cause child components wrapped in <code>React.memo</code> to re-render unnecessarily.
          </li>
        </ul>

        <InfoBox type="note" title="React 18+ Automatic Batching">
          React 18 introduced automatic batching — multiple state updates inside event handlers,
          promises, setTimeout, and native event handlers are now batched into a single re-render
          automatically. This means React is already optimizing many scenarios that previously required
          manual intervention. Before reaching for memoization, make sure you actually have a performance
          problem — premature optimization adds complexity without benefit.
        </InfoBox>

        <CodeBlock filename="Performance Optimization Patterns" language="jsx">
{`<span class="kw">import</span> React, { useMemo, useCallback, useState } <span class="kw">from</span> <span class="str">'react'</span>;

<span class="cm">// ─── React.memo: Skip re-renders when props ──</span>
<span class="cm">// haven't changed (shallow comparison)</span>
<span class="kw">const</span> <span class="fn">ExpensiveList</span> <span class="op">=</span> React.<span class="fn">memo</span>(({ items, onSelect }) <span class="kw">=&gt;</span> {
  console.<span class="fn">log</span>(<span class="str">'ExpensiveList rendered'</span>);
  <span class="kw">return</span> (
    <span class="tag">&lt;ul&gt;</span>
      {items.<span class="fn">map</span>((item) <span class="kw">=&gt;</span> (
        <span class="tag">&lt;li</span>
          <span class="attr">key</span><span class="op">=</span>{item.id}
          <span class="attr">onClick</span><span class="op">=</span>{() <span class="kw">=&gt;</span> <span class="fn">onSelect</span>(item.id)}
        <span class="tag">&gt;</span>
          {item.name}
        <span class="tag">&lt;/li&gt;</span>
      ))}
    <span class="tag">&lt;/ul&gt;</span>
  );
});

<span class="kw">export default function</span> <span class="fn">ProductPage</span>({ products }) {
  <span class="kw">const</span> [filter, setFilter] <span class="op">=</span> <span class="fn">useState</span>(<span class="str">''</span>);
  <span class="kw">const</span> [selectedId, setSelectedId] <span class="op">=</span> <span class="fn">useState</span>(<span class="bool">null</span>);

  <span class="cm">// ─── useMemo: Cache expensive computation ───</span>
  <span class="kw">const</span> filteredProducts <span class="op">=</span> <span class="fn">useMemo</span>(() <span class="kw">=&gt;</span> {
    console.<span class="fn">log</span>(<span class="str">'Filtering products...'</span>);
    <span class="kw">return</span> products
      .<span class="fn">filter</span>((p) <span class="kw">=&gt;</span>
        p.name.<span class="fn">toLowerCase</span>().<span class="fn">includes</span>(
          filter.<span class="fn">toLowerCase</span>()
        )
      )
      .<span class="fn">sort</span>((a, b) <span class="kw">=&gt;</span> a.name.<span class="fn">localeCompare</span>(b.name));
  }, [products, filter]);

  <span class="cm">// ─── useCallback: Stable function reference ─</span>
  <span class="kw">const</span> handleSelect <span class="op">=</span> <span class="fn">useCallback</span>((id) <span class="kw">=&gt;</span> {
    <span class="fn">setSelectedId</span>(id);
  }, []);

  <span class="kw">return</span> (
    <span class="tag">&lt;div&gt;</span>
      <span class="tag">&lt;input</span>
        <span class="attr">value</span><span class="op">=</span>{filter}
        <span class="attr">onChange</span><span class="op">=</span>{(e) <span class="kw">=&gt;</span> <span class="fn">setFilter</span>(e.target.value)}
        <span class="attr">placeholder</span><span class="op">=</span><span class="str">"Filter products..."</span>
      <span class="tag">/&gt;</span>
      <span class="tag">&lt;ExpensiveList</span>
        <span class="attr">items</span><span class="op">=</span>{filteredProducts}
        <span class="attr">onSelect</span><span class="op">=</span>{handleSelect}
      <span class="tag">/&gt;</span>
      {selectedId <span class="op">&amp;&amp;</span> <span class="tag">&lt;p&gt;</span>Selected: {selectedId}<span class="tag">&lt;/p&gt;</span>}
    <span class="tag">&lt;/div&gt;</span>
  );
}`}
        </CodeBlock>

        <InfoBox type="note" title="When to Memoize">
          Don't memoize everything — memoization has a cost (memory for caching, comparison overhead).
          Use it when: (1) a component re-renders often with the same props, (2) the render output is
          expensive to compute, (3) you're passing callbacks to memoized children, or (4) you have large
          lists that filter or sort on every render. Profile first with React DevTools Profiler, then
          optimize the actual bottlenecks.
        </InfoBox>

        <h4>Performance Comparison Table</h4>
        <DataTable headers={['Technique', 'Level', 'What It Caches', 'When to Use']}>
          <tr>
            <td><Badge variant="blue">React.memo</Badge></td>
            <td>Component</td>
            <td>Rendered output (JSX)</td>
            <td>Component receives same props frequently and is expensive to render</td>
          </tr>
          <tr>
            <td><Badge variant="green">useMemo</Badge></td>
            <td>Value</td>
            <td>Computed value</td>
            <td>Expensive calculations like filtering, sorting, or transforming large datasets</td>
          </tr>
          <tr>
            <td><Badge variant="orange">useCallback</Badge></td>
            <td>Function</td>
            <td>Function reference</td>
            <td>Passing callbacks to React.memo children or as effect dependencies</td>
          </tr>
          <tr>
            <td><Badge variant="purple">React.lazy</Badge></td>
            <td>Module</td>
            <td>Component chunk</td>
            <td>Route-level or heavy component splitting to reduce initial bundle size</td>
          </tr>
          <tr>
            <td><Badge variant="yellow">useTransition</Badge></td>
            <td>Update priority</td>
            <td>Deferred state update</td>
            <td>Mark non-urgent updates (like search results filtering) as low priority</td>
          </tr>
          <tr>
            <td><Badge variant="red">useDeferredValue</Badge></td>
            <td>Value priority</td>
            <td>Deferred value</td>
            <td>Show stale data while expensive re-render is in progress</td>
          </tr>
        </DataTable>
      </Subsection>
      <Subsection id="virtualization" icon="📜" iconBg="#fff7ed" iconColor="#ea580c" title="4.3 Virtualization & Large Lists">
        <p>
          Rendering thousands of DOM nodes will inevitably crash the browser or cause severe jank, regardless of how well you memoize. 
          Virtualization (or "windowing") solves this by only rendering the specific items currently visible in the user's viewport.
        </p>
        <p>
          Libraries like <code>react-window</code> or <code>react-virtuoso</code> handle the math required to absolutely position items inside a scrolling container, dynamically swapping data as the user scrolls.
        </p>
      </Subsection>

      <Subsection id="concurrent-features" icon="⏳" iconBg="#fff7ed" iconColor="#ea580c" title="4.4 React 18 Concurrent Features">
        <p>
          React 18 introduced concurrent rendering, allowing React to pause, abort, and resume renders. This is exposed primarily through two hooks:
        </p>
        <ul>
          <li><strong><code>useTransition</code>:</strong> Marks a state update as non-urgent. If the user types into an input, React will prioritize rendering the keystroke over rendering the heavy search results.</li>
          <li><strong><code>useDeferredValue</code>:</strong> Similar to useTransition, but used when you receive a value from above (as a prop) and want to defer updating the UI that depends on it.</li>
        </ul>
        <CodeBlock filename="useTransition.jsx" language="jsx">
{`import { useState, useTransition } from 'react';

function SearchPage() {
  const [query, setQuery] = useState('');
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    // Urgent update: The input field updates instantly
    setQuery(e.target.value);
    
    // Non-urgent update: The heavy list rendering can be interrupted
    startTransition(() => {
      // Trigger search/filter here
    });
  };

  return (
    <div>
      <input value={query} onChange={handleChange} />
      {isPending ? <Spinner /> : <HeavyList query={query} />}
    </div>
  );
}`}
        </CodeBlock>
      </Subsection>
    </Section>
  );
};

export default Chapter4;
