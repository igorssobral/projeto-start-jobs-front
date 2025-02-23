import { Navigate, Route, Routes } from "react-router";

import { BrowserRouter as Router } from "react-router-dom";
import StartJobsHome from "../StartJobsHome";
import Dashboard from "../Dashboard";
import Candidaturas from "../candidaturas";
import DicasCV from "../DicasCV";
import VagasEmAlta from "../VagasEmAlta";
import ResetPassword from '../ResetPassword';

const AppRouter = () => {
  return (
  
        <Router>
          <Routes>
            <Route path="/" element={<StartJobsHome />} />
            <Route path="/candidaturas" element={<Candidaturas />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/Dicas" element={<DicasCV />} />
            <Route path="/vagas" element={<VagasEmAlta />} />
            <Route path="/reset-password" element={<ResetPassword />} />

          </Routes>
        </Router>

  );
};

export default AppRouter;
