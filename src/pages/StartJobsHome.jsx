import { useState } from 'react';
import logo from '../assets/logo2x.png';
import Home from './Home';
import Dashboard from './Dashboard';
import DicasCV from './DicasCV';
import VagasEmAlta from './VagasEmAlta';
import ModalLogin from '../components/ModalLogin';
import ModalRegistro from '../components/ModalRegistro';
import ModalRecoveryPassword from '../components/ModalRecoveryPassword';
import SideBar from '../components/SideBar';
import Candidaturas from './candidaturas';

const StartJobsHome = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [activePage, setActivePage] = useState('home');
  const [activeModal, setActiveModal] = useState(null);

  const handleShowPage = (page) => {
    if (!(page === 'login' || page === 'register')) {
      setActiveModal(null);
    }
    setActivePage(page);
    setOpenMenu(false);
  };

  const handleShowModal = (modal) => {
    setActiveModal(modal);
  };

  const handleCloseModal = () => {
    setActiveModal(null);
    handleShowPage('home');
  };

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className='min-h-screen bg-slate-100 transition-colors dark:bg-[#1F1E25] rounded-2xl overflow-hidden'>
      <SideBar
        openMenu={openMenu}
        logo={logo}
        handleOpenMenu={handleOpenMenu}
        handleShowPage={handleShowPage}
        handleShowModal={handleShowModal}
        activePage={activePage}
        activeModal={activeModal}
      />

      {activePage === 'home' && <Home showMenu={handleOpenMenu} />}
      {activePage === 'candidaturas' && (
        <Candidaturas showMenu={handleOpenMenu} />
      )}
      {activePage === 'dashboard' && <Dashboard showMenu={handleOpenMenu} />}
      {activePage === 'dicasCv' && <DicasCV showMenu={handleOpenMenu} />}
      {activePage === 'vagasEmAlta' && (
        <VagasEmAlta showMenu={handleOpenMenu} />
      )}

      <ModalLogin
        isVisible={activeModal === 'login'}
        handleClose={handleCloseModal}
        showRecoveryPassword={() => handleShowModal('recoveryPassword')}
      />

      <ModalRegistro
        isVisible={activeModal === 'register'}
        handleClose={handleCloseModal}
      />

      <ModalRecoveryPassword
        isVisible={activeModal === 'recoveryPassword'}
        handleClose={handleCloseModal}
      />
    </div>
  );
};

export default StartJobsHome;
