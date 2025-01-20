/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from 'react';
import logo from '../assets/logo2x.png';
import Home from './Home';
import Candidaturas from './candidaturas';
import Dashboard from './Dashboard';
import DicasCV from './DicasCV';
import VagasEmAlta from './VagasEmAlta';
import ModalLogin from '../components/ModalLogin';
import ModalRegistro from '../components/ModalRegistro';
import ModalRecoveryPassword from '../components/ModalRecoveryPassword';
import SideBar from '../components/SideBar';
import { getJobs } from '../services/jobsService';

const StartJobsHome = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [showModalLogin, setShowModalLogin] = useState(false);
  const [showModalRegister, setShowModalRegister] = useState(false);
  const [showModalRecoveryPassword, setShowModalRecoveryPassword] =
    useState(false);
  const [showHomePage, setShowHomePage] = useState(true);
  const [showCandidaturasPage, setShowCandidaturasPage] = useState(false);
  const [showDashboardPage, setShowDashboardPage] = useState(false);
  const [showDicasCvPage, setShowDicasCvPage] = useState(false);
  const [showVagasEmAltaPage, setShowVagasEmAltaPage] = useState(false);

  let handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  useEffect(() => {
    async function Jobs() {
      const response = await getJobs();
      console.log('🚀 ~ Jobs ~ response:', response);
    }
    Jobs();
  }, []);

  let handleShowHome = () => {
    setShowHomePage(true);
    handleCloseCandidaturas();
    handleCloseDasboard();
    handleCloseDicasCv();
    handleCloseVagasEmAlta();
    handleOpenMenu();
  };

  let handleCloseHome = () => {
    setShowHomePage(false);
  };

  let handleShowCandidaturas = () => {
    setShowCandidaturasPage(true);
    handleCloseHome();
    handleCloseDasboard();
    handleCloseDicasCv();
    handleCloseVagasEmAlta();
    handleOpenMenu();
  };

  let handleCloseCandidaturas = () => {
    setShowCandidaturasPage(false);
  };
  let handleShowDasboard = () => {
    setShowDashboardPage(true);
    handleCloseHome();
    handleCloseCandidaturas();
    handleCloseDicasCv();
    handleCloseVagasEmAlta();
    handleOpenMenu();
  };

  let handleCloseDasboard = () => {
    setShowDashboardPage(false);
  };
  let handleShowDicasCv = () => {
    setShowDicasCvPage(true);
    handleCloseHome();
    handleCloseDasboard();
    handleCloseCandidaturas();
    handleCloseVagasEmAlta();
    handleOpenMenu();
  };

  let handleCloseDicasCv = () => {
    setShowDicasCvPage(false);
  };
  let handleShowVagasEmAlta = () => {
    setShowVagasEmAltaPage(true);
    handleCloseHome();
    handleCloseDasboard();
    handleCloseCandidaturas();
    handleCloseDicasCv();
    handleOpenMenu();
  };

  let handleCloseVagasEmAlta = () => {
    setShowVagasEmAltaPage(false);
  };

  let handleShowModal = () => {
    setShowModalLogin(true);
    handleCloseHome();
    handleCloseCandidaturas();
    handleCloseDasboard();
    handleCloseDicasCv();
    handleCloseVagasEmAlta();
  };

  let handleCloseModal = () => {
    setShowModalLogin(false);
    handleShowHome();
  };
  let handleShowModalRegister = () => {
    setShowModalRegister(true);
    handleCloseHome();
    handleCloseCandidaturas();
    handleCloseDasboard();
    handleCloseDicasCv();
    handleCloseVagasEmAlta();
  };

  let handleCloseModalRegister = () => {
    setShowModalRegister(false);
    handleShowHome();
  };
  let handleShowModalRecoveryPassword = () => {
    setShowModalRecoveryPassword(true);
    handleCloseHome();
    handleCloseCandidaturas();
    handleCloseDasboard();
    handleCloseDicasCv();
    handleCloseVagasEmAlta();
    handleOpenMenu();
  };

  let handleCloseModalRecoveryPassword = () => {
    setShowModalRecoveryPassword(false);
    handleShowHome();
  };

  return (
    <div className='min-h-screen bg-slate-100 transition-colors dark:bg-[#1F1E25] rounded-2xl  overflow-hidden'>
      {/* <div className='max-h-screen bg-gray-50 dark:bg-[#1F1E25]'> */}
      {/* Sidebar */}
      <SideBar
        openMenu={openMenu}
        logo={logo}
        handleOpenMenu={handleOpenMenu}
        handleShowHome={handleShowHome}
        handleShowModal={handleShowModal}
        handleShowModalRegister={handleShowModalRegister}
        handleShowCandidaturas={handleShowCandidaturas}
        handleShowDasboard={handleShowDasboard}
        handleShowDicasCv={handleShowDicasCv}
        handleShowVagasEmAlta={handleShowVagasEmAlta}
        showModalLogin={showModalLogin}
        showModalRegister={showModalRegister}
        showModalRecoveryPassword={showModalRecoveryPassword}
        showCandidaturasPage={showCandidaturasPage}
        showDashboardPage={showDashboardPage}
        showDicasCvPage={showDicasCvPage}
        showVagasEmAltaPage={showVagasEmAltaPage}
      />

      {showHomePage && <Home showMenu={handleOpenMenu} />}

      {showCandidaturasPage && <Candidaturas showMenu={handleOpenMenu} />}
      {showDashboardPage && <Dashboard showMenu={handleOpenMenu} />}
      {showDicasCvPage && <DicasCV showMenu={handleOpenMenu} />}
      {showVagasEmAltaPage && <VagasEmAlta showMenu={handleOpenMenu} />}

      <ModalLogin
        isVisible={showModalLogin}
        handleClose={handleCloseModal}
        showRecoveryPassword={handleShowModalRecoveryPassword}
      />

      <ModalRegistro
        isVisible={showModalRegister}
        handleClose={handleCloseModalRegister}
      />

      <ModalRecoveryPassword
        isVisible={showModalRecoveryPassword}
        handleClose={handleCloseModalRecoveryPassword}
      />
    </div>
  );
};

export default StartJobsHome;
