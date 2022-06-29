import {
  MemoryRouter as Router,
  Routes,
  Route,
  Outlet,
} from 'react-router-dom';
import './App.css';
import Layout from './pages/layout';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<Layout />} />
          <Route path="dashboard" element={<>2</>} />
        </Route>
      </Routes>
    </Router>
  );
}
