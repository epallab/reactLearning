import Layout from './components/Layout/Layout';
import CoverPage from './components/Content/CoverPage';
import TableOfContents from './components/Content/TableOfContents';
import Footer from './components/Content/Footer';
import Chapter1 from './pages/Chapter1';
import Chapter2 from './pages/Chapter2';
import Chapter3 from './pages/Chapter3';
import Chapter4 from './pages/Chapter4';
import Chapter5 from './pages/Chapter5';
import Chapter6 from './pages/Chapter6';
import Chapter7 from './pages/Chapter7';
import Chapter8 from './pages/Chapter8';
import Chapter9 from './pages/Chapter9';
import Chapter10 from './pages/Chapter10';
import { chapters } from './data/chapters';

export default function App() {
  return (
    <Layout>
      <CoverPage />
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
      <Footer />
    </Layout>
  );
}
