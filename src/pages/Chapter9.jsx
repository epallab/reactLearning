import Section from '../components/Content/Section';
import Subsection from '../components/Content/Subsection';
import CodeBlock from '../components/UI/CodeBlock';
import InfoBox from '../components/UI/InfoBox';

export default function Chapter9() {
  return (
    <Section
      id="react-19-features"
      number="09"
      title="React 19 & The Future"
      theme="teal"
    >
      <p className="section-intro">
        React 19 brings some of the most significant architectural changes to the library since Hooks were introduced. 
        It focuses on simplifying data fetching, handling async transitions, and moving heavy computations out of the developer's hands and into the compiler. 
        This chapter covers what's new and how to prepare your codebase for the future.
      </p>

      <Subsection id="react-compiler" icon="⚙️" iconBg="rgba(20,184,166,0.15)" iconColor="#14b8a6" title="9.1 — React Compiler">
        <p>
          Historically, React developers had to manually optimize renders using <code>useMemo</code>, <code>useCallback</code>, and <code>React.memo</code>. 
          The React Compiler changes this fundamentally. It automatically analyzes your code and applies memoization where it's needed, skipping unnecessary re-renders.
        </p>
        <InfoBox type="tip" title="What this means for you">
          <p>
            You can write idiomatic React without worrying about performance micro-optimizations. 
            No more wrapping every function in <code>useCallback</code> or primitive values in <code>useMemo</code> just to prevent a child component from re-rendering.
          </p>
        </InfoBox>
      </Subsection>

      <Subsection id="server-actions" icon="🚀" iconBg="rgba(20,184,166,0.15)" iconColor="#14b8a6" title="9.2 — Server Actions">
        <p>
          Server Actions allow you to run asynchronous functions directly on the server, tightly integrated with React's form submissions and transitions. 
          They eliminate the need for writing boilerplate API endpoints for simple data mutations.
        </p>
        <CodeBlock filename="ServerActionExample.js" language="javascript">
{`// app/actions.js
'use server'

export async function createPost(formData) {
  const title = formData.get('title');
  const content = formData.get('content');
  
  await db.post.create({ data: { title, content } });
  revalidatePath('/posts'); // Revalidate cache
}

// app/PostForm.jsx
import { createPost } from './actions';

export default function PostForm() {
  return (
    <form action={createPost}>
      <input name="title" required />
      <textarea name="content" required />
      <button type="submit">Submit</button>
    </form>
  );
}`}
        </CodeBlock>
      </Subsection>

      <Subsection id="use-hook" icon="🎣" iconBg="rgba(20,184,166,0.15)" iconColor="#14b8a6" title="9.3 — The new 'use' Hook">
        <p>
          React 19 introduces a new primitive hook simply called <code>use</code>. It allows you to read the value of a Promise or Context directly inside a component's render function, integrating perfectly with Suspense.
        </p>
        <InfoBox type="warning" title="Difference from other hooks">
          <p>Unlike other hooks, <code>use</code> can be called conditionally (e.g., inside an <code>if</code> statement or loop), making it extremely flexible for dynamic data requirements.</p>
        </InfoBox>
        <CodeBlock filename="UseHookExample.jsx" language="jsx">
{`import { use, Suspense } from 'react';

const fetchUser = async (id) => {
  const res = await fetch(\`/api/users/\${id}\`);
  return res.json();
};

function UserProfile({ userPromise }) {
  // 'use' suspends the component until the promise resolves
  const user = use(userPromise);
  return <div>Welcome, {user.name}</div>;
}

export default function App() {
  const userPromise = fetchUser(123);
  
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <UserProfile userPromise={userPromise} />
    </Suspense>
  );
}`}
        </CodeBlock>
      </Subsection>

      <Subsection id="document-metadata" icon="📄" iconBg="rgba(20,184,166,0.15)" iconColor="#14b8a6" title="9.4 — Built-in Document Metadata">
        <p>
          Managing <code>&lt;title&gt;</code>, <code>&lt;meta&gt;</code>, and <code>&lt;link&gt;</code> tags used to require third-party libraries like <code>react-helmet</code>. 
          React 19 natively supports rendering these elements in any component, automatically hoisting them to the document <code>&lt;head&gt;</code>.
        </p>
        <CodeBlock filename="MetadataExample.jsx" language="jsx">
{`export default function BlogPost({ post }) {
  return (
    <article>
      {/* React hoists these to the <head> automatically */}
      <title>{post.title} | My Blog</title>
      <meta name="description" content={post.summary} />
      
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </article>
  );
}`}
        </CodeBlock>
      </Subsection>
    </Section>
  );
}
