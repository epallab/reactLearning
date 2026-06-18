import Layout from '../components/Layout/Layout';
import CoverPage from '../components/Content/CoverPage';
import TableOfContents from '../components/Content/TableOfContents';
import Footer from '../components/Content/Footer';
import SBChapter1 from './springboot/SBChapter1';
import SBChapter2 from './springboot/SBChapter2';
import SBChapter3 from './springboot/SBChapter3';
import SBChapter4 from './springboot/SBChapter4';
import SBChapter5 from './springboot/SBChapter5';
import SBChapter6 from './springboot/SBChapter6';
import SBChapter7 from './springboot/SBChapter7';
import SBChapter8 from './springboot/SBChapter8';
import SBChapter9 from './springboot/SBChapter9';
import SBChapter10 from './springboot/SBChapter10';
import SBChapter11 from './springboot/SBChapter11';
import SBChapter12 from './springboot/SBChapter12';
import { springBootChapters } from '../data/springBootChapters';

const brandConfig = {
  icon: 'spring',
  title: 'Spring Boot Developer',
  subtitle: 'Comprehensive Guide',
  accent: '#6db33f',
};

const coverConfig = {
  badge: 'Professional Reference Guide',
  title: 'Java Spring Boot Backend Developer',
  subtitle:
    'A comprehensive guide to building production-grade REST APIs, mastering Spring Security, JPA, microservices, testing, and deploying with Docker & Kubernetes.',
  accent: 'green',
  firstChapterId: 'sb-chapter-1',
};

export default function BackendTrack() {
  return (
    <Layout chapters={springBootChapters} brandConfig={brandConfig}>
      <CoverPage chapters={springBootChapters} config={coverConfig} />
      <TableOfContents chapters={springBootChapters} />
      <SBChapter1 />
      <SBChapter2 />
      <SBChapter3 />
      <SBChapter4 />
      <SBChapter5 />
      <SBChapter6 />
      <SBChapter7 />
      <SBChapter8 />
      <SBChapter9 />
      <SBChapter10 />
      <SBChapter11 />
      <SBChapter12 />
      <Footer chapters={springBootChapters} trackName="Java Spring Boot Backend Developer" />
    </Layout>
  );
}
