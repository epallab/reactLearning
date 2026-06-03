import Section from '../components/Content/Section';
import Subsection from '../components/Content/Subsection';
import CodeBlock from '../components/UI/CodeBlock';
import InfoBox from '../components/UI/InfoBox';
import DataTable from '../components/UI/DataTable';
import Badge from '../components/UI/Badge';

export default function Chapter5() {
  return (
    <Section
      id="collaborating-with-designers"
      number="05"
      title="Collaborating with UI/UX Designers"
      theme="blue"
    >
      <p className="section-intro">
        The most impactful React applications are born from tight collaboration between
        developers and designers. This chapter explores how to bridge the gap between
        design and development—translating Figma mockups into maintainable component
        architectures, establishing shared design tokens, and building responsive
        layouts that honor the designer's vision across every screen size.
      </p>

      <h3>Developer-Designer Collaboration Workflow</h3>
      <ol className="styled-list">
        <li>
          <strong>Design Handoff &amp; Review</strong> — Walk through Figma/Sketch files together.
          Clarify spacing, states (hover, active, disabled, error), and responsive breakpoints
          <em>before</em> writing a single line of code.
        </li>
        <li>
          <strong>Component Inventory</strong> — Map every unique UI element in the design to a
          React component. Identify shared patterns (buttons, cards, modals) that become your
          design system.
        </li>
        <li>
          <strong>Token Extraction</strong> — Pull colors, typography scales, spacing units, and
          border radii from the design file and encode them as CSS custom properties or JS
          constants.
        </li>
        <li>
          <strong>Iterative Build &amp; QA</strong> — Build components in isolation (Storybook),
          then compose them into pages. Conduct pixel-level reviews with the designer at
          each milestone.
        </li>
        <li>
          <strong>Living Style Guide</strong> — Maintain a component library that stays in sync
          with the design source of truth. Automate visual regression testing to catch drift.
        </li>
      </ol>

      <h3>Design System Fundamentals</h3>
      <div className="kv-grid">
        <div className="kv-item">
          <span className="kv-label">4px / 8px Spacing Grid</span>
          <span className="kv-value">
            All spacing values are multiples of 4px. Use 8px as the base unit for padding,
            margins, and gaps. This ensures visual rhythm and consistency.
          </span>
        </div>
        <div className="kv-item">
          <span className="kv-label">Typography Scale</span>
          <span className="kv-value">
            A modular type scale (e.g., 1.25 ratio) creates hierarchy: 12px → 14px → 16px →
            20px → 24px → 32px → 40px → 48px. Map each to a semantic token like
            <code>--font-size-sm</code>, <code>--font-size-base</code>, <code>--font-size-lg</code>.
          </span>
        </div>
        <div className="kv-item">
          <span className="kv-label">Color System</span>
          <span className="kv-value">
            Define a palette with semantic names: <code>--color-primary</code>,
            <code>--color-surface</code>, <code>--color-error</code>. Include shades
            (50–900) for each hue to handle hover states, backgrounds, and borders.
          </span>
        </div>
        <div className="kv-item">
          <span className="kv-label">Shared Language</span>
          <span className="kv-value">
            Agree on naming conventions between design and code. If the designer calls it a
            "Card," the component is <code>&lt;Card /&gt;</code>. Alignment on vocabulary
            eliminates ambiguity in standups, PRs, and Jira tickets.
          </span>
        </div>
      </div>

      {/* ── Subsection 5.1 ── */}
      <Subsection
        id="design-tokens-theming"
        icon="🎨"
        iconBg="rgba(59,130,246,0.15)"
        iconColor="#3b82f6"
        title="5.1 — Design Tokens & Theming"
      >
        <h4>Why CSS Custom Properties?</h4>
        <ul className="styled-list">
          <li>
            <strong>Dynamic &amp; Runtime</strong> — Unlike Sass variables, custom properties
            are live in the browser. You can change them with JavaScript, media queries, or
            class toggles without recompiling your stylesheets.
          </li>
          <li>
            <strong>Inheritance &amp; Cascading</strong> — Custom properties follow CSS
            inheritance rules. Set a token on <code>:root</code> and override it on any
            descendant element or component scope.
          </li>
          <li>
            <strong>Dark Mode Made Easy</strong> — Swap an entire theme by toggling a
            <code>data-theme="dark"</code> attribute on <code>&lt;html&gt;</code>
            and redefining a handful of properties.
          </li>
        </ul>

        <CodeBlock filename="tokens.css" language="CSS">
{`<span class="cm">/* ── Color Tokens ── */</span>
<span class="kw">:root</span> {
  <span class="cm">/* Primary */</span>
  <span class="attr">--color-primary-50</span>:  <span class="str">#eff6ff</span>;
  <span class="attr">--color-primary-100</span>: <span class="str">#dbeafe</span>;
  <span class="attr">--color-primary-500</span>: <span class="str">#3b82f6</span>;
  <span class="attr">--color-primary-600</span>: <span class="str">#2563eb</span>;
  <span class="attr">--color-primary-700</span>: <span class="str">#1d4ed8</span>;

  <span class="cm">/* Neutral / Surface */</span>
  <span class="attr">--color-bg</span>:         <span class="str">#ffffff</span>;
  <span class="attr">--color-surface</span>:    <span class="str">#f8fafc</span>;
  <span class="attr">--color-border</span>:     <span class="str">#e2e8f0</span>;
  <span class="attr">--color-text</span>:       <span class="str">#0f172a</span>;
  <span class="attr">--color-text-muted</span>: <span class="str">#64748b</span>;

  <span class="cm">/* Semantic */</span>
  <span class="attr">--color-success</span>:    <span class="str">#22c55e</span>;
  <span class="attr">--color-warning</span>:    <span class="str">#f59e0b</span>;
  <span class="attr">--color-error</span>:      <span class="str">#ef4444</span>;

  <span class="cm">/* ── Typography ── */</span>
  <span class="attr">--font-sans</span>:  <span class="str">'Inter', system-ui, sans-serif</span>;
  <span class="attr">--font-mono</span>:  <span class="str">'JetBrains Mono', monospace</span>;

  <span class="attr">--font-size-xs</span>:  <span class="num">0.75rem</span>;   <span class="cm">/* 12px */</span>
  <span class="attr">--font-size-sm</span>:  <span class="num">0.875rem</span>;  <span class="cm">/* 14px */</span>
  <span class="attr">--font-size-base</span>: <span class="num">1rem</span>;      <span class="cm">/* 16px */</span>
  <span class="attr">--font-size-lg</span>:  <span class="num">1.25rem</span>;   <span class="cm">/* 20px */</span>
  <span class="attr">--font-size-xl</span>:  <span class="num">1.5rem</span>;    <span class="cm">/* 24px */</span>
  <span class="attr">--font-size-2xl</span>: <span class="num">2rem</span>;      <span class="cm">/* 32px */</span>

  <span class="cm">/* ── Spacing (4px grid) ── */</span>
  <span class="attr">--space-1</span>:  <span class="num">0.25rem</span>;  <span class="cm">/* 4px  */</span>
  <span class="attr">--space-2</span>:  <span class="num">0.5rem</span>;   <span class="cm">/* 8px  */</span>
  <span class="attr">--space-3</span>:  <span class="num">0.75rem</span>;  <span class="cm">/* 12px */</span>
  <span class="attr">--space-4</span>:  <span class="num">1rem</span>;     <span class="cm">/* 16px */</span>
  <span class="attr">--space-6</span>:  <span class="num">1.5rem</span>;   <span class="cm">/* 24px */</span>
  <span class="attr">--space-8</span>:  <span class="num">2rem</span>;     <span class="cm">/* 32px */</span>
  <span class="attr">--space-12</span>: <span class="num">3rem</span>;     <span class="cm">/* 48px */</span>

  <span class="cm">/* ── Border Radius ── */</span>
  <span class="attr">--radius-sm</span>:   <span class="num">4px</span>;
  <span class="attr">--radius-md</span>:   <span class="num">8px</span>;
  <span class="attr">--radius-lg</span>:   <span class="num">12px</span>;
  <span class="attr">--radius-full</span>: <span class="num">9999px</span>;
}`}
        </CodeBlock>

        <CodeBlock filename="dark-theme.css" language="CSS">
{`<span class="cm">/* Dark theme overrides */</span>
<span class="kw">[data-theme="dark"]</span> {
  <span class="attr">--color-bg</span>:         <span class="str">#0f172a</span>;
  <span class="attr">--color-surface</span>:    <span class="str">#1e293b</span>;
  <span class="attr">--color-border</span>:     <span class="str">#334155</span>;
  <span class="attr">--color-text</span>:       <span class="str">#f1f5f9</span>;
  <span class="attr">--color-text-muted</span>: <span class="str">#94a3b8</span>;

  <span class="attr">--color-primary-50</span>:  <span class="str">#172554</span>;
  <span class="attr">--color-primary-100</span>: <span class="str">#1e3a5f</span>;
  <span class="attr">--color-primary-500</span>: <span class="str">#60a5fa</span>;
  <span class="attr">--color-primary-600</span>: <span class="str">#3b82f6</span>;
  <span class="attr">--color-primary-700</span>: <span class="str">#2563eb</span>;
}`}
        </CodeBlock>
      </Subsection>

      {/* ── Subsection 5.2 ── */}
      <Subsection
        id="responsive-design"
        icon="📱"
        iconBg="rgba(59,130,246,0.15)"
        iconColor="#3b82f6"
        title="5.2 — Responsive Design Implementation"
      >
        <h4>The Mobile-First Approach</h4>
        <p>
          Mobile-first means writing your base styles for the smallest screen, then layering
          on complexity with <code>min-width</code> media queries. This forces you to
          prioritize content and performance—mobile users get only the CSS they need, while
          desktop users progressively receive richer layouts. It mirrors how designers
          think: <em>what's essential?</em>
        </p>

        <h4>Breakpoint System</h4>
        <DataTable headers={['Name', 'Min Width', 'Target', 'CSS Variable']}>
          <tr><td><Badge variant="blue">sm</Badge></td><td>640px</td><td>Large phones</td><td><code>--bp-sm</code></td></tr>
          <tr><td><Badge variant="blue">md</Badge></td><td>768px</td><td>Tablets</td><td><code>--bp-md</code></td></tr>
          <tr><td><Badge variant="blue">lg</Badge></td><td>1024px</td><td>Laptops</td><td><code>--bp-lg</code></td></tr>
          <tr><td><Badge variant="blue">xl</Badge></td><td>1280px</td><td>Desktops</td><td><code>--bp-xl</code></td></tr>
          <tr><td><Badge variant="blue">2xl</Badge></td><td>1536px</td><td>Large screens</td><td><code>--bp-2xl</code></td></tr>
        </DataTable>

        <CodeBlock filename="responsive-grid.css" language="CSS">
{`<span class="cm">/* Mobile-first responsive grid */</span>
<span class="kw">.grid</span> {
  <span class="attr">display</span>: <span class="fn">grid</span>;
  <span class="attr">gap</span>: <span class="fn">var</span>(<span class="attr">--space-4</span>);
  <span class="attr">grid-template-columns</span>: <span class="num">1fr</span>;
}

<span class="cm">/* Tablet: 2 columns */</span>
<span class="kw">@media</span> (<span class="attr">min-width</span>: <span class="num">768px</span>) {
  <span class="kw">.grid</span> {
    <span class="attr">grid-template-columns</span>: <span class="kw">repeat</span>(<span class="num">2</span>, <span class="num">1fr</span>);
    <span class="attr">gap</span>: <span class="fn">var</span>(<span class="attr">--space-6</span>);
  }
}

<span class="cm">/* Desktop: 3 columns */</span>
<span class="kw">@media</span> (<span class="attr">min-width</span>: <span class="num">1024px</span>) {
  <span class="kw">.grid</span> {
    <span class="attr">grid-template-columns</span>: <span class="kw">repeat</span>(<span class="num">3</span>, <span class="num">1fr</span>);
    <span class="attr">gap</span>: <span class="fn">var</span>(<span class="attr">--space-8</span>);
  }
}

<span class="cm">/* Large desktop: 4 columns */</span>
<span class="kw">@media</span> (<span class="attr">min-width</span>: <span class="num">1280px</span>) {
  <span class="kw">.grid</span> {
    <span class="attr">grid-template-columns</span>: <span class="kw">repeat</span>(<span class="num">4</span>, <span class="num">1fr</span>);
  }
}`}
        </CodeBlock>

        <CodeBlock filename="useMediaQuery.js" language="JavaScript">
{`<span class="kw">import</span> { <span class="fn">useState</span>, <span class="fn">useEffect</span> } <span class="kw">from</span> <span class="str">'react'</span>;

<span class="kw">export default function</span> <span class="fn">useMediaQuery</span>(<span class="attr">query</span>) {
  <span class="kw">const</span> [<span class="attr">matches</span>, <span class="fn">setMatches</span>] = <span class="fn">useState</span>(
    () <span class="op">=&gt;</span> <span class="fn">window</span>.<span class="fn">matchMedia</span>(<span class="attr">query</span>).<span class="attr">matches</span>
  );

  <span class="fn">useEffect</span>(() <span class="op">=&gt;</span> {
    <span class="kw">const</span> <span class="attr">mql</span> = <span class="fn">window</span>.<span class="fn">matchMedia</span>(<span class="attr">query</span>);

    <span class="kw">const</span> <span class="fn">handler</span> = (<span class="attr">e</span>) <span class="op">=&gt;</span> <span class="fn">setMatches</span>(<span class="attr">e</span>.<span class="attr">matches</span>);
    <span class="attr">mql</span>.<span class="fn">addEventListener</span>(<span class="str">'change'</span>, <span class="fn">handler</span>);

    <span class="cm">// Sync on mount in case query changed</span>
    <span class="fn">setMatches</span>(<span class="attr">mql</span>.<span class="attr">matches</span>);

    <span class="kw">return</span> () <span class="op">=&gt;</span> <span class="attr">mql</span>.<span class="fn">removeEventListener</span>(<span class="str">'change'</span>, <span class="fn">handler</span>);
  }, [<span class="attr">query</span>]);

  <span class="kw">return</span> <span class="attr">matches</span>;
}

<span class="cm">// Usage:</span>
<span class="cm">// const isMobile  = useMediaQuery('(max-width: 767px)');</span>
<span class="cm">// const isDesktop = useMediaQuery('(min-width: 1024px)');</span>`}
        </CodeBlock>

        <InfoBox type="tip" title="Designer-Developer Sync Tip">
          <p>
            Export your breakpoint values as both CSS custom properties and a shared
            JSON config. This way, designers and developers always reference the same
            breakpoints—no more "is tablet 768 or 800?" debates.
          </p>
        </InfoBox>
      </Subsection>
      <Subsection id="accessibility-first" icon="♿" iconBg="rgba(59,130,246,0.15)" iconColor="#3b82f6" title="5.3 — Accessibility (a11y) First">
        <p>
          Accessibility shouldn't be an afterthought. Building inclusive applications means ensuring users who rely on screen readers, keyboard navigation, or have visual impairments can use your app without barriers.
        </p>
        <ul className="styled-list">
          <li><strong>Semantic HTML:</strong> Use <code>&lt;button&gt;</code> for actions and <code>&lt;a&gt;</code> for navigation. Don't use a <code>&lt;div&gt;</code> with an onClick handler unless absolutely necessary (and if you do, add <code>role="button"</code> and <code>tabIndex=&#123;0&#125;</code>).</li>
          <li><strong>Focus Management:</strong> When a modal opens, trap the focus inside it. When it closes, return focus to the element that opened it.</li>
          <li><strong>ARIA Attributes:</strong> Use <code>aria-expanded</code> for accordions, <code>aria-hidden</code> for decorative icons, and <code>aria-live</code> for dynamic content updates (like toast notifications).</li>
        </ul>
      </Subsection>

      <Subsection id="micro-animations" icon="✨" iconBg="rgba(59,130,246,0.15)" iconColor="#3b82f6" title="5.4 — Micro-Animations & Interactions">
        <p>
          Subtle animations provide feedback and delight without getting in the way. Hover states, active press states, and smooth transitions when elements enter or leave the DOM turn a static page into a fluid experience.
        </p>
        <InfoBox type="tip" title="Framer Motion">
          <p>For complex orchestrated animations in React, <a href="https://www.framer.com/motion/" target="_blank" rel="noreferrer">Framer Motion</a> is the industry standard. It handles layout animations, gesture recognition, and spring physics effortlessly.</p>
        </InfoBox>
      </Subsection>
    </Section>
  );
}
