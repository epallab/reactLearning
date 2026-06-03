import React from 'react';
import Section from '../components/Content/Section';
import Subsection from '../components/Content/Subsection';
import CodeBlock from '../components/UI/CodeBlock';
import InfoBox from '../components/UI/InfoBox';

const Chapter3 = () => {
  return (
    <Section id="chapter-3" number={3} title="Clean, Modular & Reusable Code" theme="green">
      <p>
        Writing code that works is the baseline. Writing code that's clean, modular, and reusable is
        what separates junior developers from senior engineers. Clean code reads like well-written
        prose — its intent is clear, its structure is logical, and its patterns are consistent. This
        chapter covers the principles, patterns, and practical techniques that make React codebases
        a joy to work in, even as they scale to hundreds of components.
      </p>

      <h3>Key Principles</h3>
      <ul>
        <li>
          <strong>DRY (Don't Repeat Yourself):</strong> If you find yourself writing the same logic in
          multiple places, extract it into a shared utility, custom hook, or component. But don't
          over-DRY — sometimes a little duplication is better than the wrong abstraction.
        </li>
        <li>
          <strong>SOLID Principles:</strong> Originally from OOP, these principles apply beautifully to
          React. Single Responsibility (one component = one job), Open/Closed (extend via composition,
          not modification), Liskov Substitution (components should be interchangeable), Interface
          Segregation (don't force components to depend on props they don't use), Dependency Inversion
          (depend on abstractions like hooks, not concrete implementations).
        </li>
        <li>
          <strong>AHA (Avoid Hasty Abstractions):</strong> Don't create an abstraction until you've seen
          the pattern at least three times. Premature abstraction creates more problems than duplication.
          Wait until the pattern is clear, then extract with confidence.
        </li>
        <li>
          <strong>File Naming Conventions:</strong> Use PascalCase for components (<code>UserProfile.jsx</code>),
          camelCase for hooks (<code>useAuth.js</code>), and kebab-case for utilities (<code>format-date.js</code>).
          Consistency in naming makes it easy to identify what a file contains at a glance.
        </li>
        <li>
          <strong>Barrel Exports:</strong> Use <code>index.js</code> files to re-export related modules.
          This simplifies imports and gives you a clear public API for each module. But be careful — barrel
          files can hurt tree-shaking if not used thoughtfully.
        </li>
      </ul>

      <InfoBox type="tip" title="The Litmus Test">
        Before creating an abstraction, ask yourself: "If I delete this abstraction, how many files do
        I need to update?" If the answer is less than three, the abstraction probably isn't worth it yet.
        Also ask: "Can a new team member understand this abstraction in under 5 minutes?" If not,
        simplify it.
      </InfoBox>

      <Subsection id="custom-hooks" icon="🪝" iconBg="#ecfdf5" iconColor="#059669" title="3.1 Custom Hooks Pattern">
        <p>
          Custom hooks are the primary mechanism for extracting and reusing stateful logic in React.
          They let you share behavior between components without changing their structure. A custom hook
          is simply a function that starts with <code>use</code> and calls other hooks internally.
        </p>

        <h4>Rules of Hooks</h4>
        <ol>
          <li>
            <strong>Only call hooks at the top level</strong> — never inside loops, conditions, or nested
            functions. React relies on the order of hook calls to maintain state correctly.
          </li>
          <li>
            <strong>Only call hooks from React functions</strong> — either functional components or other
            custom hooks. Never call hooks from regular JavaScript functions.
          </li>
          <li>
            <strong>Name must start with "use"</strong> — this convention tells React's linter to enforce
            the rules of hooks on your custom function.
          </li>
        </ol>

        <h4>When to Create a Custom Hook</h4>
        <ul>
          <li>You're duplicating the same <code>useState</code> + <code>useEffect</code> pattern across components</li>
          <li>A component has complex logic that obscures its rendering intent</li>
          <li>You want to share behavior (not UI) between components</li>
          <li>You need to encapsulate a subscription, timer, or external data source</li>
        </ul>

        <CodeBlock filename="useDebounce.js" language="javascript">
{`<span class="kw">import</span> { useState, useEffect } <span class="kw">from</span> <span class="str">'react'</span>;

<span class="cm">/**
 * Debounces a value by the specified delay.
 * Useful for search inputs, form validation, and
 * any scenario where you want to wait for the user
 * to stop typing before triggering an action.
 *
 * @param {any} value - The value to debounce
 * @param {number} delay - Delay in milliseconds
 * @returns {any} The debounced value
 */</span>
<span class="kw">export function</span> <span class="fn">useDebounce</span>(value, delay <span class="op">=</span> <span class="num">300</span>) {
  <span class="kw">const</span> [debouncedValue, setDebouncedValue] <span class="op">=</span> <span class="fn">useState</span>(value);

  <span class="fn">useEffect</span>(() <span class="kw">=&gt;</span> {
    <span class="kw">const</span> timer <span class="op">=</span> <span class="fn">setTimeout</span>(() <span class="kw">=&gt;</span> {
      <span class="fn">setDebouncedValue</span>(value);
    }, delay);

    <span class="cm">// Cleanup: cancel timer if value changes</span>
    <span class="cm">// before delay expires</span>
    <span class="kw">return</span> () <span class="kw">=&gt;</span> <span class="fn">clearTimeout</span>(timer);
  }, [value, delay]);

  <span class="kw">return</span> debouncedValue;
}`}
        </CodeBlock>

        <CodeBlock filename="useLocalStorage.js" language="javascript">
{`<span class="kw">import</span> { useState, useEffect } <span class="kw">from</span> <span class="str">'react'</span>;

<span class="cm">/**
 * Syncs state with localStorage. Automatically
 * persists state changes and hydrates on mount.
 * Handles JSON serialization and error recovery.
 *
 * @param {string} key - localStorage key
 * @param {any} initialValue - Default value
 * @returns {[any, Function]} State and setter
 */</span>
<span class="kw">export function</span> <span class="fn">useLocalStorage</span>(key, initialValue) {
  <span class="kw">const</span> [storedValue, setStoredValue] <span class="op">=</span> <span class="fn">useState</span>(() <span class="kw">=&gt;</span> {
    <span class="kw">try</span> {
      <span class="kw">const</span> item <span class="op">=</span> window.localStorage.<span class="fn">getItem</span>(key);
      <span class="kw">return</span> item <span class="op">?</span> JSON.<span class="fn">parse</span>(item) <span class="op">:</span> initialValue;
    } <span class="kw">catch</span> (error) {
      console.<span class="fn">warn</span>(
        <span class="str">\`Error reading localStorage key "\${key}":\`</span>,
        error
      );
      <span class="kw">return</span> initialValue;
    }
  });

  <span class="fn">useEffect</span>(() <span class="kw">=&gt;</span> {
    <span class="kw">try</span> {
      window.localStorage.<span class="fn">setItem</span>(
        key,
        JSON.<span class="fn">stringify</span>(storedValue)
      );
    } <span class="kw">catch</span> (error) {
      console.<span class="fn">warn</span>(
        <span class="str">\`Error setting localStorage key "\${key}":\`</span>,
        error
      );
    }
  }, [key, storedValue]);

  <span class="kw">return</span> [storedValue, setStoredValue];
}`}
        </CodeBlock>

        <CodeBlock filename="Usage: Search with Debounce" language="jsx">
{`<span class="kw">import</span> { useState } <span class="kw">from</span> <span class="str">'react'</span>;
<span class="kw">import</span> { useDebounce } <span class="kw">from</span> <span class="str">'../hooks/useDebounce'</span>;
<span class="kw">import</span> { useApi } <span class="kw">from</span> <span class="str">'../hooks/useApi'</span>;

<span class="kw">export default function</span> <span class="fn">SearchUsers</span>() {
  <span class="kw">const</span> [query, setQuery] <span class="op">=</span> <span class="fn">useState</span>(<span class="str">''</span>);
  <span class="kw">const</span> debouncedQuery <span class="op">=</span> <span class="fn">useDebounce</span>(query, <span class="num">500</span>);

  <span class="kw">const</span> { data: results, loading } <span class="op">=</span> <span class="fn">useApi</span>(
    debouncedQuery
      <span class="op">?</span> <span class="str">\`/api/users?search=\${debouncedQuery}\`</span>
      <span class="op">:</span> <span class="bool">null</span>
  );

  <span class="kw">return</span> (
    <span class="tag">&lt;div&gt;</span>
      <span class="tag">&lt;input</span>
        <span class="attr">type</span><span class="op">=</span><span class="str">"search"</span>
        <span class="attr">value</span><span class="op">=</span>{query}
        <span class="attr">onChange</span><span class="op">=</span>{(e) <span class="kw">=&gt;</span> <span class="fn">setQuery</span>(e.target.value)}
        <span class="attr">placeholder</span><span class="op">=</span><span class="str">"Search users..."</span>
      <span class="tag">/&gt;</span>
      {loading <span class="op">&amp;&amp;</span> <span class="tag">&lt;Spinner /&gt;</span>}
      {results<span class="op">?.</span><span class="fn">map</span>((user) <span class="kw">=&gt;</span> (
        <span class="tag">&lt;UserCard</span> <span class="attr">key</span><span class="op">=</span>{user.id} <span class="attr">user</span><span class="op">=</span>{user} <span class="tag">/&gt;</span>
      ))}
    <span class="tag">&lt;/div&gt;</span>
  );
}`}
        </CodeBlock>
      </Subsection>

      <Subsection id="compound-components" icon="🧩" iconBg="#ecfdf5" iconColor="#059669" title="3.2 Compound Component Pattern">
        <p>
          The Compound Component pattern lets you create components that work together to form a
          complete UI element, while giving the consumer full control over rendering order and
          structure. Think of it like the <code>&lt;select&gt;</code> and <code>&lt;option&gt;</code>
          relationship in HTML — they're separate elements but they share implicit state.
        </p>
        <p>
          This pattern is ideal for components like accordions, tabs, dropdowns, and menus where the
          parent manages shared state and the children consume it via React Context. The consumer
          gets a flexible API without needing to wire up state management manually.
        </p>

        <CodeBlock filename="Accordion.jsx" language="jsx">
{`<span class="kw">import</span> { createContext, useContext, useState } <span class="kw">from</span> <span class="str">'react'</span>;

<span class="cm">// ─── Shared Context ──────────────────────────</span>
<span class="kw">const</span> AccordionContext <span class="op">=</span> <span class="fn">createContext</span>();

<span class="kw">function</span> <span class="fn">useAccordionContext</span>() {
  <span class="kw">const</span> context <span class="op">=</span> <span class="fn">useContext</span>(AccordionContext);
  <span class="kw">if</span> (<span class="op">!</span>context) {
    <span class="kw">throw new</span> <span class="fn">Error</span>(
      <span class="str">'Accordion compound components must be used '</span> <span class="op">+</span>
      <span class="str">'within &lt;Accordion&gt;'</span>
    );
  }
  <span class="kw">return</span> context;
}

<span class="cm">// ─── Parent Component ────────────────────────</span>
<span class="kw">function</span> <span class="fn">Accordion</span>({ children, defaultOpen <span class="op">=</span> <span class="bool">null</span> }) {
  <span class="kw">const</span> [openItem, setOpenItem] <span class="op">=</span> <span class="fn">useState</span>(defaultOpen);

  <span class="kw">const</span> <span class="fn">toggle</span> <span class="op">=</span> (id) <span class="kw">=&gt;</span> {
    <span class="fn">setOpenItem</span>((prev) <span class="kw">=&gt;</span> prev <span class="op">===</span> id <span class="op">?</span> <span class="bool">null</span> <span class="op">:</span> id);
  };

  <span class="kw">return</span> (
    <span class="tag">&lt;AccordionContext.Provider</span>
      <span class="attr">value</span><span class="op">=</span>{{ openItem, toggle }}
    <span class="tag">&gt;</span>
      <span class="tag">&lt;div</span> <span class="attr">className</span><span class="op">=</span><span class="str">"accordion"</span><span class="tag">&gt;</span>
        {children}
      <span class="tag">&lt;/div&gt;</span>
    <span class="tag">&lt;/AccordionContext.Provider&gt;</span>
  );
}

<span class="cm">// ─── Item Component ──────────────────────────</span>
<span class="kw">function</span> <span class="fn">Item</span>({ id, children }) {
  <span class="kw">return</span> (
    <span class="tag">&lt;div</span> <span class="attr">className</span><span class="op">=</span><span class="str">"accordion-item"</span><span class="tag">&gt;</span>
      {children}
    <span class="tag">&lt;/div&gt;</span>
  );
}

<span class="cm">// ─── Trigger Component ───────────────────────</span>
<span class="kw">function</span> <span class="fn">Trigger</span>({ id, children }) {
  <span class="kw">const</span> { openItem, toggle } <span class="op">=</span> <span class="fn">useAccordionContext</span>();
  <span class="kw">const</span> isOpen <span class="op">=</span> openItem <span class="op">===</span> id;

  <span class="kw">return</span> (
    <span class="tag">&lt;button</span>
      <span class="attr">className</span><span class="op">=</span><span class="str">"accordion-trigger"</span>
      <span class="attr">onClick</span><span class="op">=</span>{() <span class="kw">=&gt;</span> <span class="fn">toggle</span>(id)}
      <span class="attr">aria-expanded</span><span class="op">=</span>{isOpen}
    <span class="tag">&gt;</span>
      {children}
      <span class="tag">&lt;span&gt;</span>{isOpen <span class="op">?</span> <span class="str">'−'</span> <span class="op">:</span> <span class="str">'+'</span>}<span class="tag">&lt;/span&gt;</span>
    <span class="tag">&lt;/button&gt;</span>
  );
}

<span class="cm">// ─── Content Component ───────────────────────</span>
<span class="kw">function</span> <span class="fn">Content</span>({ id, children }) {
  <span class="kw">const</span> { openItem } <span class="op">=</span> <span class="fn">useAccordionContext</span>();

  <span class="kw">if</span> (openItem <span class="op">!==</span> id) <span class="kw">return</span> <span class="bool">null</span>;

  <span class="kw">return</span> (
    <span class="tag">&lt;div</span>
      <span class="attr">className</span><span class="op">=</span><span class="str">"accordion-content"</span>
      <span class="attr">role</span><span class="op">=</span><span class="str">"region"</span>
    <span class="tag">&gt;</span>
      {children}
    <span class="tag">&lt;/div&gt;</span>
  );
}

<span class="cm">// ─── Attach sub-components ───────────────────</span>
Accordion.Item <span class="op">=</span> Item;
Accordion.Trigger <span class="op">=</span> Trigger;
Accordion.Content <span class="op">=</span> Content;

<span class="kw">export default</span> Accordion;

<span class="cm">// ─── Usage ───────────────────────────────────</span>
<span class="cm">// &lt;Accordion defaultOpen="faq-1"&gt;</span>
<span class="cm">//   &lt;Accordion.Item id="faq-1"&gt;</span>
<span class="cm">//     &lt;Accordion.Trigger id="faq-1"&gt;</span>
<span class="cm">//       What is React?</span>
<span class="cm">//     &lt;/Accordion.Trigger&gt;</span>
<span class="cm">//     &lt;Accordion.Content id="faq-1"&gt;</span>
<span class="cm">//       React is a JavaScript library...</span>
<span class="cm">//     &lt;/Accordion.Content&gt;</span>
<span class="cm">//   &lt;/Accordion.Item&gt;</span>
<span class="cm">// &lt;/Accordion&gt;</span>`}
        </CodeBlock>
      </Subsection>
      <Subsection id="higher-order-components" icon="🔄" iconBg="#ecfdf5" iconColor="#059669" title="3.3 Higher-Order Components (HOCs)">
        <p>
          Before Hooks were introduced in React 16.8, Higher-Order Components (HOCs) were the primary way to reuse component logic. 
          An HOC is a function that takes a component and returns a new component, wrapping it with additional props or behavior.
        </p>
        <CodeBlock filename="withAuth.jsx" language="jsx">
{`export function withAuth(WrappedComponent) {
  return function ProtectedRoute(props) {
    const isAuthenticated = useAuth();
    if (!isAuthenticated) return <Redirect to="/login" />;
    return <WrappedComponent {...props} />;
  };
}`}
        </CodeBlock>
        <InfoBox type="warning" title="HOCs vs Hooks">
          <p>While HOCs are still supported, Custom Hooks are generally preferred today because they avoid "wrapper hell" (deeply nested component trees) and make it clearer where state is coming from. Use HOCs primarily for routing guards or legacy class components.</p>
        </InfoBox>
      </Subsection>

      <Subsection id="dependency-injection-context" icon="💉" iconBg="#ecfdf5" iconColor="#059669" title="3.4 Dependency Injection via Context">
        <p>
          React Context is often viewed merely as a state management tool, but it's fundamentally a Dependency Injection (DI) system. 
          You can use Context to inject services (like logging, analytics, or API clients) deep into your component tree without prop drilling.
        </p>
        <p>
          This makes your components highly testable, as you can easily wrap them in a mock provider during unit testing.
        </p>
      </Subsection>
    </Section>
  );
};

export default Chapter3;
