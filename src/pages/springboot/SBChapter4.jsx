import Section from '../../components/Content/Section';
import Subsection from '../../components/Content/Subsection';
import CodeBlock from '../../components/UI/CodeBlock';
import InfoBox from '../../components/UI/InfoBox';

const SBChapter4 = () => {
  return (
    <Section id="sb-chapter-4" number={4} title="Data Access with Spring Data JPA" theme="green">
      <p>
        Interacting with relational databases is a core requirement for most backend applications. Spring Data JPA dramatically simplifies this by providing a repository abstraction over the Java Persistence API (JPA), which itself is an abstraction over JDBC. Under the hood, Spring Boot uses <strong>Hibernate</strong> as the default JPA provider.
      </p>

      <Subsection id="jpa-entities" icon="🗃️" iconBg="#e6f4ea" iconColor="#137333" title="4.1 JPA Entities & Relationships">
        <p>
          An Entity is a plain Java class that represents a table in your database. Instances of the class represent rows. We map the object-oriented paradigm to the relational paradigm using annotations.
        </p>

        <CodeBlock filename="Post.java (Entity)" language="java">
{`<span class="kw">package</span> com.example.demo.model;

<span class="kw">import</span> jakarta.persistence.*;
<span class="kw">import</span> java.util.List;

<span class="attr">@Entity</span>
<span class="attr">@Table</span>(name = <span class="str">"posts"</span>)
<span class="kw">public class</span> <span class="fn">Post</span> {

    <span class="attr">@Id</span>
    <span class="attr">@GeneratedValue</span>(strategy = GenerationType.IDENTITY) <span class="cm">// Uses database auto-increment</span>
    <span class="kw">private</span> Long id;

    <span class="attr">@Column</span>(nullable = <span class="kw">false</span>, length = 100)
    <span class="kw">private</span> String title;

    <span class="attr">@Column</span>(columnDefinition = <span class="str">"TEXT"</span>)
    <span class="kw">private</span> String content;

    <span class="cm">// Relationship: Many Posts belong to One Author</span>
    <span class="attr">@ManyToOne</span>(fetch = FetchType.LAZY)
    <span class="attr">@JoinColumn</span>(name = <span class="str">"author_id"</span>, nullable = <span class="kw">false</span>)
    <span class="kw">private</span> User author;

    <span class="cm">// Relationship: One Post has Many Comments</span>
    <span class="attr">@OneToMany</span>(mappedBy = <span class="str">"post"</span>, cascade = CascadeType.ALL, orphanRemoval = <span class="kw">true</span>)
    <span class="kw">private</span> List&lt;Comment&gt; comments;
    
    <span class="cm">// Getters and Setters omitted for brevity</span>
}`}
        </CodeBlock>

        <InfoBox type="warning" title="Always use FetchType.LAZY">
          By default, `@ManyToOne` and `@OneToOne` use `FetchType.EAGER`, meaning Hibernate will immediately fetch the related entity via a JOIN, even if you don't need it. This leads to the infamous N+1 query performance problem. Always explicitly set them to `FetchType.LAZY`.
        </InfoBox>
      </Subsection>

      <Subsection id="repositories" icon="📚" iconBg="#e6f4ea" iconColor="#137333" title="4.2 Spring Data Repositories">
        <p>
          Spring Data JPA allows you to create a DAO (Data Access Object) simply by defining an interface. Spring dynamically generates the implementation class at runtime.
        </p>

        <CodeBlock filename="PostRepository.java" language="java">
{`<span class="kw">import</span> org.springframework.data.jpa.repository.JpaRepository;
<span class="kw">import</span> org.springframework.data.jpa.repository.Query;
<span class="kw">import</span> org.springframework.stereotype.Repository;

<span class="attr">@Repository</span>
<span class="kw">public interface</span> <span class="fn">PostRepository</span> <span class="kw">extends</span> JpaRepository&lt;Post, Long&gt; {

    <span class="cm">// 1. Derived Query Method: Spring writes the SQL based on the method name!</span>
    <span class="cm">// Translates to: SELECT * FROM posts WHERE title = ? AND author_id = ?</span>
    List&lt;Post&gt; <span class="fn">findByTitleAndAuthorId</span>(String title, Long authorId);

    <span class="cm">// 2. Custom JPQL Query (Querying the Object model, not the Table model)</span>
    <span class="attr">@Query</span>(<span class="str">"SELECT p FROM Post p WHERE p.title LIKE %:keyword%"</span>)
    List&lt;Post&gt; <span class="fn">searchByKeyword</span>(String keyword);

    <span class="cm">// 3. Native SQL Query (Database specific, bypasses Hibernate ORM)</span>
    <span class="attr">@Query</span>(value = <span class="str">"SELECT * FROM posts ORDER BY created_at DESC LIMIT 5"</span>, nativeQuery = <span class="kw">true</span>)
    List&lt;Post&gt; <span class="fn">findTop5RecentPosts</span>();
}`}
        </CodeBlock>
        <p>By extending `JpaRepository`, you immediately inherit methods like `save()`, `findById()`, `findAll()`, and `deleteById()` without writing any code.</p>
      </Subsection>

      <Subsection id="pagination-sorting" icon="📄" iconBg="#e6f4ea" iconColor="#137333" title="4.3 Pagination & Sorting">
        <p>
          Returning thousands of records from a database is terrible for performance. Spring Data makes pagination incredibly easy via the `Pageable` interface.
        </p>

        <CodeBlock filename="Pagination Example" language="java">
{`<span class="cm">// In the Repository:</span>
Page&lt;Post&gt; <span class="fn">findByAuthorId</span>(Long authorId, Pageable pageable);

<span class="cm">// In the Controller:</span>
<span class="attr">@GetMapping</span>(<span class="str">"/authors/{authorId}/posts"</span>)
<span class="kw">public</span> Page&lt;Post&gt; <span class="fn">getAuthorPosts</span>(
        <span class="attr">@PathVariable</span> Long authorId,
        <span class="attr">@RequestParam</span>(defaultValue = <span class="str">"0"</span>) <span class="kw">int</span> page,
        <span class="attr">@RequestParam</span>(defaultValue = <span class="str">"10"</span>) <span class="kw">int</span> size) {
        
    <span class="cm">// Create a PageRequest object, sorted by ID descending</span>
    Pageable pageable = PageRequest.<span class="fn">of</span>(page, size, Sort.<span class="fn">by</span>(<span class="str">"id"</span>).<span class="fn">descending</span>());
    
    <span class="cm">// Returns a Page object containing the data, total pages, total elements, etc.</span>
    <span class="kw">return</span> postRepository.<span class="fn">findByAuthorId</span>(authorId, pageable);
}`}
        </CodeBlock>
      </Subsection>

      <Subsection id="transactions" icon="🔒" iconBg="#e6f4ea" iconColor="#137333" title="4.4 Transactions & Auditing">
        <p>
          When you execute multiple database operations that must succeed or fail as a single unit (like transferring money between bank accounts), you use database transactions.
        </p>
        <p>
          Spring manages transactions declaratively using the `@Transactional` annotation. If any runtime exception is thrown within the annotated method, Spring automatically rolls back the entire transaction, ensuring data integrity.
        </p>

        <CodeBlock filename="OrderService.java" language="java">
{`<span class="attr">@Service</span>
<span class="kw">public class</span> <span class="fn">OrderService</span> {

    <span class="cm">// Wraps the entire method in a database transaction</span>
    <span class="attr">@Transactional</span>
    <span class="kw">public void</span> <span class="fn">processOrder</span>(Order order, Payment payment) {
        <span class="cm">// 1. Deduct inventory (UPDATE)</span>
        inventoryRepository.<span class="fn">deduct</span>(order.getItems());
        
        <span class="cm">// 2. Save payment (INSERT)</span>
        paymentRepository.<span class="fn">save</span>(payment);
        
        <span class="cm">// 3. Save order (INSERT)</span>
        orderRepository.<span class="fn">save</span>(order);
        
        <span class="cm">// If an exception is thrown here (e.g. out of memory, network failure),</span>
        <span class="cm">// ALL previous database operations are rolled back automatically!</span>
    }
}`}
        </CodeBlock>

        <h4>JPA Auditing</h4>
        <p>
          Spring Data JPA can automatically populate `created_at` and `updated_at` timestamps for your entities without you writing manual setters. Simply add `@EnableJpaAuditing` to your main application class, and use `@CreatedDate` and `@LastModifiedDate` on your entity fields.
        </p>
      </Subsection>
    </Section>
  );
};

export default SBChapter4;
