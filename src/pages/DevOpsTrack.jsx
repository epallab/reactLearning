import Layout from '../components/Layout/Layout';
import CoverPage from '../components/Content/CoverPage';
import { devOpsChapters } from '../data/devOpsChapters';

// We'll import these chapters once we create them
import DOChapter1 from './devops/DOChapter1';
import DOChapter2 from './devops/DOChapter2';
import DOChapter3 from './devops/DOChapter3';
import DOChapter4 from './devops/DOChapter4';
import DOChapter5 from './devops/DOChapter5';
import DOChapter6 from './devops/DOChapter6';
import DOChapter7 from './devops/DOChapter7';
import DOChapter8 from './devops/DOChapter8';
import DOChapter9 from './devops/DOChapter9';

export default function DevOpsTrack() {
  const brandConfig = {
    title: 'DevOps',
    logo: '♾️',
    gradient: 'linear-gradient(90deg, #f59e0b, #d97706)',
    themeColor: 'amber'
  };

  const coverConfig = {
    title: 'DevOps & Infrastructure Guide',
    subtitle: 'From code to cloud',
    description: 'Master the art of shipping software reliably. Learn Linux, Docker, Kubernetes, CI/CD pipelines, and Infrastructure as Code to build resilient platforms.',
    meta: ['Containers', 'Kubernetes', 'CI/CD', 'Cloud'],
    theme: 'amber'
  };

  return (
    <Layout chapters={devOpsChapters} brand={brandConfig}>
      <CoverPage config={coverConfig} />
      <DOChapter1 />
      <DOChapter2 />
      <DOChapter3 />
      <DOChapter4 />
      <DOChapter5 />
      <DOChapter6 />
      <DOChapter7 />
      <DOChapter8 />
      <DOChapter9 />
    </Layout>
  );
}
