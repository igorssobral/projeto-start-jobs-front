/* eslint-disable react/prop-types */
import {
  Box,
  Brain,
  FileText,
  Globe,
  Home,
  LogOut,
  Menu,
  Moon,
  Sun,
  UserCircle2,
  UserPlus,
  X,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { useAuth } from '../context/auth-context';

const SideBar = ({
  openMenu,
  logo,
  handleOpenMenu,
  handleShowPage,
  handleShowModal,
  activePage,
}) => {
  const [darkMode, setDarkMode] = useState(false);
  const { user, logout } = useAuth();

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

  const getButtonClass = (isActive) => {
    return `w-full flex items-center space-x-3 transition-colors duration-300 px-4 py-3 rounded-lg ${
      isActive
        ? 'bg-blue-500 text-white'
        : `text-gray-600 ${
            darkMode ? 'text-zinc-400 hover:bg-zinc-800' : 'hover:bg-gray-50'
          }`
    }`;
  };

  const navButtons = [
    { label: 'Home', icon: <Home size={24} />, page: 'home' },
    !user && { label: 'Login', icon: <UserCircle2 size={24} />, page: 'login' },
    !user && {
      label: 'Registro',
      icon: <UserPlus size={24} />,
      page: 'register',
    },
    user && {
      label: 'Candidaturas',
      icon: <Box size={24} />,
      page: 'candidaturas',
    },
    user && {
      label: 'Dashboard',
      icon: <Globe size={24} />,
      page: 'dashboard',
    },
    { label: 'Dicas de Currículo', icon: <Brain size={24} />, page: 'dicasCv' },
    {
      label: 'Vagas em Alta',
      icon: <FileText size={24} />,
      page: 'vagasEmAlta',
    },
  ];

  const filteredNavButtons = navButtons.filter(Boolean);

  const renderNavButtons = filteredNavButtons.map(({ label, icon, page }) => (
    <button
      key={page}
      onClick={() => {
        if (page === 'login' || page === 'register') {
          handleShowModal(page);
          handleShowPage(page);
        } else {
          handleShowPage(page);
        }
      }}
      className={getButtonClass(activePage === page)}
    >
      {icon}
      <span>{label}</span>
    </button>
  ));

  return (
    <aside
      className={`${
        openMenu
          ? 'translate-x-0 opacity-100'
          : '-translate-x-full xs:opacity-0'
      } md:translate-x-0 fixed left-0 top-0 h-screen w-64 bg-white dark:bg-zinc-900 shadow-lg flex flex-col z-40 transition-all rounded-2xl duration-300 ease-in-out`}
    >
      <div className='p-4 flex justify-center'>
        <div className='flex items-center space-x-2'>
          <div className='text-blue-500'>
            <img src={logo} alt='Logo' width='60' height='60' />
          </div>

          <button onClick={handleOpenMenu}>
            {openMenu ? (
              <X className='absolute top-7 right-2 md:hidden dark:text-zinc-50' />
            ) : (
              <Menu className='absolute top-7 right-2 md:hidden dark:text-zinc-50' />
            )}
          </button>
        </div>
      </div>
      {/* <div className='border-b w-[90%] mx-auto border-zinc-500/70 my-4' /> */}

      <nav className='flex-1 px-4 py-5 space-y-1 '>{renderNavButtons}</nav>

      <div className='p-4 space-y-3 mb-5'>
        {user && (
          <button
            onClick={logout}
            className={`flex items-center space-x-3 text-gray-600 px-4 py-3 rounded-lg w-full transition-colors duration-300 border border-transparent hover   ${
              darkMode ? 'text-zinc-400 hover:bg-zinc-900' : 'hover:bg-gray-50'
            }`}
          >
            <LogOut size={24} />
            <span>Sair</span>
          </button>
        )}

        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`flex items-center space-x-3 text-gray-600 px-4 py-3 rounded-lg w-full transition-colors duration-300 ${
            darkMode
              ? 'bg-blue-500 text-white hover:bg-blue-600'
              : 'hover:bg-gray-50'
          }`}
        >
          {darkMode ? <Sun size={24} /> : <Moon size={24} />}
          <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
        </button>
      </div>
    </aside>
  );
};

export default SideBar;
