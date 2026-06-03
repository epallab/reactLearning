import Section from '../components/Content/Section';
import Subsection from '../components/Content/Subsection';
import CodeBlock from '../components/UI/CodeBlock';
import InfoBox from '../components/UI/InfoBox';
import DataTable from '../components/UI/DataTable';
import Badge from '../components/UI/Badge';

export default function Chapter7() {
  return (
    <Section
      id="debugging-troubleshooting"
      number="07"
      title="Debugging, Troubleshooting & Upgrading"
      theme="red"
    >
      <p className="section-intro">
        Every React developer spends a significant portion of their time debugging.
        The difference between a junior and senior developer isn't the number of bugs
        they encounter—it's how systematically they diagnose and resolve them. This
        chapter equips you with the mindset, tools, and patterns to squash bugs
        efficiently and build resilient applications.
      </p>

      <h3>The Debugging Mindset</h3>
      <ol className="styled-list">
        <li>
          <strong>Reproduce</strong> — Before fixing anything, create a reliable reproduction.
          Can you trigger the bug consistently? Note the exact steps, browser, and state
          that cause it. A bug you can't reproduce is a bug you can't verify as fixed.
        </li>
        <li>
          <strong>Isolate</strong> — Narrow the problem to the smallest possible scope.
          Comment out components, simplify state, or create a minimal reproduction in a
          fresh project. The goal is to eliminate variables.
        </li>
        <li>
          <strong>Identify</strong> — Read the error messages carefully. Check the component
          tree in React DevTools. Add strategic <code>console.log</code> statements or
          breakpoints. Form a hypothesis and test it.
        </li>
        <li>
          <strong>Fix &amp; Verify</strong> — Apply the smallest possible fix. Run the full
          test suite. Verify the fix in the original reproduction scenario. Write a
          regression test so this bug never returns.
        </li>
      </ol>

      <h3>Common React Bugs</h3>
      <div className="kv-grid">
        <div className="kv-item">
          <span className="kv-label">Infinite Re-renders</span>
          <span className="kv-value">
            Caused by calling <code>setState</code> inside a render or in a <code>useEffect</code>
            without proper dependencies. The component updates, triggers the effect, which
            updates state, triggering another render—an infinite loop.
          </span>
        </div>
        <div className="kv-item">
          <span className="kv-label">Stale Closures</span>
          <span className="kv-value">
            Event handlers or effects that capture an old value of state or props because
            the dependency array is missing entries. The function "closes over" a stale
            snapshot instead of the current value.
          </span>
        </div>
        <div className="kv-item">
          <span className="kv-label">Memory Leaks</span>
          <span className="kv-value">
            Setting state on an unmounted component—typically from an uncleared subscription,
            timer, or async fetch that resolves after navigation. Always return cleanup
            functions from <code>useEffect</code>.
          </span>
        </div>
      </div>

      {/* ── Subsection 7.1 ── */}
      <Subsection
        id="react-devtools-profiler"
        icon="🔍"
        iconBg="rgba(239,68,68,0.15)"
        iconColor="#ef4444"
        title="7.1 — React DevTools & Profiler"
      >
        <h4>Using the Components Tab</h4>
        <ul className="styled-list">
          <li>
            Inspect the component tree to see the hierarchy, current props, state, and
            hooks for any component. Click a component to view its details in the right panel.
          </li>
          <li>
            Use the search bar to quickly find components by name. Filter by "rendered by"
            to trace which parent is rendering a child component.
          </li>
          <li>
            Right-click a component to "Log this component" to the console, "Show source,"
            or "Store as global variable" for live debugging.
          </li>
        </ul>

        <h4>Using the Profiler Tab</h4>
        <p>
          The Profiler records rendering performance. Click "Record," interact with your
          app, then stop. You'll see a flame graph of every component that rendered, how
          long each took, and <em>why</em> it rendered (prop change, state change, or parent
          re-render). Look for components that render frequently with the same props—those
          are candidates for <code>React.memo()</code>.
        </p>

        <DataTable headers={['Tool', 'Purpose', 'When to Use']}>
          <tr>
            <td><Badge variant="blue">React DevTools Components</Badge></td>
            <td>Inspect component tree, props, state, hooks</td>
            <td>Understanding component hierarchy and data flow</td>
          </tr>
          <tr>
            <td><Badge variant="blue">React DevTools Profiler</Badge></td>
            <td>Record and analyze rendering performance</td>
            <td>Identifying unnecessary re-renders and slow components</td>
          </tr>
          <tr>
            <td><Badge variant="purple">Chrome DevTools Network</Badge></td>
            <td>Monitor API requests, response times, payloads</td>
            <td>Debugging API integration, checking request headers</td>
          </tr>
          <tr>
            <td><Badge variant="purple">Chrome DevTools Performance</Badge></td>
            <td>CPU profiling, layout thrashing, long tasks</td>
            <td>Diagnosing jank, slow interactions, large layout shifts</td>
          </tr>
          <tr>
            <td><Badge variant="green">console.table()</Badge></td>
            <td>Display arrays/objects as formatted tables</td>
            <td>Quick inspection of data structures during development</td>
          </tr>
          <tr>
            <td><Badge variant="orange">React.StrictMode</Badge></td>
            <td>Double-invokes effects and renders in development</td>
            <td>Catching side effects, impure renders, deprecated APIs</td>
          </tr>
        </DataTable>

        <CodeBlock filename="useWhyDidYouRender.js" language="JavaScript">
{`<span class="kw">import</span> { <span class="fn">useRef</span>, <span class="fn">useEffect</span> } <span class="kw">from</span> <span class="str">'react'</span>;

<span class="cm">/**
 * Debug hook: logs which props/state changed between renders.
 * Usage: useWhyDidYouRender('MyComponent', { count, user, items });
 */</span>
<span class="kw">export default function</span> <span class="fn">useWhyDidYouRender</span>(<span class="attr">componentName</span>, <span class="attr">props</span>) {
  <span class="kw">const</span> <span class="attr">prevProps</span> = <span class="fn">useRef</span>(<span class="attr">props</span>);

  <span class="fn">useEffect</span>(() <span class="op">=&gt;</span> {
    <span class="kw">if</span> (<span class="attr">prevProps</span>.<span class="attr">current</span>) {
      <span class="kw">const</span> <span class="attr">allKeys</span> = <span class="fn">Object</span>.<span class="fn">keys</span>({
        ...<span class="attr">prevProps</span>.<span class="attr">current</span>,
        ...<span class="attr">props</span>,
      });

      <span class="kw">const</span> <span class="attr">changes</span> = {};
      <span class="attr">allKeys</span>.<span class="fn">forEach</span>((<span class="attr">key</span>) <span class="op">=&gt;</span> {
        <span class="kw">if</span> (<span class="attr">prevProps</span>.<span class="attr">current</span>[<span class="attr">key</span>] <span class="op">!==</span> <span class="attr">props</span>[<span class="attr">key</span>]) {
          <span class="attr">changes</span>[<span class="attr">key</span>] = {
            <span class="attr">from</span>: <span class="attr">prevProps</span>.<span class="attr">current</span>[<span class="attr">key</span>],
            <span class="attr">to</span>: <span class="attr">props</span>[<span class="attr">key</span>],
          };
        }
      });

      <span class="kw">if</span> (<span class="fn">Object</span>.<span class="fn">keys</span>(<span class="attr">changes</span>).<span class="attr">length</span>) {
        <span class="fn">console</span>.<span class="fn">group</span>(
          <span class="str">\`[WhyRender] \${</span><span class="attr">componentName</span><span class="str">}\`</span>
        );
        <span class="fn">console</span>.<span class="fn">table</span>(<span class="attr">changes</span>);
        <span class="fn">console</span>.<span class="fn">groupEnd</span>();
      }
    }
    <span class="attr">prevProps</span>.<span class="attr">current</span> = <span class="attr">props</span>;
  });
}`}
        </CodeBlock>
      </Subsection>

      {/* ── Subsection 7.2 ── */}
      <Subsection
        id="error-boundaries-logging"
        icon="🛡️"
        iconBg="rgba(239,68,68,0.15)"
        iconColor="#ef4444"
        title="7.2 — Error Boundaries & Logging"
      >
        <p>
          Error boundaries are React class components that catch JavaScript errors anywhere
          in their child component tree, log those errors, and display a fallback UI instead
          of crashing the entire application. They act as a <code>try/catch</code> for your
          component tree—without them, a single thrown error unmounts everything.
        </p>

        <h4>Strategic Placement</h4>
        <ul className="styled-list">
          <li>
            <strong>Route Level</strong> — Wrap each route in an error boundary so a crash
            in one page doesn't nuke the sidebar, navigation, or other routes. Users can
            navigate away from the broken page.
          </li>
          <li>
            <strong>Widget Level</strong> — Wrap individual widgets (charts, feeds, third-party
            embeds) so a failure in one widget shows a localized error message while the rest
            of the page continues to function.
          </li>
        </ul>

        <CodeBlock filename="ErrorBoundary.jsx" language="JSX">
{`<span class="kw">import</span> { <span class="type">Component</span> } <span class="kw">from</span> <span class="str">'react'</span>;

<span class="kw">export default class</span> <span class="type">ErrorBoundary</span> <span class="kw">extends</span> <span class="type">Component</span> {
  <span class="fn">constructor</span>(<span class="attr">props</span>) {
    <span class="kw">super</span>(<span class="attr">props</span>);
    <span class="kw">this</span>.<span class="attr">state</span> = {
      <span class="attr">hasError</span>: <span class="bool">false</span>,
      <span class="attr">error</span>: <span class="bool">null</span>,
      <span class="attr">errorInfo</span>: <span class="bool">null</span>,
    };
  }

  <span class="kw">static</span> <span class="fn">getDerivedStateFromError</span>(<span class="attr">error</span>) {
    <span class="cm">// Update state so the next render shows fallback UI</span>
    <span class="kw">return</span> { <span class="attr">hasError</span>: <span class="bool">true</span>, <span class="attr">error</span> };
  }

  <span class="fn">componentDidCatch</span>(<span class="attr">error</span>, <span class="attr">errorInfo</span>) {
    <span class="cm">// Log to an external error reporting service</span>
    <span class="fn">console</span>.<span class="fn">error</span>(<span class="str">'ErrorBoundary caught:'</span>, <span class="attr">error</span>, <span class="attr">errorInfo</span>);
    <span class="kw">this</span>.<span class="fn">setState</span>({ <span class="attr">errorInfo</span> });

    <span class="cm">// Example: send to Sentry, LogRocket, etc.</span>
    <span class="cm">// logErrorToService(error, errorInfo);</span>
  }

  <span class="fn">handleReset</span> = () <span class="op">=&gt;</span> {
    <span class="kw">this</span>.<span class="fn">setState</span>({
      <span class="attr">hasError</span>: <span class="bool">false</span>,
      <span class="attr">error</span>: <span class="bool">null</span>,
      <span class="attr">errorInfo</span>: <span class="bool">null</span>,
    });
  };

  <span class="fn">render</span>() {
    <span class="kw">if</span> (<span class="kw">this</span>.<span class="attr">state</span>.<span class="attr">hasError</span>) {
      <span class="kw">return</span> (
        <span class="tag">&lt;div</span> <span class="attr">className</span>=<span class="str">"error-fallback"</span><span class="tag">&gt;</span>
          <span class="tag">&lt;h2&gt;</span>Something went wrong<span class="tag">&lt;/h2&gt;</span>
          <span class="tag">&lt;pre&gt;</span>{<span class="kw">this</span>.<span class="attr">state</span>.<span class="attr">error</span>?.<span class="fn">toString</span>()}<span class="tag">&lt;/pre&gt;</span>
          <span class="tag">&lt;button</span> <span class="attr">onClick</span>={<span class="kw">this</span>.<span class="attr">handleReset</span>}<span class="tag">&gt;</span>
            Try Again
          <span class="tag">&lt;/button&gt;</span>
        <span class="tag">&lt;/div&gt;</span>
      );
    }

    <span class="kw">return</span> <span class="kw">this</span>.<span class="attr">props</span>.<span class="attr">children</span>;
  }
}`}
        </CodeBlock>

        <InfoBox type="important" title="What Error Boundaries Don't Catch">
          <p>Error boundaries do <strong>not</strong> catch errors in:</p>
          <ul>
            <li>Event handlers — use regular <code>try/catch</code> inside handlers</li>
            <li>Asynchronous code — <code>setTimeout</code>, <code>requestAnimationFrame</code>, promises</li>
            <li>Server-side rendering (SSR)</li>
            <li>Errors thrown in the error boundary component itself</li>
          </ul>
          <p>
            For async errors, pair error boundaries with global
            <code> window.addEventListener('unhandledrejection', ...)</code> handlers
            and an error logging service.
          </p>
        </InfoBox>
      </Subsection>
      <Subsection id="upgrading-react" icon="⬆️" iconBg="rgba(239,68,68,0.15)" iconColor="#ef4444" title="7.3 — Upgrading React Versions">
        <p>
          React upgrades are typically smooth, but jumping across major versions (e.g., 17 to 18, or 18 to 19) requires planning. The React team provides codemods to automate many syntax changes.
        </p>
        <ul className="styled-list">
          <li><strong>Read the Changelog:</strong> Pay special attention to breaking changes and deprecation warnings in the console.</li>
          <li><strong>Use Strict Mode:</strong> Wrap your app in <code>&lt;React.StrictMode&gt;</code> in development. It surfaces legacy lifecycle methods and unsafe side effects.</li>
          <li><strong>Update Dependencies:</strong> Often, third-party libraries break before React itself does. Check compatibility of UI libraries, state managers, and routers.</li>
        </ul>
      </Subsection>

      <Subsection id="end-to-end-testing" icon="🧪" iconBg="rgba(239,68,68,0.15)" iconColor="#ef4444" title="7.4 — End-to-End Testing (Cypress/Playwright)">
        <p>
          Unit tests check components in isolation, but bugs often hide in the integration between components. End-to-End (E2E) tests spin up a real browser, click buttons, and verify the UI behaves correctly from a user's perspective.
        </p>
        <CodeBlock filename="login.spec.js" language="JavaScript">
{`// Cypress Example
describe('Login Flow', () => {
  it('should successfully log in and redirect to dashboard', () => {
    cy.visit('/login');
    
    cy.get('input[name="email"]').type('user@example.com');
    cy.get('input[name="password"]').type('password123');
    cy.get('button[type="submit"]').click();
    
    // Assert redirect and success state
    cy.url().should('include', '/dashboard');
    cy.contains('Welcome back').should('be.visible');
  });
});`}
        </CodeBlock>
      </Subsection>
    </Section>
  );
}
