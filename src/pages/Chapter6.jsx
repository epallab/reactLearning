import Section from '../components/Content/Section';
import Subsection from '../components/Content/Subsection';
import CodeBlock from '../components/UI/CodeBlock';
import InfoBox from '../components/UI/InfoBox';
import DataTable from '../components/UI/DataTable';
import Badge from '../components/UI/Badge';
import DiagramBox, { FlowRow, FlowBox, FlowArrow } from '../components/UI/DiagramBox';

export default function Chapter6() {
  return (
    <Section
      id="version-control-git"
      number="06"
      title="Version Control with Git"
      theme="purple"
    >
      <p className="section-intro">
        Git is the backbone of modern team collaboration. Beyond simply tracking changes,
        Git enables parallel development, safe experimentation via branches, and a
        reviewable history of every decision your team makes. Mastering Git workflows
        is what separates a solo coder from a productive team contributor.
      </p>

      <h3>Git Fundamentals</h3>
      <div className="kv-grid">
        <div className="kv-item">
          <span className="kv-label">Distributed VCS</span>
          <span className="kv-value">
            Every developer has a full copy of the repository, including its entire history.
            You can commit, branch, and diff offline—no server required.
          </span>
        </div>
        <div className="kv-item">
          <span className="kv-label">Three States</span>
          <span className="kv-value">
            Files move through three stages: <strong>Working Directory</strong> (modified),
            <strong> Staging Area</strong> (indexed), and <strong>Repository</strong> (committed).
            Understanding this flow is key to every Git command.
          </span>
        </div>
        <div className="kv-item">
          <span className="kv-label">Snapshots, Not Diffs</span>
          <span className="kv-value">
            Git stores full snapshots of your project at each commit, not incremental diffs.
            This makes branching and merging extremely fast and reliable.
          </span>
        </div>
      </div>

      {/* ── Subsection 6.1 ── */}
      <Subsection
        id="git-branching-strategy"
        icon="🌿"
        iconBg="rgba(168,85,247,0.15)"
        iconColor="#a855f7"
        title="6.1 — Git Branching Strategy (Git Flow)"
      >
        <h4>Common Branching Models</h4>
        <ul className="styled-list">
          <li>
            <strong>Git Flow</strong> — Uses <code>main</code>, <code>develop</code>,
            <code>feature/*</code>, <code>release/*</code>, and <code>hotfix/*</code> branches.
            Best for projects with scheduled releases and strict QA stages.
          </li>
          <li>
            <strong>GitHub Flow</strong> — A simpler model: branch from <code>main</code>,
            open a PR, review, merge. Ideal for continuous deployment where every merge
            goes straight to production.
          </li>
          <li>
            <strong>Trunk-Based</strong> — Everyone commits to <code>main</code> (or a
            single trunk) multiple times a day using feature flags. Favored by high-velocity
            teams with strong CI/CD pipelines.
          </li>
        </ul>

        <h4>Merge vs. Rebase</h4>
        <p>
          <strong>Merge</strong> creates a merge commit preserving the full branch topology—
          great for auditing when a feature was integrated. <strong>Rebase</strong> replays
          your commits onto the tip of the target branch, producing a linear history that's
          easier to read. The golden rule: <em>never rebase commits that have been pushed
          to a shared branch</em>. Use rebase for local cleanup; use merge for integrating
          shared work.
        </p>

        <DiagramBox title="Git Flow Branching Model">
          <FlowRow>
            <FlowBox variant="primary">
              <strong>main</strong>
              <small>Production</small>
            </FlowBox>
            <FlowArrow>←</FlowArrow>
            <FlowBox variant="accent">
              <strong>develop</strong>
              <small>Integration</small>
            </FlowBox>
            <FlowArrow>←</FlowArrow>
            <FlowBox variant="success">
              <strong>feature/*</strong>
              <small>New Features</small>
            </FlowBox>
          </FlowRow>
          <FlowRow style={{ marginTop: '1rem' }}>
            <FlowBox variant="warning">
              <strong>hotfix/*</strong>
              <small>Critical Fixes</small>
            </FlowBox>
            <FlowArrow>→</FlowArrow>
            <FlowBox variant="primary">
              <strong>main</strong>
              <small>&amp; develop</small>
            </FlowBox>
          </FlowRow>
        </DiagramBox>

        <CodeBlock filename="daily-git-workflow.sh" language="Bash">
{`<span class="cm"># ── Daily Git Workflow ──</span>

<span class="cm"># 1. Start a new feature branch</span>
<span class="fn">git</span> checkout develop
<span class="fn">git</span> pull origin develop
<span class="fn">git</span> checkout <span class="op">-b</span> feature/user-dashboard

<span class="cm"># 2. Make changes and commit</span>
<span class="fn">git</span> add <span class="op">-A</span>
<span class="fn">git</span> commit <span class="op">-m</span> <span class="str">"feat(dashboard): add analytics chart component"</span>

<span class="cm"># 3. Push to remote</span>
<span class="fn">git</span> push origin feature/user-dashboard

<span class="cm"># 4. Keep up with develop (rebase for clean history)</span>
<span class="fn">git</span> fetch origin
<span class="fn">git</span> rebase origin/develop

<span class="cm"># 5. Stash work-in-progress when switching context</span>
<span class="fn">git</span> stash push <span class="op">-m</span> <span class="str">"WIP: chart tooltips"</span>
<span class="fn">git</span> stash list
<span class="fn">git</span> stash pop

<span class="cm"># 6. Review recent history</span>
<span class="fn">git</span> log <span class="op">--oneline</span> <span class="op">--graph</span> <span class="op">--all</span> <span class="op">-15</span>`}
        </CodeBlock>
      </Subsection>

      {/* ── Subsection 6.2 ── */}
      <Subsection
        id="conventional-commits"
        icon="✍️"
        iconBg="rgba(168,85,247,0.15)"
        iconColor="#a855f7"
        title="6.2 — Conventional Commits & PR Best Practices"
      >
        <h4>Commit Message Format</h4>
        <p>
          Conventional Commits follow a structured format:
          <code> type(scope): description</code>. The <strong>type</strong> tells reviewers
          <em>what kind</em> of change this is. The <strong>scope</strong> (optional)
          narrows it to a module. The <strong>description</strong> explains <em>what</em>
          changed, in imperative mood ("add" not "added"). This format enables automated
          changelogs, semantic versioning, and makes <code>git log</code> scannable.
        </p>

        <DataTable headers={['Type', 'Purpose', 'Example']}>
          <tr>
            <td><Badge variant="green">feat</Badge></td>
            <td>A new feature for the user</td>
            <td><code>feat(auth): add OAuth2 login flow</code></td>
          </tr>
          <tr>
            <td><Badge variant="red">fix</Badge></td>
            <td>A bug fix</td>
            <td><code>fix(cart): correct quantity calculation</code></td>
          </tr>
          <tr>
            <td><Badge variant="blue">refactor</Badge></td>
            <td>Code restructuring without behavior change</td>
            <td><code>refactor(api): extract fetch wrapper</code></td>
          </tr>
          <tr>
            <td><Badge variant="orange">perf</Badge></td>
            <td>Performance improvement</td>
            <td><code>perf(list): virtualize long product lists</code></td>
          </tr>
          <tr>
            <td><Badge variant="purple">test</Badge></td>
            <td>Adding or correcting tests</td>
            <td><code>test(utils): add date formatting tests</code></td>
          </tr>
          <tr>
            <td><Badge variant="blue">docs</Badge></td>
            <td>Documentation only changes</td>
            <td><code>docs(readme): update setup instructions</code></td>
          </tr>
          <tr>
            <td><Badge variant="gray">chore</Badge></td>
            <td>Build, CI, or tooling changes</td>
            <td><code>chore(deps): bump react to 18.3</code></td>
          </tr>
        </DataTable>

        <InfoBox type="tip" title="PR Review Checklist">
          <ul>
            <li>✅ Code compiles and all tests pass</li>
            <li>✅ No unnecessary console.log or debugger statements</li>
            <li>✅ Component follows existing naming conventions</li>
            <li>✅ Complex logic has inline comments explaining <em>why</em></li>
            <li>✅ Accessibility: interactive elements are keyboard-navigable</li>
            <li>✅ PR description links to the relevant Jira/Linear ticket</li>
          </ul>
        </InfoBox>
      </Subsection>
      <Subsection id="automated-checks-cicd" icon="🤖" iconBg="rgba(168,85,247,0.15)" iconColor="#a855f7" title="6.3 — Automated Checks (CI/CD)">
        <p>
          Continuous Integration (CI) and Continuous Deployment (CD) are automated processes that ensure code quality and streamline delivery. 
          As a front-end developer, you should understand how to gate your commits and PRs.
        </p>
        <ul className="styled-list">
          <li><strong>Pre-commit Hooks (Husky):</strong> Run ESLint, Prettier, and basic unit tests automatically when a developer runs <code>git commit</code>. If the checks fail, the commit is aborted.</li>
          <li><strong>GitHub Actions / GitLab CI:</strong> When a PR is opened, a remote server runs the full test suite, builds the app, and performs dependency security audits. Reviewers only review code that passes the CI pipeline.</li>
        </ul>
      </Subsection>

      <Subsection id="advanced-git-techniques" icon="🥷" iconBg="rgba(168,85,247,0.15)" iconColor="#a855f7" title="6.4 — Advanced Git Techniques">
        <p>
          Beyond commit, push, and pull, power users leverage advanced Git commands to untangle messy histories and track down bugs.
        </p>
        <CodeBlock filename="advanced-git.sh" language="Bash">
{`# ── Interactive Rebase ──
# Squash multiple messy commits into one clean commit before merging
git rebase -i HEAD~3

# ── Cherry Picking ──
# Grab a specific commit from another branch and apply it here
git cherry-pick 9fceb02

# ── Git Bisect ──
# Automatically find which commit introduced a bug using binary search
git bisect start
git bisect bad HEAD       # The bug exists now
git bisect good 4a2b6c9   # The bug didn't exist 50 commits ago
# Git will checkout a commit in the middle for you to test`}
        </CodeBlock>
      </Subsection>
    </Section>
  );
}
