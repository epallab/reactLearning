import Section from '../../components/Content/Section';
import Subsection from '../../components/Content/Subsection';
import CodeBlock from '../../components/UI/CodeBlock';
import InfoBox from '../../components/UI/InfoBox';

const SBChapter10 = () => {
  return (
    <Section id="sb-chapter-10" number={10} title="Caching, Performance & Monitoring" theme="green">
      <p>
        As your application scales, fetching data from the database for every single request becomes a severe bottleneck. Furthermore, without proper visibility into how your app is performing, you are flying blind in production.
      </p>

      <Subsection id="spring-cache" icon="⚡" iconBg="#e6f4ea" iconColor="#137333" title="10.1 Spring Cache Abstraction">
        <p>
          Spring provides a transparent cache abstraction. It wraps your methods with caching logic. The first time a method is called with a specific parameter, the logic executes and the result is saved in the cache. The next time it's called with the same parameter, the cached result is returned instantly, bypassing the method execution entirely.
        </p>

        <CodeBlock filename="ProductService.java" language="java">
{`<span class="attr">@Service</span>
<span class="attr">@EnableCaching</span> <span class="cm">// Must be present on a config class</span>
<span class="kw">public class</span> <span class="fn">ProductService</span> {

    <span class="cm">// Checks the 'products' cache. If key 'id' exists, return it.</span>
    <span class="cm">// If not, run method, cache result, and return it.</span>
    <span class="attr">@Cacheable</span>(value = <span class="str">"products"</span>, key = <span class="str">"#id"</span>)
    <span class="kw">public</span> Product <span class="fn">getProductById</span>(Long id) {
        <span class="cm">// Expensive database call happens here</span>
        <span class="kw">return</span> repository.<span class="fn">findById</span>(id).<span class="fn">orElseThrow</span>();
    }

    <span class="cm">// Updates the record in the DB AND updates the cache entry</span>
    <span class="attr">@CachePut</span>(value = <span class="str">"products"</span>, key = <span class="str">"#product.id"</span>)
    <span class="kw">public</span> Product <span class="fn">updateProduct</span>(Product product) {
        <span class="kw">return</span> repository.<span class="fn">save</span>(product);
    }

    <span class="cm">// Removes the entry from the cache so stale data isn't served</span>
    <span class="attr">@CacheEvict</span>(value = <span class="str">"products"</span>, key = <span class="str">"#id"</span>)
    <span class="kw">public void</span> <span class="fn">deleteProduct</span>(Long id) {
        repository.<span class="fn">deleteById</span>(id);
    }
}`}
        </CodeBlock>
      </Subsection>

      <Subsection id="redis-caching" icon="🔴" iconBg="#e6f4ea" iconColor="#137333" title="10.2 Redis as a Cache Store">
        <p>
          By default, Spring Boot uses a simple `ConcurrentHashMap` in memory for caching. This is fine for development, but in production with multiple microservice instances, you need a centralized, distributed cache so all instances share the same data. <strong>Redis</strong> is the industry standard for this.
        </p>
        <p>
          Simply by adding the `spring-boot-starter-data-redis` dependency and providing the Redis connection URL in your `application.yml`, Spring Boot auto-configures Redis as the underlying provider for all your `@Cacheable` annotations. Zero code changes required!
        </p>
      </Subsection>

      <Subsection id="performance-tuning" icon="📈" iconBg="#e6f4ea" iconColor="#137333" title="10.3 Performance Tuning (JPA N+1)">
        <p>
          The most common performance killer in Spring Boot applications is the JPA N+1 query problem. This occurs when you fetch a list of entities (1 query), and then iterate through them to fetch a lazily loaded relationship (N queries). If you fetch 100 Posts, and then access `post.getAuthor()`, Hibernate executes 101 queries!
        </p>
        <p>
          You can fix this by telling Hibernate to execute a `JOIN FETCH` using `@EntityGraph` or custom JPQL.
        </p>

        <CodeBlock filename="PostRepository.java" language="java">
{`<span class="kw">public interface</span> <span class="fn">PostRepository</span> <span class="kw">extends</span> JpaRepository&lt;Post, Long&gt; {

    <span class="cm">// BAD: Results in N+1 problem if you access the author property later</span>
    <span class="cm">// List&lt;Post&gt; findAll();</span>

    <span class="cm">// GOOD: Uses an EntityGraph to perform a LEFT OUTER JOIN in a single query</span>
    <span class="attr">@EntityGraph</span>(attributePaths = {<span class="str">"author"</span>})
    List&lt;Post&gt; <span class="fn">findAll</span>();

    <span class="cm">// ALTERNATIVE GOOD: Custom JPQL with JOIN FETCH</span>
    <span class="attr">@Query</span>(<span class="str">"SELECT p FROM Post p JOIN FETCH p.author"</span>)
    List&lt;Post&gt; <span class="fn">findAllWithAuthors</span>();
}`}
        </CodeBlock>
      </Subsection>

      <Subsection id="actuator-monitoring" icon="📊" iconBg="#e6f4ea" iconColor="#137333" title="10.4 Spring Boot Actuator & Monitoring">
        <p>
          Spring Boot Actuator brings production-ready features to your application. It provides built-in HTTP endpoints to monitor and manage your app.
        </p>
        
        <ul>
          <li><code>/actuator/health</code>: Used by Kubernetes readiness/liveness probes to see if the app is healthy and connected to its database.</li>
          <li><code>/actuator/info</code>: Displays application version and git commit information.</li>
          <li><code>/actuator/metrics</code>: Provides memory usage, garbage collection stats, and HTTP request timings.</li>
        </ul>

        <p>
          Actuator integrates seamlessly with <strong>Micrometer</strong> (the SLF4J of metrics). By adding `micrometer-registry-prometheus`, Actuator automatically exposes a `/actuator/prometheus` endpoint. A Prometheus server can scrape this endpoint, and you can visualize the data in beautiful Grafana dashboards.
        </p>
      </Subsection>
    </Section>
  );
};

export default SBChapter10;
