import Section from '../../components/Content/Section';
import Subsection from '../../components/Content/Subsection';

export default function SDChapter2() {
  return (
    <Section id="sd-chapter-2" number="2" title="Data & Databases" theme="purple">
      <Subsection id="sd-db-sql-nosql" title="2.1 SQL vs NoSQL">
        <p>
          Choosing between SQL (Relational) and NoSQL (Non-Relational) is a fundamental decision in system design.
        </p>
        <div className="table-responsive">
          <table>
            <thead>
              <tr>
                <th>Feature</th>
                <th>SQL Databases</th>
                <th>NoSQL Databases</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Schema</strong></td>
                <td>Fixed/Rigid schemas</td>
                <td>Dynamic/Flexible schemas</td>
              </tr>
              <tr>
                <td><strong>Scaling</strong></td>
                <td>Primarily Vertical Scaling</td>
                <td>Primarily Horizontal Scaling</td>
              </tr>
              <tr>
                <td><strong>Data Structure</strong></td>
                <td>Tables, Rows, Columns</td>
                <td>Key-Value, Document, Graph, Wide-Column</td>
              </tr>
              <tr>
                <td><strong>ACID Properties</strong></td>
                <td>Strong ACID compliance</td>
                <td>Often BASE (Eventually Consistent)</td>
              </tr>
              <tr>
                <td><strong>Best For</strong></td>
                <td>Complex queries, transactions (Banking)</td>
                <td>Rapid development, unstructured data, high volume</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Subsection>

      <Subsection id="sd-db-sharding" title="2.2 Database Sharding & Replication">
        <h3>Replication</h3>
        <p>
          Replication involves keeping a copy of the same data on multiple machines. It increases availability and read throughput. Common strategies include Master-Slave (writes to master, reads from slaves) and Master-Master (writes to any node).
        </p>
        
        <h3>Sharding (Data Partitioning)</h3>
        <p>
          Sharding is the process of splitting a single logical database into multiple physical databases (shards) across different servers. It allows horizontal scaling of the database.
        </p>
        <ul>
          <li><strong>Range Based Sharding:</strong> Data is split based on a range of values (e.g., Users A-M on Shard 1, N-Z on Shard 2). Can lead to hotspots.</li>
          <li><strong>Hash Based Sharding:</strong> A hash function determines the shard. Evens out data distribution but makes range queries difficult.</li>
        </ul>
        <div className="callout callout-warning">
          <strong>Warning:</strong> Sharding adds immense complexity to your application (joins across shards, distributed transactions). Only use when vertical scaling and replication are no longer sufficient.
        </div>
      </Subsection>

      <Subsection id="sd-db-caching" title="2.3 Caching Strategies">
        <p>
          Caching stores frequently accessed data in fast-access hardware (like RAM) to reduce latency and database load. Redis and Memcached are popular tools.
        </p>
        <h4>Common Eviction Policies:</h4>
        <ul>
          <li><strong>LRU (Least Recently Used):</strong> Discards the least recently used items first.</li>
          <li><strong>LFU (Least Frequently Used):</strong> Discards the least frequently used items first.</li>
          <li><strong>FIFO (First In First Out):</strong> Discards the oldest items first.</li>
        </ul>
        <h4>Common Caching Patterns:</h4>
        <ul>
          <li><strong>Cache-Aside:</strong> Application checks cache; if miss, fetches from DB and updates cache.</li>
          <li><strong>Write-Through:</strong> Application writes to cache, which synchronously writes to DB. High write latency, high read consistency.</li>
          <li><strong>Write-Behind (Write-Back):</strong> Application writes to cache, which asynchronously writes to DB. Low write latency, risk of data loss.</li>
        </ul>
      </Subsection>
    </Section>
  );
}
