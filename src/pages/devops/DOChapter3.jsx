import Section from '../../components/Content/Section';
import Subsection from '../../components/Content/Subsection';
import CodeBlock from '../../components/UI/CodeBlock';
import InfoBox from '../../components/UI/InfoBox';

export default function DOChapter3() {
  return (
    <Section id="version-control" number={3} title="Git & Version Control" theme="amber">
      <p>
        Git is the foundation of GitOps and CI/CD. Infrastructure as Code (IaC) requires all infrastructure definitions to be version-controlled, meaning Git is no longer just for software developers—it is mandatory for operations as well.
      </p>

      <Subsection id="git-internals" icon="🧠" iconBg="#fef3c7" iconColor="#d97706" title="3.1 Git Internals">
        <p>
          Unlike older systems (like SVN) that store differences between files, Git thinks of its data like a stream of snapshots. Every time you commit, Git takes a snapshot of what all your files look like at that moment and stores a reference to that snapshot.
        </p>
        <p>
          Git has three main states that your files can reside in:
        </p>
        <ul>
          <li><strong>Modified:</strong> You have changed the file but have not committed it to your database yet.</li>
          <li><strong>Staged:</strong> You have marked a modified file in its current version to go into your next commit snapshot (`git add`).</li>
          <li><strong>Committed:</strong> The data is safely stored in your local database (`git commit`).</li>
        </ul>
      </Subsection>

      <Subsection id="branching-strategies" icon="🌿" iconBg="#fef3c7" iconColor="#d97706" title="3.2 Branching Strategies">
        <p>
          A branching strategy defines how a team interacts with version control to deliver software.
        </p>
        <ul>
          <li><strong>GitFlow:</strong> A complex, legacy strategy involving `master`, `develop`, `feature`, `release`, and `hotfix` branches. Best for software with strict, scheduled release cycles.</li>
          <li><strong>Trunk-Based Development:</strong> All developers commit to a single branch (`main` or `trunk`) multiple times a day. Requires robust automated testing and feature flags. This is the preferred approach for true DevOps and CI/CD.</li>
          <li><strong>GitHub Flow:</strong> A simpler alternative where `main` is always deployable. Developers create feature branches, open Pull Requests, merge to `main`, and deploy immediately.</li>
        </ul>
      </Subsection>

      <Subsection id="advanced-git" icon="🍒" iconBg="#fef3c7" iconColor="#d97706" title="3.3 Advanced Git Operations">
        <p>
          As a DevOps engineer, you will often need to fix broken commit histories or untangle messy merges.
        </p>
        
        <CodeBlock filename="Git Operations" language="bash">
{`# Interactive Rebase: allows you to squash, reorder, or edit the last 3 commits
git rebase -i HEAD~3

# Cherry-Pick: Apply a specific commit from another branch into your current branch
git cherry-pick <commit-hash>

# Stash: Temporarily save uncommitted changes so you can switch branches
git stash
# ... later, re-apply them ...
git stash pop

# Bisect: Use binary search to find the exact commit that introduced a bug
git bisect start
git bisect bad                 # Current version is bad
git bisect good <commit-hash>  # An older version you know is good`}
        </CodeBlock>
      </Subsection>
    </Section>
  );
}
