import Section from '../components/Content/Section';
import Subsection from '../components/Content/Subsection';
import CodeBlock from '../components/UI/CodeBlock';
import InfoBox from '../components/UI/InfoBox';
import DiagramBox, { FlowRow, FlowBox, FlowArrow } from '../components/UI/DiagramBox';

const Chapter1 = () => {
  return (
    <Section id="chapter-1" number={1} title="Scalable Front-End Components with React.js" theme="blue">
      <p>
        Building scalable front-end applications requires a deep understanding of component architecture.
        React's component model gives you the building blocks, but without a clear strategy, even a
        well-intentioned codebase can become a tangled mess of tightly coupled components, duplicated
        logic, and unpredictable rendering behavior. This chapter teaches you how to think in components
        — from atomic design principles to battle-tested folder structures — so your apps stay
        maintainable as they grow from prototype to production.
      </p>

      <h3>Core Principles of Scalable Components</h3>
      <ul>
        <li>
          <strong>Single Responsibility Principle (SRP):</strong> Each component should do one thing and
          do it well. If a component is handling form validation, API calls, and rendering UI, it's doing
          too much.
        </li>
        <li>
          <strong>Composition over Configuration:</strong> Prefer composing small, focused components
          together rather than building monolithic components with dozens of props. Composition is more
          flexible and easier to test.
        </li>
        <li>
          <strong>Controlled vs Uncontrolled:</strong> Decide early whether a component manages its own
          state (uncontrolled) or receives it via props (controlled). Controlled components are more
          predictable and testable.
        </li>
        <li>
          <strong>Props API Design:</strong> Think of your component's props as its public API. It should
          be intuitive, well-documented, and backwards-compatible. Avoid boolean props when an enum would
          be clearer.
        </li>
        <li>
          <strong>Presentational vs Container:</strong> Separate your UI rendering logic (presentational)
          from your data-fetching and state management logic (container). This makes components reusable
          across different data sources.
        </li>
      </ul>

      <InfoBox type="note" title="Real-World Impact">
        Companies like <strong>Airbnb</strong>, <strong>Shopify</strong>, and <strong>Netflix</strong> have
        open-sourced their component design systems. Airbnb's DLS (Design Language System) enforces
        consistent component patterns across 50+ teams. Shopify's Polaris provides reusable components
        that power thousands of merchant storefronts. These are proof that investing in component
        architecture pays off at scale.
      </InfoBox>

      <Subsection id="atomic-design" icon="🧬" iconBg="#e8f0fe" iconColor="#1a73e8" title="1.1 Atomic Design & Component Architecture">
        <p>
          Atomic Design is a methodology created by Brad Frost that breaks user interfaces down into
          five distinct levels. It provides a mental model for thinking about UI construction in a
          hierarchical, composable way — perfectly aligned with React's component model.
        </p>

        <DiagramBox>
          <FlowRow>
            <FlowBox>Atoms</FlowBox>
            <FlowArrow />
            <FlowBox>Molecules</FlowBox>
            <FlowArrow />
            <FlowBox>Organisms</FlowBox>
            <FlowArrow />
            <FlowBox>Templates</FlowBox>
            <FlowArrow />
            <FlowBox>Pages</FlowBox>
          </FlowRow>
        </DiagramBox>

        <h4>Understanding Each Level</h4>
        <ul>
          <li>
            <strong>Atoms:</strong> The smallest building blocks — buttons, inputs, labels, icons. They
            can't be broken down further without losing meaning. In React, these are your base components
            like <code>&lt;Button&gt;</code>, <code>&lt;Input&gt;</code>, <code>&lt;Avatar&gt;</code>.
          </li>
          <li>
            <strong>Molecules:</strong> Groups of atoms working together as a unit. A search form
            (input + button) or a labeled input (label + input + error text) are molecules. They have a
            single responsibility but are composed of multiple atoms.
          </li>
          <li>
            <strong>Organisms:</strong> Complex UI sections made up of molecules and atoms. A navigation
            bar, a product card grid, or a comment section. Organisms form distinct sections of an interface.
          </li>
          <li>
            <strong>Templates:</strong> Page-level layout structures that define where organisms are placed.
            Templates are concerned with layout and content structure, not actual data.
          </li>
          <li>
            <strong>Pages:</strong> Specific instances of templates filled with real content and data.
            This is where your app connects to APIs and renders actual user-facing screens.
          </li>
        </ul>

        <InfoBox type="tip" title="Co-locate Component Files">
          Keep your component's styles, tests, and stories next to the component file itself. This
          co-location pattern makes it easy to find everything related to a component and simplifies
          refactoring. When you delete a component, you delete the entire folder — no orphaned files.
        </InfoBox>

        <CodeBlock filename="Recommended Folder Structure" language="bash">
{`<span class="cm">src/</span>
├── <span class="fn">components/</span>
│   ├── <span class="fn">atoms/</span>
│   │   ├── <span class="fn">Button/</span>
│   │   │   ├── Button.jsx
│   │   │   ├── Button.module.css
│   │   │   ├── Button.test.jsx
│   │   │   └── index.js
│   │   ├── <span class="fn">Input/</span>
│   │   └── <span class="fn">Avatar/</span>
│   ├── <span class="fn">molecules/</span>
│   │   ├── <span class="fn">SearchBar/</span>
│   │   └── <span class="fn">FormField/</span>
│   ├── <span class="fn">organisms/</span>
│   │   ├── <span class="fn">Navbar/</span>
│   │   └── <span class="fn">ProductGrid/</span>
│   └── <span class="fn">templates/</span>
│       └── <span class="fn">DashboardLayout/</span>
├── <span class="fn">pages/</span>
│   ├── Home.jsx
│   └── Dashboard.jsx
├── <span class="fn">hooks/</span>
├── <span class="fn">utils/</span>
└── <span class="fn">services/</span>`}
        </CodeBlock>
      </Subsection>

      <Subsection id="scalable-component-example" icon="🏗️" iconBg="#e8f0fe" iconColor="#1a73e8" title="1.2 Building a Scalable Component: Full Example">
        <p>
          Let's build a production-quality Button component that demonstrates all the principles we've
          discussed. This button supports multiple variants, sizes, loading states, and icon placement.
        </p>

        <h4>Key Design Decisions</h4>
        <ul>
          <li>
            <strong>Variant prop (enum):</strong> Instead of boolean props like <code>isPrimary</code>,
            <code>isSecondary</code>, we use a single <code>variant</code> prop. This prevents invalid
            states (what happens if both are true?) and makes the API cleaner.
          </li>
          <li>
            <strong>Polymorphic rendering:</strong> The <code>as</code> prop lets the button render as a
            different element (like an anchor tag) while keeping the same styles. This is essential for
            accessibility.
          </li>
          <li>
            <strong>Forwarded refs:</strong> Using <code>React.forwardRef</code> ensures parent components
            can access the underlying DOM node for focus management, measurements, or animations.
          </li>
          <li>
            <strong>Rest props spreading:</strong> The <code>...rest</code> pattern passes through any
            additional HTML attributes (like <code>aria-label</code>, <code>data-testid</code>) without
            explicitly defining them.
          </li>
        </ul>

        <CodeBlock filename="Button.jsx" language="jsx">
{`<span class="kw">import</span> React <span class="kw">from</span> <span class="str">'react'</span>;
<span class="kw">import</span> styles <span class="kw">from</span> <span class="str">'./Button.module.css'</span>;

<span class="kw">const</span> <span class="fn">Button</span> <span class="op">=</span> React.<span class="fn">forwardRef</span>(({
  children,
  variant <span class="op">=</span> <span class="str">'primary'</span>,
  size <span class="op">=</span> <span class="str">'medium'</span>,
  isLoading <span class="op">=</span> <span class="bool">false</span>,
  disabled <span class="op">=</span> <span class="bool">false</span>,
  leftIcon,
  rightIcon,
  as: Component <span class="op">=</span> <span class="str">'button'</span>,
  className,
  ...rest
}, ref) <span class="kw">=&gt;</span> {
  <span class="kw">const</span> classNames <span class="op">=</span> [
    styles.button,
    styles[variant],
    styles[size],
    isLoading <span class="op">&amp;&amp;</span> styles.loading,
    className
  ].<span class="fn">filter</span>(<span class="fn">Boolean</span>).<span class="fn">join</span>(<span class="str">' '</span>);

  <span class="kw">return</span> (
    <span class="tag">&lt;Component</span>
      <span class="attr">ref</span><span class="op">=</span>{ref}
      <span class="attr">className</span><span class="op">=</span>{classNames}
      <span class="attr">disabled</span><span class="op">=</span>{disabled <span class="op">||</span> isLoading}
      {...rest}
    <span class="tag">&gt;</span>
      {isLoading <span class="op">&amp;&amp;</span> <span class="tag">&lt;span</span> <span class="attr">className</span><span class="op">=</span>{styles.spinner} <span class="tag">/&gt;</span>}
      {leftIcon <span class="op">&amp;&amp;</span> <span class="tag">&lt;span</span> <span class="attr">className</span><span class="op">=</span>{styles.icon}<span class="tag">&gt;</span>{leftIcon}<span class="tag">&lt;/span&gt;</span>}
      <span class="tag">&lt;span&gt;</span>{children}<span class="tag">&lt;/span&gt;</span>
      {rightIcon <span class="op">&amp;&amp;</span> <span class="tag">&lt;span</span> <span class="attr">className</span><span class="op">=</span>{styles.icon}<span class="tag">&gt;</span>{rightIcon}<span class="tag">&lt;/span&gt;</span>}
    <span class="tag">&lt;/Component&gt;</span>
  );
});

Button.displayName <span class="op">=</span> <span class="str">'Button'</span>;

<span class="kw">export default</span> Button;`}
        </CodeBlock>

        <CodeBlock filename="Button.module.css" language="css">
{`<span class="fn">.button</span> {
  <span class="attr">display</span>: <span class="str">inline-flex</span>;
  <span class="attr">align-items</span>: <span class="str">center</span>;
  <span class="attr">justify-content</span>: <span class="str">center</span>;
  <span class="attr">gap</span>: <span class="num">0.5rem</span>;
  <span class="attr">border</span>: <span class="str">none</span>;
  <span class="attr">border-radius</span>: <span class="num">8px</span>;
  <span class="attr">font-weight</span>: <span class="num">600</span>;
  <span class="attr">cursor</span>: <span class="str">pointer</span>;
  <span class="attr">transition</span>: <span class="str">all 0.2s ease</span>;
}

<span class="fn">.primary</span>   { <span class="attr">background</span>: <span class="str">#2563eb</span>; <span class="attr">color</span>: <span class="str">white</span>; }
<span class="fn">.secondary</span> { <span class="attr">background</span>: <span class="str">#e2e8f0</span>; <span class="attr">color</span>: <span class="str">#1e293b</span>; }
<span class="fn">.danger</span>    { <span class="attr">background</span>: <span class="str">#dc2626</span>; <span class="attr">color</span>: <span class="str">white</span>; }
<span class="fn">.ghost</span>     { <span class="attr">background</span>: <span class="str">transparent</span>; <span class="attr">color</span>: <span class="str">#2563eb</span>; }

<span class="fn">.small</span>  { <span class="attr">padding</span>: <span class="num">0.375rem 0.75rem</span>; <span class="attr">font-size</span>: <span class="num">0.875rem</span>; }
<span class="fn">.medium</span> { <span class="attr">padding</span>: <span class="num">0.5rem 1rem</span>;    <span class="attr">font-size</span>: <span class="num">1rem</span>; }
<span class="fn">.large</span>  { <span class="attr">padding</span>: <span class="num">0.75rem 1.5rem</span>; <span class="attr">font-size</span>: <span class="num">1.125rem</span>; }

<span class="fn">.loading</span> { <span class="attr">opacity</span>: <span class="num">0.7</span>; <span class="attr">pointer-events</span>: <span class="str">none</span>; }

<span class="fn">.spinner</span> {
  <span class="attr">width</span>: <span class="num">1em</span>;
  <span class="attr">height</span>: <span class="num">1em</span>;
  <span class="attr">border</span>: <span class="str">2px solid currentColor</span>;
  <span class="attr">border-right-color</span>: <span class="str">transparent</span>;
  <span class="attr">border-radius</span>: <span class="num">50%</span>;
  <span class="attr">animation</span>: <span class="fn">spin</span> <span class="num">0.6s</span> <span class="str">linear infinite</span>;
}

<span class="fn">@keyframes</span> <span class="fn">spin</span> {
  <span class="kw">to</span> { <span class="attr">transform</span>: <span class="fn">rotate</span>(<span class="num">360deg</span>); }
}`}
        </CodeBlock>

        <CodeBlock filename="Usage Examples" language="jsx">
{`<span class="cm">// Primary button</span>
<span class="tag">&lt;Button</span> <span class="attr">variant</span><span class="op">=</span><span class="str">"primary"</span><span class="tag">&gt;</span>Save Changes<span class="tag">&lt;/Button&gt;</span>

<span class="cm">// Loading state</span>
<span class="tag">&lt;Button</span> <span class="attr">isLoading</span><span class="tag">&gt;</span>Submitting...<span class="tag">&lt;/Button&gt;</span>

<span class="cm">// With icon</span>
<span class="tag">&lt;Button</span> <span class="attr">leftIcon</span><span class="op">=</span>{<span class="tag">&lt;PlusIcon /&gt;</span>} <span class="attr">variant</span><span class="op">=</span><span class="str">"secondary"</span><span class="tag">&gt;</span>Add Item<span class="tag">&lt;/Button&gt;</span>

<span class="cm">// As a link</span>
<span class="tag">&lt;Button</span> <span class="attr">as</span><span class="op">=</span><span class="str">"a"</span> <span class="attr">href</span><span class="op">=</span><span class="str">"/dashboard"</span> <span class="attr">variant</span><span class="op">=</span><span class="str">"ghost"</span><span class="tag">&gt;</span>Go to Dashboard<span class="tag">&lt;/Button&gt;</span>

<span class="cm">// Danger with confirmation</span>
<span class="tag">&lt;Button</span> <span class="attr">variant</span><span class="op">=</span><span class="str">"danger"</span> <span class="attr">size</span><span class="op">=</span><span class="str">"large"</span> <span class="attr">onClick</span><span class="op">=</span>{handleDelete}<span class="tag">&gt;</span>
  Delete Account
<span class="tag">&lt;/Button&gt;</span>`}
        </CodeBlock>

        <InfoBox type="tip" title="Barrel Exports">
          Create an <code>index.js</code> file in each component folder that re-exports the component.
          This lets consumers import with cleaner paths: <code>import Button from '@/components/atoms/Button'</code>
          instead of <code>import Button from '@/components/atoms/Button/Button'</code>. It also gives
          you a single place to control what's publicly exposed from each module.
        </InfoBox>
      </Subsection>
      <Subsection id="react-server-components" icon="☁️" iconBg="#e8f0fe" iconColor="#1a73e8" title="1.3 React Server Components (RSC)">
        <p>
          React Server Components (RSC) represent a paradigm shift in how we build React applications. 
          By rendering components exclusively on the server, RSCs eliminate the need to send heavy 
          dependencies and bundle sizes to the client.
        </p>
        <InfoBox type="note" title="Client vs Server Components">
          <p>By default in modern frameworks like Next.js App Router, all components are Server Components. You only add the <code>"use client"</code> directive when you need interactivity (like <code>onClick</code>) or hooks (like <code>useState</code>).</p>
        </InfoBox>
      </Subsection>

      <Subsection id="advanced-prop-patterns" icon="🎛️" iconBg="#e8f0fe" iconColor="#1a73e8" title="1.4 Advanced Prop Patterns">
        <p>
          As components scale, passing basic primitive props isn't always enough. Two powerful patterns emerge for flexible composition:
        </p>
        <ul>
          <li><strong>Render Props:</strong> Passing a function as a prop to share state logic without higher-order components.</li>
          <li><strong>Polymorphism:</strong> Using an <code>as</code> prop (like we did in the Button example) to dynamically change the underlying HTML element while maintaining styles.</li>
        </ul>
      </Subsection>
    </Section>
  );
};

export default Chapter1;
