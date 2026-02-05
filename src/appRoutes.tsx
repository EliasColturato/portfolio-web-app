import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Home from './pages/home/Home';

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
