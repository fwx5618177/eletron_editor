import {
  BrowserRouter as Router,
  // MemoryRouter as Router,
  Routes,
  Route,
  Outlet,
  Navigate,
} from 'react-router-dom';
import './App.css';
import Dash from './pages/dashboard/dash';
import TextEditor from './pages/dashboard/text';
import Layout from './pages/layout';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<Layout />} />
          <Route path="/dashboard" element={<Dash />}>
            <Route index element={<Navigate to="/dashboard/text" />} />
            <Route path="text" element={<TextEditor />} />
          </Route>
          <Route path="*" element="404" />
        </Route>
      </Routes>
    </Router>
  );
}
