import Section from '../components/Content/Section';
import Subsection from '../components/Content/Subsection';
import CodeBlock from '../components/UI/CodeBlock';
import InfoBox from '../components/UI/InfoBox';
import DataTable from '../components/UI/DataTable';
import Badge from '../components/UI/Badge';

export default function Chapter8() {
  return (
    <Section
      id="skills-expertise-deep-dive"
      number="08"
      title="Skills & Expertise Deep Dive"
      theme="green"
    >
      <p className="section-intro">
        This chapter takes a comprehensive look at the core skills every React developer
        needs to master. From JavaScript fundamentals to advanced state management
        patterns to build tooling—these are the competencies that define your
        effectiveness on a professional React team.
      </p>

      <h3>T-Shaped Developer</h3>
      <p>
        The most valuable developers are <strong>T-shaped</strong>: they have broad
        knowledge across the entire stack (the horizontal bar) and deep expertise in
        one or two areas (the vertical bar). For a React developer, the horizontal bar
        spans HTML, CSS, JavaScript, testing, accessibility, networking, and DevOps.
        The vertical bar is your specialization—maybe it's state management architecture,
        performance optimization, or design system engineering. Invest in both dimensions.
      </p>

      {/* ── Subsection 8.1 ── */}
      <Subsection
        id="javascript-es6-mastery"
        icon="⚡"
        iconBg="rgba(34,197,94,0.15)"
        iconColor="#22c55e"
        title="8.1 — JavaScript ES6+ Mastery"
      >
        <p>
          React is fundamentally JavaScript. Every JSX expression compiles to a
          <code> React.createElement()</code> call. Every hook is a function. Every
          component is a function (or class). If your JavaScript foundations are weak,
          React will feel like magic. When they're strong, React feels like a natural
          extension of the language.
        </p>

        <h4>Crucial JavaScript Concepts for React</h4>
        <div className="kv-grid">
          <div className="kv-item">
            <span className="kv-label">Immutability</span>
            <span className="kv-value">
              React relies on reference equality to detect changes. Mutating objects or
              arrays in place bypasses React's change detection. Always create new references
              with spread syntax, <code>.map()</code>, or <code>.filter()</code>.
            </span>
          </div>
          <div className="kv-item">
            <span className="kv-label">Closures</span>
            <span className="kv-value">
              Every event handler and <code>useEffect</code> callback forms a closure over
              its surrounding scope. Understanding closures is essential for avoiding stale
              state bugs and for writing correct dependency arrays.
            </span>
          </div>
          <div className="kv-item">
            <span className="kv-label">Truthiness</span>
            <span className="kv-value">
              JSX conditional rendering relies on JavaScript's truthy/falsy rules.
              <code>{' {count && <List />}'}</code> renders <code>0</code> when count is zero
              because <code>0</code> is falsy but still a renderable value. Use explicit
              comparisons: <code>{'{count > 0 && <List />}'}</code>.
            </span>
          </div>
        </div>

        <CodeBlock filename="essential-es6-patterns.js" language="JavaScript">
{`<span class="cm">// ── 1. Destructuring ──</span>
<span class="kw">const</span> { <span class="attr">name</span>, <span class="attr">age</span>, <span class="attr">role</span> = <span class="str">'developer'</span> } = <span class="attr">user</span>;
<span class="kw">const</span> [<span class="attr">first</span>, <span class="attr">second</span>, ...<span class="attr">rest</span>] = <span class="attr">items</span>;
<span class="kw">const</span> { <span class="attr">data</span>: <span class="attr">users</span>, <span class="attr">error</span> } = <span class="fn">useFetch</span>(<span class="str">'/api/users'</span>);

<span class="cm">// ── 2. Spread &amp; Rest ──</span>
<span class="kw">const</span> <span class="attr">updated</span> = { ...<span class="attr">user</span>, <span class="attr">age</span>: <span class="num">30</span> };        <span class="cm">// shallow clone + override</span>
<span class="kw">const</span> <span class="attr">newList</span> = [...<span class="attr">items</span>, <span class="attr">newItem</span>];              <span class="cm">// append to array</span>
<span class="kw">const</span> <span class="attr">without</span> = <span class="attr">items</span>.<span class="fn">filter</span>(<span class="attr">i</span> <span class="op">=&gt;</span> <span class="attr">i</span>.<span class="attr">id</span> <span class="op">!==</span> <span class="attr">id</span>);  <span class="cm">// immutable delete</span>

<span class="kw">function</span> <span class="fn">Button</span>({ <span class="attr">children</span>, ...<span class="attr">props</span> }) {
  <span class="kw">return</span> <span class="tag">&lt;button</span> {...<span class="attr">props</span>}<span class="tag">&gt;</span>{<span class="attr">children</span>}<span class="tag">&lt;/button&gt;</span>;
}

<span class="cm">// ── 3. Template Literals ──</span>
<span class="kw">const</span> <span class="attr">greeting</span> = <span class="str">\`Hello, \${name}! You are \${age} years old.\`</span>;
<span class="kw">const</span> <span class="attr">className</span> = <span class="str">\`btn \${isActive ? 'btn-active' : ''}\`</span>;

<span class="cm">// ── 4. Optional Chaining &amp; Nullish Coalescing ──</span>
<span class="kw">const</span> <span class="attr">city</span> = <span class="attr">user</span>?.<span class="attr">address</span>?.<span class="attr">city</span> <span class="op">??</span> <span class="str">'Unknown'</span>;
<span class="kw">const</span> <span class="attr">handler</span> = <span class="attr">config</span>?.<span class="fn">onClick</span> <span class="op">??</span> <span class="attr">noop</span>;

<span class="cm">// ── 5. Array Methods (The React Essentials) ──</span>
<span class="kw">const</span> <span class="attr">names</span>    = <span class="attr">users</span>.<span class="fn">map</span>(<span class="attr">u</span> <span class="op">=&gt;</span> <span class="attr">u</span>.<span class="attr">name</span>);
<span class="kw">const</span> <span class="attr">adults</span>   = <span class="attr">users</span>.<span class="fn">filter</span>(<span class="attr">u</span> <span class="op">=&gt;</span> <span class="attr">u</span>.<span class="attr">age</span> <span class="op">&gt;=</span> <span class="num">18</span>);
<span class="kw">const</span> <span class="attr">totalAge</span> = <span class="attr">users</span>.<span class="fn">reduce</span>((<span class="attr">sum</span>, <span class="attr">u</span>) <span class="op">=&gt;</span> <span class="attr">sum</span> + <span class="attr">u</span>.<span class="attr">age</span>, <span class="num">0</span>);
<span class="kw">const</span> <span class="attr">found</span>    = <span class="attr">users</span>.<span class="fn">find</span>(<span class="attr">u</span> <span class="op">=&gt;</span> <span class="attr">u</span>.<span class="attr">id</span> <span class="op">===</span> <span class="attr">targetId</span>);
<span class="kw">const</span> <span class="attr">hasAdmin</span> = <span class="attr">users</span>.<span class="fn">some</span>(<span class="attr">u</span> <span class="op">=&gt;</span> <span class="attr">u</span>.<span class="attr">role</span> <span class="op">===</span> <span class="str">'admin'</span>);

<span class="cm">// ── 6. Promises &amp; Async/Await ──</span>
<span class="kw">async function</span> <span class="fn">fetchUser</span>(<span class="attr">id</span>) {
  <span class="kw">try</span> {
    <span class="kw">const</span> <span class="attr">res</span> = <span class="kw">await</span> <span class="fn">fetch</span>(<span class="str">\`/api/users/\${id}\`</span>);
    <span class="kw">if</span> (<span class="op">!</span><span class="attr">res</span>.<span class="attr">ok</span>) <span class="kw">throw new</span> <span class="type">Error</span>(<span class="str">\`HTTP \${res.status}\`</span>);
    <span class="kw">return await</span> <span class="attr">res</span>.<span class="fn">json</span>();
  } <span class="kw">catch</span> (<span class="attr">err</span>) {
    <span class="fn">console</span>.<span class="fn">error</span>(<span class="str">'Failed to fetch user:'</span>, <span class="attr">err</span>);
    <span class="kw">throw</span> <span class="attr">err</span>;
  }
}

<span class="cm">// ── 7. Modules ──</span>
<span class="kw">export</span> <span class="kw">default</span> <span class="kw">function</span> <span class="fn">MyComponent</span>() { <span class="cm">/* ... */</span> }
<span class="kw">export</span> <span class="kw">const</span> <span class="attr">API_URL</span> = <span class="str">'/api/v2'</span>;
<span class="kw">import</span> <span class="fn">MyComponent</span>, { <span class="attr">API_URL</span> } <span class="kw">from</span> <span class="str">'./MyComponent'</span>;`}
        </CodeBlock>
      </Subsection>

      {/* ── Subsection 8.2 ── */}
      <Subsection
        id="react-hooks-state-management"
        icon="🪝"
        iconBg="rgba(34,197,94,0.15)"
        iconColor="#22c55e"
        title="8.2 — React Hooks & State Management"
      >
        <p>
          Hooks revolutionized React by allowing function components to manage state,
          side effects, context, and refs—capabilities previously reserved for class
          components. They promote composition over inheritance and make logic reusable
          through custom hooks.
        </p>

        <h4>Mental Model</h4>
        <p>
          Think of a component as a function that runs on every render. Hooks are
          "memory slots" attached to that component instance. <code>useState</code>
          gives you a slot for a value that persists across renders.
          <code> useEffect</code> gives you a slot for a side effect that runs after
          the DOM updates. <code>useRef</code> gives you a mutable box that doesn't
          trigger re-renders. The order you call hooks determines which slot you're
          accessing—that's why hooks must always be called in the same order (no
          conditionals, no loops).
        </p>

        <DataTable headers={['Hook', 'Purpose', 'Common Use Case']}>
          <tr>
            <td><Badge variant="blue">useState</Badge></td>
            <td>Manage simple local state</td>
            <td>Form inputs, toggles, counters</td>
          </tr>
          <tr>
            <td><Badge variant="blue">useEffect</Badge></td>
            <td>Side effects after render</td>
            <td>API calls, subscriptions, DOM manipulation</td>
          </tr>
          <tr>
            <td><Badge variant="purple">useContext</Badge></td>
            <td>Access context values</td>
            <td>Theme, auth, locale without prop drilling</td>
          </tr>
          <tr>
            <td><Badge variant="orange">useReducer</Badge></td>
            <td>Complex state with actions</td>
            <td>Forms with many fields, state machines</td>
          </tr>
          <tr>
            <td><Badge variant="green">useRef</Badge></td>
            <td>Mutable ref that persists across renders</td>
            <td>DOM refs, previous values, timers</td>
          </tr>
          <tr>
            <td><Badge variant="green">useId</Badge></td>
            <td>Generate unique IDs for accessibility</td>
            <td>Linking labels to inputs, ARIA attributes</td>
          </tr>
        </DataTable>

        <CodeBlock filename="useFormReducer.js" language="JavaScript">
{`<span class="kw">import</span> { <span class="fn">useReducer</span>, <span class="fn">useCallback</span> } <span class="kw">from</span> <span class="str">'react'</span>;

<span class="cm">// Action types</span>
<span class="kw">const</span> <span class="attr">ACTIONS</span> = {
  <span class="attr">SET_FIELD</span>:    <span class="str">'SET_FIELD'</span>,
  <span class="attr">SET_ERROR</span>:    <span class="str">'SET_ERROR'</span>,
  <span class="attr">CLEAR_ERRORS</span>: <span class="str">'CLEAR_ERRORS'</span>,
  <span class="attr">RESET</span>:        <span class="str">'RESET'</span>,
  <span class="attr">SET_LOADING</span>:  <span class="str">'SET_LOADING'</span>,
};

<span class="kw">function</span> <span class="fn">formReducer</span>(<span class="attr">state</span>, <span class="attr">action</span>) {
  <span class="kw">switch</span> (<span class="attr">action</span>.<span class="attr">type</span>) {
    <span class="kw">case</span> <span class="attr">ACTIONS</span>.<span class="attr">SET_FIELD</span>:
      <span class="kw">return</span> {
        ...<span class="attr">state</span>,
        <span class="attr">values</span>: { ...<span class="attr">state</span>.<span class="attr">values</span>, [<span class="attr">action</span>.<span class="attr">field</span>]: <span class="attr">action</span>.<span class="attr">value</span> },
        <span class="attr">errors</span>: { ...<span class="attr">state</span>.<span class="attr">errors</span>, [<span class="attr">action</span>.<span class="attr">field</span>]: <span class="bool">null</span> },
      };
    <span class="kw">case</span> <span class="attr">ACTIONS</span>.<span class="attr">SET_ERROR</span>:
      <span class="kw">return</span> {
        ...<span class="attr">state</span>,
        <span class="attr">errors</span>: { ...<span class="attr">state</span>.<span class="attr">errors</span>, [<span class="attr">action</span>.<span class="attr">field</span>]: <span class="attr">action</span>.<span class="attr">message</span> },
      };
    <span class="kw">case</span> <span class="attr">ACTIONS</span>.<span class="attr">CLEAR_ERRORS</span>:
      <span class="kw">return</span> { ...<span class="attr">state</span>, <span class="attr">errors</span>: {} };
    <span class="kw">case</span> <span class="attr">ACTIONS</span>.<span class="attr">RESET</span>:
      <span class="kw">return</span> { ...<span class="attr">state</span>, <span class="attr">values</span>: <span class="attr">action</span>.<span class="attr">initialValues</span>, <span class="attr">errors</span>: {} };
    <span class="kw">case</span> <span class="attr">ACTIONS</span>.<span class="attr">SET_LOADING</span>:
      <span class="kw">return</span> { ...<span class="attr">state</span>, <span class="attr">isLoading</span>: <span class="attr">action</span>.<span class="attr">value</span> };
    <span class="kw">default</span>:
      <span class="kw">return</span> <span class="attr">state</span>;
  }
}

<span class="kw">export default function</span> <span class="fn">useForm</span>(<span class="attr">initialValues</span>) {
  <span class="kw">const</span> [<span class="attr">state</span>, <span class="fn">dispatch</span>] = <span class="fn">useReducer</span>(<span class="fn">formReducer</span>, {
    <span class="attr">values</span>: <span class="attr">initialValues</span>,
    <span class="attr">errors</span>: {},
    <span class="attr">isLoading</span>: <span class="bool">false</span>,
  });

  <span class="kw">const</span> <span class="fn">setField</span> = <span class="fn">useCallback</span>(
    (<span class="attr">field</span>, <span class="attr">value</span>) <span class="op">=&gt;</span>
      <span class="fn">dispatch</span>({ <span class="attr">type</span>: <span class="attr">ACTIONS</span>.<span class="attr">SET_FIELD</span>, <span class="attr">field</span>, <span class="attr">value</span> }),
    []
  );

  <span class="kw">const</span> <span class="fn">setError</span> = <span class="fn">useCallback</span>(
    (<span class="attr">field</span>, <span class="attr">message</span>) <span class="op">=&gt;</span>
      <span class="fn">dispatch</span>({ <span class="attr">type</span>: <span class="attr">ACTIONS</span>.<span class="attr">SET_ERROR</span>, <span class="attr">field</span>, <span class="attr">message</span> }),
    []
  );

  <span class="kw">const</span> <span class="fn">reset</span> = <span class="fn">useCallback</span>(
    () <span class="op">=&gt;</span> <span class="fn">dispatch</span>({ <span class="attr">type</span>: <span class="attr">ACTIONS</span>.<span class="attr">RESET</span>, <span class="attr">initialValues</span> }),
    [<span class="attr">initialValues</span>]
  );

  <span class="kw">return</span> { ...<span class="attr">state</span>, <span class="fn">setField</span>, <span class="fn">setError</span>, <span class="fn">reset</span>, <span class="fn">dispatch</span> };
}`}
        </CodeBlock>

        <CodeBlock filename="userSlice.js" language="JavaScript">
{`<span class="kw">import</span> { <span class="fn">createSlice</span>, <span class="fn">createAsyncThunk</span> } <span class="kw">from</span> <span class="str">'@reduxjs/toolkit'</span>;

<span class="cm">// Async thunk for fetching users</span>
<span class="kw">export const</span> <span class="fn">fetchUsers</span> = <span class="fn">createAsyncThunk</span>(
  <span class="str">'users/fetchAll'</span>,
  <span class="kw">async</span> (<span class="attr">_</span>, { <span class="attr">rejectWithValue</span> }) <span class="op">=&gt;</span> {
    <span class="kw">try</span> {
      <span class="kw">const</span> <span class="attr">res</span> = <span class="kw">await</span> <span class="fn">fetch</span>(<span class="str">'/api/users'</span>);
      <span class="kw">if</span> (<span class="op">!</span><span class="attr">res</span>.<span class="attr">ok</span>) <span class="kw">throw new</span> <span class="type">Error</span>(<span class="str">'Failed to fetch'</span>);
      <span class="kw">return await</span> <span class="attr">res</span>.<span class="fn">json</span>();
    } <span class="kw">catch</span> (<span class="attr">err</span>) {
      <span class="kw">return</span> <span class="fn">rejectWithValue</span>(<span class="attr">err</span>.<span class="attr">message</span>);
    }
  }
);

<span class="kw">const</span> <span class="attr">userSlice</span> = <span class="fn">createSlice</span>({
  <span class="attr">name</span>: <span class="str">'users'</span>,
  <span class="attr">initialState</span>: {
    <span class="attr">entities</span>: [],
    <span class="attr">status</span>: <span class="str">'idle'</span>,   <span class="cm">// 'idle' | 'loading' | 'succeeded' | 'failed'</span>
    <span class="attr">error</span>: <span class="bool">null</span>,
  },
  <span class="attr">reducers</span>: {
    <span class="fn">userAdded</span>(<span class="attr">state</span>, <span class="attr">action</span>) {
      <span class="attr">state</span>.<span class="attr">entities</span>.<span class="fn">push</span>(<span class="attr">action</span>.<span class="attr">payload</span>);
    },
    <span class="fn">userRemoved</span>(<span class="attr">state</span>, <span class="attr">action</span>) {
      <span class="attr">state</span>.<span class="attr">entities</span> = <span class="attr">state</span>.<span class="attr">entities</span>.<span class="fn">filter</span>(
        <span class="attr">u</span> <span class="op">=&gt;</span> <span class="attr">u</span>.<span class="attr">id</span> <span class="op">!==</span> <span class="attr">action</span>.<span class="attr">payload</span>
      );
    },
  },
  <span class="attr">extraReducers</span>: (<span class="attr">builder</span>) <span class="op">=&gt;</span> {
    <span class="attr">builder</span>
      .<span class="fn">addCase</span>(<span class="attr">fetchUsers</span>.<span class="attr">pending</span>, (<span class="attr">state</span>) <span class="op">=&gt;</span> {
        <span class="attr">state</span>.<span class="attr">status</span> = <span class="str">'loading'</span>;
      })
      .<span class="fn">addCase</span>(<span class="attr">fetchUsers</span>.<span class="attr">fulfilled</span>, (<span class="attr">state</span>, <span class="attr">action</span>) <span class="op">=&gt;</span> {
        <span class="attr">state</span>.<span class="attr">status</span> = <span class="str">'succeeded'</span>;
        <span class="attr">state</span>.<span class="attr">entities</span> = <span class="attr">action</span>.<span class="attr">payload</span>;
      })
      .<span class="fn">addCase</span>(<span class="attr">fetchUsers</span>.<span class="attr">rejected</span>, (<span class="attr">state</span>, <span class="attr">action</span>) <span class="op">=&gt;</span> {
        <span class="attr">state</span>.<span class="attr">status</span> = <span class="str">'failed'</span>;
        <span class="attr">state</span>.<span class="attr">error</span> = <span class="attr">action</span>.<span class="attr">payload</span>;
      });
  },
});

<span class="kw">export const</span> { <span class="fn">userAdded</span>, <span class="fn">userRemoved</span> } = <span class="attr">userSlice</span>.<span class="attr">actions</span>;
<span class="kw">export default</span> <span class="attr">userSlice</span>.<span class="attr">reducer</span>;`}
        </CodeBlock>

        <CodeBlock filename="AuthContext.jsx" language="JSX">
{`<span class="kw">import</span> { <span class="fn">createContext</span>, <span class="fn">useContext</span>, <span class="fn">useReducer</span> } <span class="kw">from</span> <span class="str">'react'</span>;

<span class="kw">const</span> <span class="attr">AuthContext</span> = <span class="fn">createContext</span>(<span class="bool">null</span>);

<span class="kw">function</span> <span class="fn">authReducer</span>(<span class="attr">state</span>, <span class="attr">action</span>) {
  <span class="kw">switch</span> (<span class="attr">action</span>.<span class="attr">type</span>) {
    <span class="kw">case</span> <span class="str">'LOGIN'</span>:
      <span class="kw">return</span> {
        ...<span class="attr">state</span>,
        <span class="attr">user</span>: <span class="attr">action</span>.<span class="attr">payload</span>,
        <span class="attr">isAuthenticated</span>: <span class="bool">true</span>,
      };
    <span class="kw">case</span> <span class="str">'LOGOUT'</span>:
      <span class="kw">return</span> {
        ...<span class="attr">state</span>,
        <span class="attr">user</span>: <span class="bool">null</span>,
        <span class="attr">isAuthenticated</span>: <span class="bool">false</span>,
      };
    <span class="kw">case</span> <span class="str">'UPDATE_PROFILE'</span>:
      <span class="kw">return</span> {
        ...<span class="attr">state</span>,
        <span class="attr">user</span>: { ...<span class="attr">state</span>.<span class="attr">user</span>, ...<span class="attr">action</span>.<span class="attr">payload</span> },
      };
    <span class="kw">default</span>:
      <span class="kw">return</span> <span class="attr">state</span>;
  }
}

<span class="kw">export function</span> <span class="fn">AuthProvider</span>({ <span class="attr">children</span> }) {
  <span class="kw">const</span> [<span class="attr">state</span>, <span class="fn">dispatch</span>] = <span class="fn">useReducer</span>(<span class="fn">authReducer</span>, {
    <span class="attr">user</span>: <span class="bool">null</span>,
    <span class="attr">isAuthenticated</span>: <span class="bool">false</span>,
  });

  <span class="kw">const</span> <span class="fn">login</span>  = (<span class="attr">user</span>) <span class="op">=&gt;</span> <span class="fn">dispatch</span>({ <span class="attr">type</span>: <span class="str">'LOGIN'</span>, <span class="attr">payload</span>: <span class="attr">user</span> });
  <span class="kw">const</span> <span class="fn">logout</span> = ()     <span class="op">=&gt;</span> <span class="fn">dispatch</span>({ <span class="attr">type</span>: <span class="str">'LOGOUT'</span> });

  <span class="kw">return</span> (
    <span class="tag">&lt;AuthContext.Provider</span> <span class="attr">value</span>={{ ...<span class="attr">state</span>, <span class="fn">login</span>, <span class="fn">logout</span>, <span class="fn">dispatch</span> }}<span class="tag">&gt;</span>
      {<span class="attr">children</span>}
    <span class="tag">&lt;/AuthContext.Provider&gt;</span>
  );
}

<span class="kw">export function</span> <span class="fn">useAuth</span>() {
  <span class="kw">const</span> <span class="attr">context</span> = <span class="fn">useContext</span>(<span class="attr">AuthContext</span>);
  <span class="kw">if</span> (<span class="op">!</span><span class="attr">context</span>) {
    <span class="kw">throw new</span> <span class="type">Error</span>(<span class="str">'useAuth must be used within an AuthProvider'</span>);
  }
  <span class="kw">return</span> <span class="attr">context</span>;
}`}
        </CodeBlock>

        <InfoBox type="note" title="Redux vs. Context API — Decision Guide">
          <p>
            Use <strong>Context API</strong> for low-frequency updates shared across many
            components (theme, locale, auth). Use <strong>Redux Toolkit</strong> when you
            have complex, frequently-changing state with many actions, need middleware (thunks,
            sagas), require time-travel debugging, or your state graph has many interdependent
            slices. For server state (API data), consider <strong>React Query</strong> or
            <strong> SWR</strong>—they handle caching, deduplication, and revalidation out
            of the box.
          </p>
        </InfoBox>
      </Subsection>

      {/* ── Subsection 8.3 ── */}
      <Subsection
        id="build-tools"
        icon="🔧"
        iconBg="rgba(34,197,94,0.15)"
        iconColor="#22c55e"
        title="8.3 — Build Tools: Webpack, Babel & Vite"
      >
        <h4>The Shift from Webpack to Vite</h4>
        <p>
          For years, Webpack was the de facto bundler for React projects. It's powerful
          and endlessly configurable—but that power comes at the cost of complexity and
          slow cold starts. Webpack bundles your entire application before serving it,
          which means even a small change requires re-processing thousands of modules.
        </p>
        <p>
          Vite takes a fundamentally different approach. In development, it serves files
          over native ES modules—your browser does the bundling. Only the file you changed
          is hot-replaced, making HMR near-instant regardless of project size. For
          production, Vite uses Rollup under the hood, producing optimized bundles with
          tree-shaking, code splitting, and asset hashing.
        </p>

        <DataTable headers={['Tool', 'Role', 'Key Feature']}>
          <tr>
            <td><Badge variant="blue">Webpack</Badge></td>
            <td>Module bundler</td>
            <td>Extremely configurable; vast plugin ecosystem</td>
          </tr>
          <tr>
            <td><Badge variant="orange">Babel</Badge></td>
            <td>JavaScript compiler</td>
            <td>Transpiles JSX and modern JS to browser-compatible code</td>
          </tr>
          <tr>
            <td><Badge variant="green">Vite</Badge></td>
            <td>Dev server + bundler</td>
            <td>Instant HMR via native ESM; Rollup for production</td>
          </tr>
          <tr>
            <td><Badge variant="purple">ESLint</Badge></td>
            <td>Linter</td>
            <td>Catches errors and enforces code style before runtime</td>
          </tr>
          <tr>
            <td><Badge variant="purple">Prettier</Badge></td>
            <td>Code formatter</td>
            <td>Opinionated formatting; eliminates style debates</td>
          </tr>
        </DataTable>

        <CodeBlock filename="vite.config.js" language="JavaScript">
{`<span class="kw">import</span> { <span class="fn">defineConfig</span> } <span class="kw">from</span> <span class="str">'vite'</span>;
<span class="kw">import</span> <span class="fn">react</span> <span class="kw">from</span> <span class="str">'@vitejs/plugin-react'</span>;

<span class="kw">export default</span> <span class="fn">defineConfig</span>({
  <span class="attr">plugins</span>: [<span class="fn">react</span>()],

  <span class="attr">server</span>: {
    <span class="attr">port</span>: <span class="num">3000</span>,
    <span class="attr">open</span>: <span class="bool">true</span>,
    <span class="attr">proxy</span>: {
      <span class="str">'/api'</span>: {
        <span class="attr">target</span>: <span class="str">'http://localhost:8080'</span>,
        <span class="attr">changeOrigin</span>: <span class="bool">true</span>,
      },
    },
  },

  <span class="attr">build</span>: {
    <span class="attr">outDir</span>: <span class="str">'dist'</span>,
    <span class="attr">sourcemap</span>: <span class="bool">true</span>,
    <span class="attr">rollupOptions</span>: {
      <span class="attr">output</span>: {
        <span class="attr">manualChunks</span>: {
          <span class="attr">vendor</span>: [<span class="str">'react'</span>, <span class="str">'react-dom'</span>],
          <span class="attr">router</span>: [<span class="str">'react-router-dom'</span>],
        },
      },
    },
  },

  <span class="attr">resolve</span>: {
    <span class="attr">alias</span>: {
      <span class="str">'@'</span>: <span class="str">'/src'</span>,
    },
  },
});`}
        </CodeBlock>

        <CodeBlock filename=".eslintrc.json" language="JSON">
{`{
  <span class="attr">"root"</span>: <span class="bool">true</span>,
  <span class="attr">"env"</span>: {
    <span class="attr">"browser"</span>: <span class="bool">true</span>,
    <span class="attr">"es2022"</span>: <span class="bool">true</span>
  },
  <span class="attr">"extends"</span>: [
    <span class="str">"eslint:recommended"</span>,
    <span class="str">"plugin:react/recommended"</span>,
    <span class="str">"plugin:react/jsx-runtime"</span>,
    <span class="str">"plugin:react-hooks/recommended"</span>,
    <span class="str">"prettier"</span>
  ],
  <span class="attr">"parserOptions"</span>: {
    <span class="attr">"ecmaVersion"</span>: <span class="str">"latest"</span>,
    <span class="attr">"sourceType"</span>: <span class="str">"module"</span>,
    <span class="attr">"ecmaFeatures"</span>: { <span class="attr">"jsx"</span>: <span class="bool">true</span> }
  },
  <span class="attr">"rules"</span>: {
    <span class="attr">"react/prop-types"</span>:         <span class="str">"off"</span>,
    <span class="attr">"no-unused-vars"</span>:            <span class="str">"warn"</span>,
    <span class="attr">"no-console"</span>:                [<span class="str">"warn"</span>, { <span class="attr">"allow"</span>: [<span class="str">"warn"</span>, <span class="str">"error"</span>] }],
    <span class="attr">"react-hooks/exhaustive-deps"</span>: <span class="str">"warn"</span>
  },
  <span class="attr">"settings"</span>: {
    <span class="attr">"react"</span>: { <span class="attr">"version"</span>: <span class="str">"detect"</span> }
  }
}`}
        </CodeBlock>
      </Subsection>

      <Subsection id="testing-strategy" icon="🧪" iconBg="rgba(34,197,94,0.15)" iconColor="#22c55e" title="8.4 — Testing Strategy">
        <p>
          A robust testing strategy gives you the confidence to refactor and deploy. In the React ecosystem, the standard stack involves Jest (or Vitest) for test running/assertions, and React Testing Library (RTL) for rendering components.
        </p>
        <ul className="styled-list">
          <li><strong>Unit Tests:</strong> Test pure functions, utilities, and custom hooks in isolation.</li>
          <li><strong>Integration Tests (RTL):</strong> Render a component with its children, interact with the DOM (click buttons, type in inputs), and assert that the UI updates correctly. Avoid testing implementation details (like state variables); test the user experience instead.</li>
          <li><strong>End-to-End Tests:</strong> Use tools like Playwright or Cypress to run your full application in a real browser, connecting to real (or closely mocked) backends.</li>
        </ul>
      </Subsection>

      <Subsection id="typescript-basics" icon="🟦" iconBg="rgba(34,197,94,0.15)" iconColor="#22c55e" title="8.5 — TypeScript Basics for React">
        <p>
          While this guide uses JavaScript for simplicity, TypeScript has become the industry standard for enterprise React applications. TypeScript adds static typing to JavaScript, catching errors at compile time rather than runtime.
        </p>
        <p>
          When using TypeScript with React, you define interfaces for your component props and state. This provides excellent autocompletion in your IDE and ensures you don't accidentally pass a string where a number is expected.
        </p>
      </Subsection>

      {/* ── Skills Proficiency Matrix ── */}
      <h3>Quick Reference: Skills Proficiency Matrix</h3>
      <DataTable headers={['Skill Area', 'Junior', 'Mid-Level', 'Senior']}>
        <tr>
          <td><Badge variant="orange">JavaScript</Badge></td>
          <td>ES6 basics, array methods, promises</td>
          <td>Closures, prototypes, generators, proxies</td>
          <td>Engine internals, memory model, perf tuning</td>
        </tr>
        <tr>
          <td><Badge variant="blue">React Core</Badge></td>
          <td>Components, props, useState, useEffect</td>
          <td>Custom hooks, memo, context, suspense</td>
          <td>Concurrent features, RSC, reconciler knowledge</td>
        </tr>
        <tr>
          <td><Badge variant="purple">State Management</Badge></td>
          <td>useState, prop drilling</td>
          <td>useReducer, Context, Redux basics</td>
          <td>Redux middleware, Zustand, Jotai, XState</td>
        </tr>
        <tr>
          <td><Badge variant="blue">Styling</Badge></td>
          <td>CSS basics, flexbox, class toggling</td>
          <td>CSS Grid, custom properties, responsive design</td>
          <td>Design systems, CSS-in-JS perf, animation APIs</td>
        </tr>
        <tr>
          <td><Badge variant="green">Testing</Badge></td>
          <td>Basic unit tests with Jest</td>
          <td>React Testing Library, mocking, integration tests</td>
          <td>E2E (Playwright), visual regression, CI pipelines</td>
        </tr>
        <tr>
          <td><Badge variant="orange">Build Tools</Badge></td>
          <td>Uses CRA/Vite defaults</td>
          <td>Custom Vite config, ESLint rules, path aliases</td>
          <td>Webpack internals, custom plugins, monorepo tooling</td>
        </tr>
        <tr>
          <td><Badge variant="purple">Version Control</Badge></td>
          <td>add, commit, push, basic branching</td>
          <td>Rebase, cherry-pick, conventional commits</td>
          <td>Git internals, bisect, reflog, custom hooks</td>
        </tr>
        <tr>
          <td><Badge variant="red">Performance</Badge></td>
          <td>Aware of re-render concept</td>
          <td>Profiler, lazy loading, code splitting</td>
          <td>Bundle analysis, runtime profiling, WASM integration</td>
        </tr>
        <tr>
          <td><Badge variant="green">Accessibility</Badge></td>
          <td>Alt text, semantic HTML</td>
          <td>ARIA roles, keyboard nav, focus management</td>
          <td>Screen reader testing, WCAG audits, a11y architecture</td>
        </tr>
        <tr>
          <td><Badge variant="blue">Soft Skills</Badge></td>
          <td>Asks questions, follows guidance</td>
          <td>Code reviews, mentoring juniors, technical writing</td>
          <td>Architecture decisions, stakeholder communication, hiring</td>
        </tr>
      </DataTable>
    </Section>
  );
}
