import { Navigate, Route, Routes } from 'react-router';

import { BrowserRouter as Router } from 'react-router-dom';
import StartJobsHome from '../StartJobsHome';
import Dashboard from '../Dashboard';
import Candidaturas from '../candidaturas';



const AppRouter = () => {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<StartJobsHome />} />
        <Route path='/candidaturas' element={<Candidaturas />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;