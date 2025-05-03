import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';
import Quiz from './pages/Quiz';
import ProgramDetail from './pages/ProgramDetail';
import ParentPortal from './pages/ParentPortal';

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/program/:id" element={<ProgramDetail />} />
        <Route path="/parents" element={<ParentPortal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
