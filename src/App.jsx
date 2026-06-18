import { Routes, Route } from 'react-router-dom';
import Hub from './pages/Hub';
import FrontendTrack from './pages/FrontendTrack';
import BackendTrack from './pages/BackendTrack';
import DevOpsTrack from './pages/DevOpsTrack';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Hub />} />
      <Route path="/frontend" element={<FrontendTrack />} />
      <Route path="/backend" element={<BackendTrack />} />
      <Route path="/devops" element={<DevOpsTrack />} />
    </Routes>
  );
}
