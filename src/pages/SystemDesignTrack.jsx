import Layout from '../components/Layout/Layout';
import CoverPage from '../components/Content/CoverPage';
import TableOfContents from '../components/Content/TableOfContents';
import Footer from '../components/Content/Footer';
import { systemDesignChapters } from '../data/systemDesignChapters';

import SDChapter1 from './systemdesign/SDChapter1';
import SDChapter2 from './systemdesign/SDChapter2';
import SDChapter3 from './systemdesign/SDChapter3';
import SDChapter4 from './systemdesign/SDChapter4';
import SDChapter5 from './systemdesign/SDChapter5';

export default function SystemDesignTrack() {
  const brandConfig = {
    title: 'System Design',
    icon: 'systemdesign', // Will fall back to a default if not found in CoverPage logo map
    gradient: 'linear-gradient(90deg, #8b5cf6, #c084fc)',
    themeColor: 'purple'
  };

  const coverConfig = {
    badge: 'Architect & Engineer',
    title: 'System Design',
    subtitle: 'Learn how to architect large-scale distributed systems',
    description: 'Master the fundamentals of scalability, databases, microservices, and prepare for system design interviews.',
    meta: ['Architecture', 'Scalability', 'Databases', 'Interviews'],
    accent: 'purple',
    firstChapterId: 'sd-chapter-1'
  };

  return (
    <Layout chapters={systemDesignChapters} brand={brandConfig}>
      <CoverPage chapters={systemDesignChapters} config={coverConfig} />
      <TableOfContents chapters={systemDesignChapters} />
      <SDChapter1 />
      <SDChapter2 />
      <SDChapter3 />
      <SDChapter4 />
      <SDChapter5 />
      <Footer chapters={systemDesignChapters} trackName="System Design Guide" />
    </Layout>
  );
}
