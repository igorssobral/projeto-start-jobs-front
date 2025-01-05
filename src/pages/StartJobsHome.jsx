/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from 'react';
import {
  Home,
  UserCircle2,
  UserPlus,
  Box,
  Globe,
  Brain,
  FileText,
  Sun,
  Moon,
  MenuIcon,
  Menu,
  // Clock,
  // X,
  // BarChart2,
} from 'lucide-react';
import { FaGoogle } from 'react-icons/fa';
import logo from '../assets/logo2x.png';
import Modal from '../components/Modal';
import Candidaturas from './candidaturas';
import Dashboard from './Dashboard';
import DicasCV from './DicasCV';
import VagasEmAlta from './VagasEmAlta';
const StartJobsHome = () => {
  const [darkMode, setDarkMode] = useState();
  //   () => {
  //   return window.matchMedia('(prefers-color-scheme: dark)').matches;
  // }
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

  useEffect(() => {
    const root = window.document.documentElement;

    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => setDarkMode(e.matches);

    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [darkMode]);

  let handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

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
    <div className='max-h-screen bg-gray-50 dark:bg-[#1F1E25]'>
      {/* Sidebar */}
      <aside
        className={`${
          openMenu
            ? 'translate-x-0 opacity-100'
            : '-translate-x-full xs:opacity-0'
        } md:translate-x-0 fixed left-0 top-0 h-screen w-64 bg-white dark:bg-[#0C0B10] shadow-lg flex flex-col transition-all duration-300 ease-in-out`}
      >
        {/* Header1 */}
        {/* <Header1/>
        <Nav/>
        <ModeLigthdark/> */}

        <div className='p-6'>
          <div className='flex items-center space-x-2'>
            <div className='text-blue-500 text-3xl'>
              <img src={logo} alt='Logo' width='50' height='50' />
            </div>
            <div className='text-blue-500 font-bold text-xl'>Start Jobs</div>

            <button onClick={handleOpenMenu}>
              <Menu className='absolute top-10 right-2 md:hidden dark:text-zinc-50' />
            </button>
          </div>
        </div>
        <div className='border-b  w-[85%] mx-auto border-zinc-500/70 my-4' />

        {/* Navigation  */}
        <nav className='flex-1 px-4 space-y-1 '>
          <button
            onClick={handleShowHome}
            // href='#'
            className={`w-full flex items-center space-x-3 transition-colors duration-300 ${
              !showModalLogin &&
              !showModalRegister &&
              !showModalRecoveryPassword &&
              !showCandidaturasPage &&
              !showDashboardPage &&
              !showDicasCvPage &&
              !showVagasEmAltaPage
                ? 'bg-blue-500 text-white'
                : `text-gray-600 ${
                    darkMode
                      ? 'text-zinc-400 hover:bg-zinc-900'
                      : 'hover:bg-gray-50'
                  }`
            }   px-4 py-3 rounded-lg`}
          >
            <Home size={20} />
            <span>Home</span>
          </button>

          <button
            onClick={handleShowModal}
            className={`w-full flex items-center space-x-3 transition-colors duration-300 ${
              showModalLogin
                ? 'bg-blue-500 text-white'
                : `text-gray-600 ${
                    darkMode
                      ? 'text-zinc-400 hover:bg-zinc-900'
                      : 'hover:bg-gray-50'
                  }`
            } px-4 py-3  rounded-lg`}
          >
            <UserCircle2 size={20} />
            <span>Login</span>
          </button>

          <button
            onClick={handleShowModalRegister}
            className={`w-full flex items-center space-x-3 transition-colors duration-300 ${
              showModalRegister
                ? 'bg-blue-500 text-white'
                : `text-gray-600 ${
                    darkMode
                      ? 'text-zinc-400 hover:bg-zinc-900'
                      : 'hover:bg-gray-50'
                  }`
            }  px-4 py-3  rounded-lg`}
          >
            <UserPlus size={20} />
            <span>Register</span>
          </button>
          <button
            onClick={handleShowCandidaturas}
            // href='/candidaturas'
            className={`w-full flex items-center space-x-3 text-gray-600 px-4 py-3 rounded-lg transition-colors duration-300
            ${
              showCandidaturasPage
                ? 'bg-blue-500 text-white'
                : `text-gray-600 ${
                    darkMode
                      ? 'text-zinc-400 hover:bg-zinc-900'
                      : 'hover:bg-gray-50'
                  }`
            }`}
          >
            <Box size={20} />
            <span>Candidaturas</span>
          </button>
          <button
            onClick={handleShowDasboard}
            // href='/dashboard'
            className={`w-full flex items-center space-x-3 text-gray-600 px-4 py-3  rounded-lg transition-colors duration-300  ${
              showDashboardPage
                ? 'bg-blue-500 text-white'
                : `text-gray-600 ${
                    darkMode
                      ? 'text-zinc-400 hover:bg-zinc-900'
                      : 'hover:bg-gray-50'
                  }`
            }`}
          >
            <Globe size={20} />
            <span>Dashboard</span>
          </button>
          <button
            onClick={handleShowDicasCv}
            className={`w-full flex items-center space-x-3 text-gray-600 px-4 py-3 rounded-lg transition-colors duration-300 ${
              showDicasCvPage
                ? 'bg-blue-500 text-white'
                : `text-gray-600 ${
                    darkMode
                      ? 'text-zinc-400 hover:bg-zinc-900'
                      : 'hover:bg-gray-50'
                  }`
            }`}
          >
            <Brain size={20} />
            <span>Dicas CV</span>
          </button>
          <button
            onClick={handleShowVagasEmAlta}
            className={` w-full flex items-center space-x-3 text-gray-600 px-4 py-3  rounded-lg transition-colors duration-300 ${
              showVagasEmAltaPage
                ? 'bg-blue-500 text-white'
                : `text-gray-600 ${
                    darkMode
                      ? 'text-zinc-400 hover:bg-zinc-900'
                      : 'hover:bg-gray-50'
                  }`
            }`}
          >
            <FileText size={20} />
            <span>Vagas em alta</span>
          </button>
        </nav>

        {/* Theme Toggle */}
        <div className='p-4'>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`flex items-center space-x-3 text-gray-600 px-4 py-3  rounded-lg w-full transition-colors duration-300 ${
              darkMode
                ? 'bg-blue-500 text-white hover:bg-blue-600'
                : 'hover:bg-gray-50'
            }`}
          >
            {darkMode ? <Moon size={20} /> : <Sun size={20} />}
            <span>{darkMode ? 'Dark Mode' : 'Light Mode'}</span>
          </button>
        </div>

        {/* Export Section */}
        {/* <div className='p-4 border-t'>
          <div className='text-gray-500 mb-2'>Export</div>
          <div className='flex space-x-4'>
            <button className='p-2 hover:bg-gray-100 rounded'>
              <FileText size={20} className='text-gray-500' />
            </button>
            <button className='p-2 hover:bg-gray-100 rounded'>
              <BarChart2 size={20} className='text-gray-500' />
            </button>
            <button className='p-2 hover:bg-gray-100 rounded'>
              <Clock size={20} className='text-gray-500' />
            </button>
          </div>
          <div className='flex space-x-4 mt-2'>
            <button className='p-2 hover:bg-gray-100 rounded'>
              <Clock size={20} className='text-gray-500' />
            </button>
            <button className='p-2 hover:bg-gray-100 rounded'>
              <X size={20} className='text-gray-500' />
            </button>
            <button className='p-2 hover:bg-gray-100 rounded'>
              <BarChart2 size={20} className='text-gray-500' />
            </button>
          </div>
        </div> */}
      </aside>

      {/* Main Content */}
      {showHomePage && (
        <main className='ml-0 md:ml-64 p-8 h-dvh'>
          <button
            onClick={handleOpenMenu}
            className='md:hidden dark:text-zinc-50'
          >
            <MenuIcon />
          </button>
          <div className='mb-8 flex items-center justify-between'>
            <div>
              <h1 className='text-2xl font-medium dark:text-[#FAFAF9]'>
                Start Jobs
              </h1>
              <p className='text-gray-500 dark:text-zinc-400'>
                Gerenciamento de perfis | 2024-2025
              </p>
            </div>
            <h1 className='text-base md:text-xl font-normal dark:text-[#FAFAF9]'>
              Bem vindo, nome
            </h1>
          </div>

          {/* Grid Layout */}
          <div className='grid grid-cols-3 gap-6'>
            {/* Row 1 */}
            <div className='col-span-3 md:col-span-1 bg-white rounded-lg shadow-sm h-96 dark:bg-[#151419]'></div>
            <div className='col-span-3 md:col-span-2  bg-white rounded-lg shadow-sm h-96 dark:bg-[#151419]'></div>

            {/* Row 2 */}
            <div className='col-span-3 md:col-span-2 bg-white rounded-lg shadow-sm h-96 dark:bg-[#151419]'></div>
            <div className='col-span-3 md:col-span-1 bg-white rounded-lg shadow-sm h-96 dark:bg-[#151419]'></div>
          </div>
        </main>
      )}

      {showCandidaturasPage && <Candidaturas showMenu={handleOpenMenu} />}
      {showDashboardPage && <Dashboard showMenu={handleOpenMenu} />}
      {showDicasCvPage && <DicasCV showMenu={handleOpenMenu} />}
      {showVagasEmAltaPage && <VagasEmAlta showMenu={handleOpenMenu} />}

      {/* {showModalLogin && <TelaLogin show={showModalLogin}/>} */}

      {/* modal login */}
      <Modal isVisible={showModalLogin}>
        <div className='py-6 px-6 lg:8 text-left relative'>
          <button
            className='text-xl absolute px-7 right-0 top-6 text-blue-600 hover:text-zinc-50 transition-colors'
            onClick={() => handleCloseModal()}
          >
            X
          </button>

          <h3 class='mb-4 text-2xl font-medium text-gray-900  dark:text-white '>
            Faça login pra entrar na plataforma
          </h3>
          <form class='space-y-6' action='#'>
            <div>
              <label
                for='email'
                class='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
                Seu email
              </label>
              <input
                type='email'
                name='email'
                id='email'
                className='bg-gray-50 border border-gray-300
        text-gray-900 text-sm rounded-lg focus:ring-blue-500
        focus:border-blue-500 block w-full p-2.5 dark:border-zinc-700 dark:bg-[#151419] dark:text-zinc-300'
                placeholder='name@company.com'
                required
              />
            </div>
            <div>
              <label
                for='password'
                class='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
                Sua senha
              </label>
              <input
                type='password'
                name='password'
                id='password'
                placeholder='*********'
                className='bg-gray-50 border border-gray-300
        text-gray-900 text-sm rounded-lg focus:ring-blue-500
        focus:border-blue-500 block w-full p-2.5 dark:border-zinc-700 dark:bg-[#151419] dark:text-zinc-300'
                required
              />
            </div>
            <div className='flex justify-between'>
              <div className='flex items-start'>
                <div className='flex items-center h-5'>
                  <input
                    id='remember'
                    type='checkbox'
                    value=' '
                    className='w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300'
                    required
                  />
                </div>
                <label
                  for='remember'
                  className='ml-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Lembrar?
                </label>
              </div>
              <button
                onClick={handleShowModalRecoveryPassword}
                className='text-sm text-blue-700
      hover:underline'
              >
                Esqueceu a senha?
              </button>
            </div>
            <button
              type='submit'
              className='w-full text-white bg-blue-700 hover:bg-blue-800 transition-colors focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
            >
              Entrar
            </button>
            <button
              type='submit'
              className='flex justify-center items-center gap-2 w-full text-white bg-blue-400 hover:bg-blue-600 transition-colors focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
            >
              <FaGoogle /> Entrar com o Google
            </button>
          </form>
        </div>
      </Modal>

      {/* modal registro  */}
      <Modal isVisible={showModalRegister}>
        <div className='py-6 px-6 lg:8 text-left relative'>
          <button
            className='text-xl absolute px-7 right-0 top-6 text-blue-600 hover:text-zinc-50 transition-colors'
            onClick={() => handleCloseModalRegister()}
          >
            X
          </button>

          <h3 class='mb-4 text-2xl font-medium text-gray-900 dark:text-white'>
            Cadastrar-se
          </h3>
          <form class='space-y-6' action='#'>
            <div>
              <label
                for='nome'
                class='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
                Nome
              </label>

              <input
                type='text'
                name='nome'
                id='nome'
                className='bg-gray-50 border border-gray-300
        text-gray-900 text-sm rounded-lg focus:ring-blue-500
        focus:border-blue-500 block w-full p-2.5 dark:border-zinc-700 dark:bg-[#151419] dark:text-zinc-300'
                placeholder='Fulano'
                required
              />
            </div>
            {/* <div>
              <label
                for='endereco'
                class='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
                Endereço
              </label>

              <input
                type='text'
                name='endereco'
                id='endereco'
                className='bg-gray-50 border border-gray-300
        text-gray-900 text-sm rounded-lg focus:ring-blue-500
        focus:border-blue-500 block w-full p-2.5 dark:border-zinc-700 dark:bg-[#151419] dark:text-zinc-300'
                placeholder='Rua.'
                required
              />
            </div> */}
            <div>
              <label
                for='phone'
                class='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
                Telefone
              </label>
              <input
                type='tel'
                name='phone'
                id='phone'
                className='bg-gray-50 border border-gray-300
        text-gray-900 text-sm rounded-lg focus:ring-blue-500
        focus:border-blue-500 block w-full p-2.5 dark:border-zinc-700 dark:bg-[#151419] dark:text-zinc-300'
                placeholder='(XX) XXXXX-XXXX'
                required
              />
            </div>
            <div>
              <label
                for='email'
                class='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
                Seu email
              </label>
              <input
                type='email'
                name='email'
                id='email'
                className='bg-gray-50 border border-gray-300
        text-gray-900 text-sm rounded-lg focus:ring-blue-500
        focus:border-blue-500 block w-full p-2.5 dark:border-zinc-700 dark:bg-[#151419] dark:text-zinc-300'
                placeholder='name@company.com'
                required
              />
            </div>
            <div>
              <label
                for='password'
                class='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
                Sua senha
              </label>
              <input
                type='password'
                name='password'
                id='password'
                placeholder='*********'
                className='bg-gray-50 border border-gray-300
        text-gray-900 text-sm rounded-lg focus:ring-blue-500
        focus:border-blue-500 block w-full p-2.5 dark:border-zinc-700 dark:bg-[#151419] dark:text-zinc-300'
                required
              />
            </div>
            <div>
              <label
                for='password'
                class='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
                Confirme sua senha
              </label>
              <input
                type='password'
                name='password'
                id='password'
                placeholder='*********'
                className='bg-gray-50 border border-gray-300
        text-gray-900 text-sm rounded-lg focus:ring-blue-500
        focus:border-blue-500 block w-full p-2.5 dark:border-zinc-700 dark:bg-[#151419] dark:text-zinc-300'
                required
              />
            </div>
            <div className='flex justify-between'>
              <div className='flex items-start'>
                <div className='flex items-center h-5'>
                  <input
                    id='remember'
                    type='checkbox'
                    value=' '
                    className='w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300'
                    required
                  />
                </div>
                <label
                  for='remember'
                  className='ml-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Criar sua conta e aceitar os{' '}
                  <a className='text-blue-500 cursor-pointer hover:underline'>
                    termos e condições
                  </a>
                </label>
              </div>
              {/* <a href="#" className='text-sm text-blue-700
      hover:underline'>
        Esqueceu a senha?
      </a> */}
            </div>
            <button
              type='submit'
              className='w-full text-white bg-blue-700 hover:bg-blue-800 transition-colors focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
            >
              Cadastrar
            </button>
            <button
              type='submit'
              className='flex justify-center items-center gap-2 w-full text-white bg-blue-400 hover:bg-blue-600 transition-colors  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
            >
              <FaGoogle /> Registrar-se com o Google
            </button>
          </form>
        </div>
      </Modal>

      {/* modal recuperar senha */}
      <Modal
        isVisible={showModalRecoveryPassword}
        onClose={() => handleCloseModalRecoveryPassword()}
      >
        <div className='py-6 px-6 lg:8 text-left relative'>
          <button
            className='text-xl absolute px-7 right-0 top-6 text-blue-600'
            onClick={() => handleCloseModalRecoveryPassword()}
          >
            X
          </button>

          <h3 class='mb-1 text-2xl font-medium text-gray-900 dark:text-white '>
            Digite seu email de recuperação
          </h3>
          <h3 class='mb-4 text-sm font-normal text-zinc-500 dark:text-zinc-300'>
            Será enviado um email com um link de redefiniçào de senha!
          </h3>
          <form class='space-y-6' action='#'>
            <div>
              <label
                for='email'
                class='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
                Seu email
              </label>
              <input
                type='email'
                name='email'
                id='email'
                className='bg-gray-50 border border-gray-300
        text-gray-900 text-sm rounded-lg focus:ring-blue-500
        focus:border-blue-500 block w-full p-2.5 dark:border-zinc-700 dark:bg-[#151419] dark:text-zinc-300'
                placeholder='name@company.com'
                required
              />
            </div>

            <button
              type='submit'
              className='w-full text-white bg-blue-700 hover:bg-blue-800 transition-colors focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
            >
              Enviar
            </button>
            {/* <button
              type='submit'
              className='flex justify-center items-center gap-2 w-full text-white bg-blue-400 hover:bg-blue-600 transition-colors border focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
            >
              <FaGoogle /> Cancelar
            </button> */}
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default StartJobsHome;
