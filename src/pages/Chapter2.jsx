import React from 'react';
import Section from '../components/Content/Section';
import Subsection from '../components/Content/Subsection';
import CodeBlock from '../components/UI/CodeBlock';
import InfoBox from '../components/UI/InfoBox';
import DiagramBox, { FlowRow, FlowBox, FlowArrow } from '../components/UI/DiagramBox';
import DataTable from '../components/UI/DataTable';
import Badge from '../components/UI/Badge';

const Chapter2 = () => {
  return (
    <Section id="chapter-2" number={2} title="RESTful API Integration & Data Flow" theme="purple">
      <p>
        Modern React applications rarely exist in isolation — they communicate with back-end services
        to fetch data, submit forms, and synchronize state. Seamless communication between your
        front-end and back-end is essential for building responsive, reliable user experiences. This
        chapter covers everything from REST fundamentals to production-grade API layers with
        interceptors, error handling, and caching strategies.
      </p>

      <h3>What is REST?</h3>
      <p>
        REST (Representational State Transfer) is an architectural style for designing networked
        applications. RESTful APIs use standard HTTP methods to perform CRUD operations on resources
        identified by URLs. Each request is stateless — the server doesn't remember previous requests,
        so every request must contain all the information needed to process it.
      </p>

      <h3>HTTP Methods</h3>
      <DataTable headers={['Method', 'Purpose', 'Has Body', 'Idempotent']}>
        <tr>
          <td><Badge variant="blue">GET</Badge></td>
          <td>Retrieve a resource or collection</td>
          <td>No</td>
          <td>Yes</td>
        </tr>
        <tr>
          <td><Badge variant="green">POST</Badge></td>
          <td>Create a new resource</td>
          <td>Yes</td>
          <td>No</td>
        </tr>
        <tr>
          <td><Badge variant="orange">PUT</Badge></td>
          <td>Replace an entire resource</td>
          <td>Yes</td>
          <td>Yes</td>
        </tr>
        <tr>
          <td><Badge variant="yellow">PATCH</Badge></td>
          <td>Partially update a resource</td>
          <td>Yes</td>
          <td>No</td>
        </tr>
        <tr>
          <td><Badge variant="red">DELETE</Badge></td>
          <td>Remove a resource</td>
          <td>Rarely</td>
          <td>Yes</td>
        </tr>
      </DataTable>

      <h3>HTTP Status Codes</h3>
      <DataTable headers={['Code', 'Name', 'Meaning']}>
        <tr>
          <td><Badge variant="green">200</Badge></td>
          <td>OK</td>
          <td>Request succeeded, response body contains data</td>
        </tr>
        <tr>
          <td><Badge variant="green">201</Badge></td>
          <td>Created</td>
          <td>Resource successfully created (typically after POST)</td>
        </tr>
        <tr>
          <td><Badge variant="green">204</Badge></td>
          <td>No Content</td>
          <td>Request succeeded, no response body (typical for DELETE)</td>
        </tr>
        <tr>
          <td><Badge variant="orange">400</Badge></td>
          <td>Bad Request</td>
          <td>Client sent invalid data (validation errors)</td>
        </tr>
        <tr>
          <td><Badge variant="red">401</Badge></td>
          <td>Unauthorized</td>
          <td>Authentication required or token expired</td>
        </tr>
        <tr>
          <td><Badge variant="red">403</Badge></td>
          <td>Forbidden</td>
          <td>Authenticated but lacks permission</td>
        </tr>
        <tr>
          <td><Badge variant="orange">404</Badge></td>
          <td>Not Found</td>
          <td>Resource doesn't exist at the given URL</td>
        </tr>
        <tr>
          <td><Badge variant="yellow">429</Badge></td>
          <td>Too Many Requests</td>
          <td>Rate limit exceeded, slow down</td>
        </tr>
        <tr>
          <td><Badge variant="red">500</Badge></td>
          <td>Internal Server Error</td>
          <td>Server-side error, not the client's fault</td>
        </tr>
      </DataTable>

      <InfoBox type="important" title="API Layer Abstraction">
        Never scatter <code>fetch()</code> or <code>axios</code> calls directly inside your components.
        Instead, create a dedicated API layer (<code>services/api.js</code>) that centralizes all HTTP
        communication. This gives you a single place to handle base URLs, authentication headers,
        error transformation, retry logic, and request/response logging. When the API changes, you
        update one file — not fifty components.
      </InfoBox>

      <h3>Frontend ↔ Backend Data Flow</h3>
      <DiagramBox>
        <FlowRow>
          <FlowBox>React Component</FlowBox>
          <FlowArrow />
          <FlowBox>Custom Hook</FlowBox>
          <FlowArrow />
          <FlowBox>API Service Layer</FlowBox>
          <FlowArrow />
          <FlowBox>HTTP Client (Axios)</FlowBox>
        </FlowRow>
        <FlowRow>
          <FlowBox>HTTP Client (Axios)</FlowBox>
          <FlowArrow />
          <FlowBox>REST API Server</FlowBox>
          <FlowArrow />
          <FlowBox>Database</FlowBox>
        </FlowRow>
      </DiagramBox>

      <Subsection id="use-api-hook" icon="🔗" iconBg="#f3e8ff" iconColor="#7c3aed" title="2.1 Custom Hook: useApi">
        <p>
          A well-designed API hook encapsulates the three fundamental states of any asynchronous
          operation: <strong>loading</strong>, <strong>data</strong>, and <strong>error</strong>. This
          pattern eliminates boilerplate and ensures consistent handling across your application.
        </p>

        <h4>Three States of Async Operations</h4>
        <ul>
          <li>
            <strong>Loading:</strong> The request is in flight. Show a spinner, skeleton, or placeholder
            content. Never leave the user staring at a blank screen.
          </li>
          <li>
            <strong>Success (Data):</strong> The server responded with the expected data. Render your UI
            components with the received data.
          </li>
          <li>
            <strong>Error:</strong> Something went wrong — network failure, server error, or invalid
            response. Show a meaningful error message with a retry option.
          </li>
        </ul>

        <h4>AbortController</h4>
        <p>
          The <code>AbortController</code> API lets you cancel in-flight HTTP requests. This is critical
          for preventing race conditions and memory leaks. If a user navigates away from a page before
          the API call completes, the request should be aborted — otherwise, the response will try to
          update state on an unmounted component. Our <code>useApi</code> hook integrates this
          automatically via the cleanup function in <code>useEffect</code>.
        </p>

        <CodeBlock filename="useApi.js" language="javascript">
{`<span class="kw">import</span> { useState, useEffect, useCallback } <span class="kw">from</span> <span class="str">'react'</span>;

<span class="kw">export function</span> <span class="fn">useApi</span>(url, options <span class="op">=</span> {}) {
  <span class="kw">const</span> [data, setData] <span class="op">=</span> <span class="fn">useState</span>(<span class="bool">null</span>);
  <span class="kw">const</span> [error, setError] <span class="op">=</span> <span class="fn">useState</span>(<span class="bool">null</span>);
  <span class="kw">const</span> [loading, setLoading] <span class="op">=</span> <span class="fn">useState</span>(<span class="bool">true</span>);

  <span class="kw">const</span> {
    immediate <span class="op">=</span> <span class="bool">true</span>,
    method <span class="op">=</span> <span class="str">'GET'</span>,
    body <span class="op">=</span> <span class="bool">null</span>,
    headers <span class="op">=</span> {},
    transform <span class="op">=</span> (data) <span class="kw">=&gt;</span> data,
  } <span class="op">=</span> options;

  <span class="kw">const</span> <span class="fn">execute</span> <span class="op">=</span> <span class="fn">useCallback</span>(<span class="kw">async</span> (overrideUrl) <span class="kw">=&gt;</span> {
    <span class="kw">const</span> controller <span class="op">=</span> <span class="kw">new</span> <span class="fn">AbortController</span>();

    <span class="kw">try</span> {
      <span class="fn">setLoading</span>(<span class="bool">true</span>);
      <span class="fn">setError</span>(<span class="bool">null</span>);

      <span class="kw">const</span> response <span class="op">=</span> <span class="kw">await</span> <span class="fn">fetch</span>(overrideUrl <span class="op">||</span> url, {
        method,
        headers: {
          <span class="str">'Content-Type'</span>: <span class="str">'application/json'</span>,
          ...headers,
        },
        body: body <span class="op">?</span> JSON.<span class="fn">stringify</span>(body) <span class="op">:</span> <span class="bool">null</span>,
        signal: controller.signal,
      });

      <span class="kw">if</span> (<span class="op">!</span>response.ok) {
        <span class="kw">throw new</span> <span class="fn">Error</span>(<span class="str">\`HTTP error! status: \${response.status}\`</span>);
      }

      <span class="kw">const</span> json <span class="op">=</span> <span class="kw">await</span> response.<span class="fn">json</span>();
      <span class="kw">const</span> transformed <span class="op">=</span> <span class="fn">transform</span>(json);
      <span class="fn">setData</span>(transformed);
      <span class="kw">return</span> transformed;
    } <span class="kw">catch</span> (err) {
      <span class="kw">if</span> (err.name <span class="op">!==</span> <span class="str">'AbortError'</span>) {
        <span class="fn">setError</span>(err.message);
      }
    } <span class="kw">finally</span> {
      <span class="fn">setLoading</span>(<span class="bool">false</span>);
    }

    <span class="kw">return</span> () <span class="kw">=&gt;</span> controller.<span class="fn">abort</span>();
  }, [url, method, body, headers, transform]);

  <span class="fn">useEffect</span>(() <span class="kw">=&gt;</span> {
    <span class="kw">if</span> (immediate) {
      <span class="fn">execute</span>();
    }
  }, [immediate, execute]);

  <span class="kw">return</span> { data, error, loading, <span class="fn">refetch</span>: execute };
}`}
        </CodeBlock>

        <CodeBlock filename="UserList.jsx" language="jsx">
{`<span class="kw">import</span> { useApi } <span class="kw">from</span> <span class="str">'../hooks/useApi'</span>;

<span class="kw">export default function</span> <span class="fn">UserList</span>() {
  <span class="kw">const</span> { data: users, loading, error, refetch } <span class="op">=</span> <span class="fn">useApi</span>(
    <span class="str">'/api/users'</span>,
    { transform: (res) <span class="kw">=&gt;</span> res.data }
  );

  <span class="kw">if</span> (loading) <span class="kw">return</span> <span class="tag">&lt;Spinner /&gt;</span>;
  <span class="kw">if</span> (error) <span class="kw">return</span> (
    <span class="tag">&lt;ErrorMessage</span> <span class="attr">message</span><span class="op">=</span>{error} <span class="attr">onRetry</span><span class="op">=</span>{refetch} <span class="tag">/&gt;</span>
  );

  <span class="kw">return</span> (
    <span class="tag">&lt;ul&gt;</span>
      {users.<span class="fn">map</span>((user) <span class="kw">=&gt;</span> (
        <span class="tag">&lt;li</span> <span class="attr">key</span><span class="op">=</span>{user.id}<span class="tag">&gt;</span>{user.name}<span class="tag">&lt;/li&gt;</span>
      ))}
    <span class="tag">&lt;/ul&gt;</span>
  );
}`}
        </CodeBlock>
      </Subsection>

      <Subsection id="axios-interceptors" icon="🛡️" iconBg="#f3e8ff" iconColor="#7c3aed" title="2.2 Axios Interceptors & Error Handling">
        <p>
          Axios interceptors let you intercept requests and responses before they are handled by
          <code>then</code> or <code>catch</code>. This is where you build your app's defensive
          layer — handling authentication, retrying failed requests, and transforming errors into
          user-friendly messages.
        </p>

        <h4>What Interceptors Handle</h4>
        <ul>
          <li><strong>Request Interceptors:</strong> Attach auth tokens, set default headers, log outgoing requests</li>
          <li><strong>Response Interceptors:</strong> Transform responses, handle errors globally, refresh expired tokens</li>
        </ul>

        <h4>Token Refresh Flow</h4>
        <ol>
          <li>User's access token expires mid-session</li>
          <li>API returns <code>401 Unauthorized</code></li>
          <li>Response interceptor catches the 401</li>
          <li>Interceptor sends refresh token to <code>/auth/refresh</code> endpoint</li>
          <li>Server responds with a new access token</li>
          <li>Interceptor retries the original failed request with the new token</li>
          <li>User never notices the token expired — seamless experience</li>
        </ol>

        <InfoBox type="note" title="Why This is Powerful">
          Without interceptors, you'd need to add token refresh logic to every single API call in your
          app. With interceptors, you write it once and every request automatically benefits. This is
          the API layer abstraction principle in action.
        </InfoBox>

        <CodeBlock filename="apiClient.js" language="javascript">
{`<span class="kw">import</span> axios <span class="kw">from</span> <span class="str">'axios'</span>;

<span class="kw">const</span> apiClient <span class="op">=</span> axios.<span class="fn">create</span>({
  baseURL: <span class="str">'https://api.example.com/v1'</span>,
  timeout: <span class="num">10000</span>,
  headers: {
    <span class="str">'Content-Type'</span>: <span class="str">'application/json'</span>,
  },
});

<span class="cm">// ─── Request Interceptor ──────────────────────</span>
apiClient.interceptors.request.<span class="fn">use</span>(
  (config) <span class="kw">=&gt;</span> {
    <span class="kw">const</span> token <span class="op">=</span> localStorage.<span class="fn">getItem</span>(<span class="str">'accessToken'</span>);
    <span class="kw">if</span> (token) {
      config.headers.Authorization <span class="op">=</span> <span class="str">\`Bearer \${token}\`</span>;
    }
    <span class="kw">return</span> config;
  },
  (error) <span class="kw">=&gt;</span> Promise.<span class="fn">reject</span>(error)
);

<span class="cm">// ─── Response Interceptor ─────────────────────</span>
<span class="kw">let</span> isRefreshing <span class="op">=</span> <span class="bool">false</span>;
<span class="kw">let</span> failedQueue <span class="op">=</span> [];

<span class="kw">const</span> <span class="fn">processQueue</span> <span class="op">=</span> (error, token <span class="op">=</span> <span class="bool">null</span>) <span class="kw">=&gt;</span> {
  failedQueue.<span class="fn">forEach</span>(({ resolve, reject }) <span class="kw">=&gt;</span> {
    error <span class="op">?</span> <span class="fn">reject</span>(error) <span class="op">:</span> <span class="fn">resolve</span>(token);
  });
  failedQueue <span class="op">=</span> [];
};

apiClient.interceptors.response.<span class="fn">use</span>(
  (response) <span class="kw">=&gt;</span> response,
  <span class="kw">async</span> (error) <span class="kw">=&gt;</span> {
    <span class="kw">const</span> originalRequest <span class="op">=</span> error.config;

    <span class="kw">if</span> (error.response?.status <span class="op">===</span> <span class="num">401</span>
        <span class="op">&amp;&amp;</span> <span class="op">!</span>originalRequest._retry) {
      <span class="kw">if</span> (isRefreshing) {
        <span class="kw">return new</span> <span class="fn">Promise</span>((resolve, reject) <span class="kw">=&gt;</span> {
          failedQueue.<span class="fn">push</span>({ resolve, reject });
        }).<span class="fn">then</span>((token) <span class="kw">=&gt;</span> {
          originalRequest.headers.Authorization <span class="op">=</span> <span class="str">\`Bearer \${token}\`</span>;
          <span class="kw">return</span> <span class="fn">apiClient</span>(originalRequest);
        });
      }

      originalRequest._retry <span class="op">=</span> <span class="bool">true</span>;
      isRefreshing <span class="op">=</span> <span class="bool">true</span>;

      <span class="kw">try</span> {
        <span class="kw">const</span> refreshToken <span class="op">=</span> localStorage.<span class="fn">getItem</span>(<span class="str">'refreshToken'</span>);
        <span class="kw">const</span> { data } <span class="op">=</span> <span class="kw">await</span> axios.<span class="fn">post</span>(
          <span class="str">'/auth/refresh'</span>,
          { token: refreshToken }
        );

        localStorage.<span class="fn">setItem</span>(<span class="str">'accessToken'</span>, data.accessToken);
        <span class="fn">processQueue</span>(<span class="bool">null</span>, data.accessToken);

        originalRequest.headers.Authorization <span class="op">=</span>
          <span class="str">\`Bearer \${data.accessToken}\`</span>;
        <span class="kw">return</span> <span class="fn">apiClient</span>(originalRequest);
      } <span class="kw">catch</span> (refreshError) {
        <span class="fn">processQueue</span>(refreshError);
        localStorage.<span class="fn">removeItem</span>(<span class="str">'accessToken'</span>);
        localStorage.<span class="fn">removeItem</span>(<span class="str">'refreshToken'</span>);
        window.location.href <span class="op">=</span> <span class="str">'/login'</span>;
        <span class="kw">return</span> Promise.<span class="fn">reject</span>(refreshError);
      } <span class="kw">finally</span> {
        isRefreshing <span class="op">=</span> <span class="bool">false</span>;
      }
    }

    <span class="kw">return</span> Promise.<span class="fn">reject</span>(error);
  }
);

<span class="kw">export default</span> apiClient;`}
        </CodeBlock>

        <InfoBox type="warning" title="Security Note: localStorage Tokens">
          Storing tokens in <code>localStorage</code> is convenient but vulnerable to XSS attacks. For
          production applications, consider using <code>httpOnly</code> cookies set by the server, which
          are not accessible via JavaScript. If you must use localStorage, ensure your app has robust XSS
          protection including Content Security Policy headers and input sanitization.
        </InfoBox>
      </Subsection>
      <Subsection id="state-management-server-data" icon="🗄️" iconBg="#f3e8ff" iconColor="#7c3aed" title="2.3 State Management for Server Data">
        <p>
          While custom hooks like <code>useApi</code> are great for understanding the fundamentals, production apps 
          often rely on specialized libraries like React Query (TanStack Query) or SWR to manage server state.
        </p>
        <InfoBox type="note" title="Server State vs Client State">
          <p>Server state is asynchronous, shared, and can become out of date. Client state is synchronous and local to the user's session (e.g., UI toggles). Libraries like React Query specifically handle the caching, deduplication, and background updates of <strong>Server State</strong>.</p>
        </InfoBox>
      </Subsection>

      <Subsection id="websockets-real-time" icon="⚡" iconBg="#f3e8ff" iconColor="#7c3aed" title="2.4 WebSockets & Real-Time Data">
        <p>
          For applications that require live updates (chat apps, trading dashboards), REST polling is inefficient. 
          WebSockets provide a persistent, bi-directional connection between the client and server.
        </p>
        <CodeBlock filename="useWebSocket.js" language="javascript">
{`<span class="kw">import</span> { useEffect, useRef } <span class="kw">from</span> <span class="str">'react'</span>;

<span class="kw">export function</span> <span class="fn">useWebSocket</span>(url, onMessage) {
  <span class="kw">const</span> ws <span class="op">=</span> <span class="fn">useRef</span>(<span class="bool">null</span>);

  <span class="fn">useEffect</span>(() <span class="kw">=&gt;</span> {
    ws.current <span class="op">=</span> <span class="kw">new</span> <span class="fn">WebSocket</span>(url);
    ws.current.onmessage <span class="op">=</span> (event) <span class="kw">=&gt;</span> <span class="fn">onMessage</span>(JSON.<span class="fn">parse</span>(event.data));

    <span class="kw">return</span> () <span class="kw">=&gt;</span> ws.current?.<span class="fn">close</span>();
  }, [url, onMessage]);
}`}
        </CodeBlock>
      </Subsection>
    </Section>
  );
};

export default Chapter2;
