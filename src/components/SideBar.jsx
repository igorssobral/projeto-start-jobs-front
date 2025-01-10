/* eslint-disable react/prop-types */
import {
  Box,
  Brain,
  FileText,
  Globe,
  Home,
  Menu,
  Moon,
  Sun,
  UserCircle2,
  UserPlus,
} from 'lucide-react';
import { useEffect, useState } from 'react';

const SideBar = ({
  openMenu,
  logo,
  handleOpenMenu,
  handleShowHome,
  handleShowModal,
  handleShowModalRegister,
  handleShowCandidaturas,
  handleShowDasboard,
  handleShowDicasCv,
  handleShowVagasEmAlta,
  showModalLogin,
  showModalRegister,
  showModalRecoveryPassword,
  showCandidaturasPage,
  showDashboardPage,
  showDicasCvPage,
  showVagasEmAltaPage,
}) => {
    const [darkMode, setDarkMode] = useState();
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
   
  return (
    <>
      <aside
        className={`${
          openMenu
            ? 'translate-x-0 opacity-100'
            : '-translate-x-full xs:opacity-0'
        } md:translate-x-0 fixed left-0 top-0 h-screen w-64 bg-white dark:bg-[#0C0B10] shadow-lg flex flex-col transition-all duration-300 ease-in-out`}
      >
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
      </aside>
    </>
  );
};
export default SideBar;
