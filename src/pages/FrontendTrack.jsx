import Layout from '../components/Layout/Layout';
import CoverPage from '../components/Content/CoverPage';
import TableOfContents from '../components/Content/TableOfContents';
import Footer from '../components/Content/Footer';
import Chapter1 from './Chapter1';
import Chapter2 from './Chapter2';
import Chapter3 from './Chapter3';
import Chapter4 from './Chapter4';
import Chapter5 from './Chapter5';
import Chapter6 from './Chapter6';
import Chapter7 from './Chapter7';
import Chapter8 from './Chapter8';
import Chapter9 from './Chapter9';
import Chapter10 from './Chapter10';
import { chapters } from '../data/chapters';

const brandConfig = {
  icon: 'react',
  title: 'React.js Developer',
  subtitle: 'Comprehensive Guide',
  accent: '#61dafb',
};

const coverConfig = {
  badge: 'Professional Reference Guide',
  title: 'React.js Frontend Developer',
  subtitle:
    'A practical field guide for building scalable React interfaces, integrating real APIs, improving performance, and preparing for frontend interviews.',
  accent: 'cyan',
  firstChapterId: 'chapter-1',
};

export default function FrontendTrack() {
  return (
    <Layout chapters={chapters} brandConfig={brandConfig}>
      <CoverPage chapters={chapters} config={coverConfig} />
      <TableOfContents chapters={chapters} />
      <Chapter1 />
      <Chapter2 />
      <Chapter3 />
      <Chapter4 />
      <Chapter5 />
      <Chapter6 />
      <Chapter7 />
      <Chapter8 />
      <Chapter9 />
      <Chapter10 />
      <Footer chapters={chapters} trackName="React.js Frontend Developer" />
    </Layout>
  );
}
