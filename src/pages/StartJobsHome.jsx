/* eslint-disable react/no-unknown-property */
import React, { useState } from 'react';
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
  X,
  Menu,
  // Clock,
  // X,
  // BarChart2,
} from 'lucide-react';
import { FaGoogle } from 'react-icons/fa';
import logo from '../assets/logo2x.png';
import Modal from '../components/Modal';
const StartJobsHome = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [showModalLogin, setShowModalLogin] = useState(false);
  const [showModalRegister, setShowModalRegister] = useState(false);
  const [showModalRecoveryPassword, setShowModalRecoveryPassword] =
    useState(false);

  let handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };


  let handleShowModal = () => {
    setShowModalLogin(true);
  };

  let handleCloseModal = () => {
    setShowModalLogin(false);
  };
  let handleShowModalRegister = () => {
    setShowModalRegister(true);
  };

  let handleCloseModalRegister = () => {
    setShowModalRegister(false);
  };
  let handleShowModalRecoveryPassword = () => {
    setShowModalRecoveryPassword(true);
    handleCloseModal();
  };

  let handleCloseModalRecoveryPassword = () => {
    setShowModalRecoveryPassword(false);
  };

  return (
    <div className='max-h-screen bg-gray-50'>
      {/* Sidebar */}

      <aside className={` ${openMenu ? 'hidden':''} md:flex fixed left-0 top-0 h-screen w-64 bg-white shadow-lg flex-col`}>
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
            <Menu className='absolute top-10 right-2 md:hidden' />
          </button>
          
          </div>
        </div>
          
        {/* Navigation  */}
        <nav className='flex-1 px-4 space-y-1'>
          <a
            href='#'
            className={`flex items-center space-x-3 ${
              !showModalLogin &&
              !showModalRegister &&
              !showModalRecoveryPassword
                ? 'bg-blue-500 text-white'
                : 'text-gray-600'
            }   px-4 py-3 rounded-lg`}
          >
            <Home size={20} />
            <span>Home</span>
          </a>

          <button
            onClick={handleShowModal}
            className={`w-full flex items-center space-x-3   ${
              showModalLogin ? 'bg-blue-500 text-white' : 'text-gray-600'
            } px-4 py-3 hover:bg-gray-50 rounded-lg`}
          >
            <UserCircle2 size={20} />
            <span>Login</span>
          </button>

          <button
            onClick={handleShowModalRegister}
            className={`w-full flex items-center space-x-3 ${
              showModalRegister ? 'bg-blue-500 text-white' : 'text-gray-600'
            }  px-4 py-3 hover:bg-gray-50 rounded-lg`}
          >
            <UserPlus size={20} />
            <span>Register</span>
          </button>
          <a
            href='/candidaturas'
            className='flex items-center space-x-3 text-gray-600 px-4 py-3 hover:bg-gray-50 rounded-lg'
          >
            <Box size={20} />
            <span>Candidaturas</span>
          </a>
          <a
            href='/dashboard'
            className='flex items-center space-x-3 text-gray-600 px-4 py-3 hover:bg-gray-50 rounded-lg'
          >
            <Globe size={20} />
            <span>Dashboard</span>
          </a>
          <a
            href='#'
            className='flex items-center space-x-3 text-gray-600 px-4 py-3 hover:bg-gray-50 rounded-lg'
          >
            <Brain size={20} />
            <span>Dicas CV</span>
          </a>
          <a
            href='#'
            className='flex items-center space-x-3 text-gray-600 px-4 py-3 hover:bg-gray-50 rounded-lg'
          >
            <FileText size={20} />
            <span>Vagas em alta</span>
          </a>
        </nav>

        {/* Theme Toggle */}
        <div className='p-4'>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className='flex items-center space-x-3 text-gray-600 px-4 py-3 hover:bg-gray-50 rounded-lg w-full'
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
      <main className='ml-0 md:ml-64 p-8'>
      
         
          <button onClick={handleOpenMenu} className='md:hidden'>
          <MenuIcon/>
        </button><div className='mb-8 flex items-center justify-between'>
          <div>
            <h1 className='text-2xl font-medium'>Start Jobs</h1>
            <p className='text-gray-500'>Gerenciamento de perfis | 2024-2025</p>
          </div>
          <h1 className='text-xl font-normal'>Bem vindo, nome</h1>
        </div>

        {/* Grid Layout */}
        <div className='grid grid-cols-3 gap-6'>
          {/* Row 1 */}
          <div className='col-span-1 bg-white rounded-lg shadow-sm h-48'></div>
          {/* <div className='col-span-1 bg-white rounded-lg shadow-sm h-48'></div>
          <div className='col-span-1 bg-white rounded-lg shadow-sm h-48'></div> */}

          {/* Row 2 */}
          <div className='col-span-2  bg-white rounded-lg shadow-sm h-48'></div>
          <div className='col-span-3 bg-white rounded-lg shadow-sm h-48'></div>

          {/* Row 3 */}
          <div className='col-span-3 bg-white rounded-lg shadow-sm h-48'></div>
        </div>
      </main>

      {/* {showModalLogin && <TelaLogin show={showModalLogin}/>} */}

      <Modal isVisible={showModalLogin}>
        <div className='py-6 px-6 lg:8 text-left relative'>
          <button
            className='text-xl absolute px-7 right-0 top-6 text-blue-600'
            onClick={() => handleCloseModal()}
          >
            X
          </button>

          <h3 class='mb-4 text-2xl font-medium text-gray-900'>
            Faça login pra entrar na plataforma
          </h3>
          <form class='space-y-6' action='#'>
            <div>
              <label
                for='email'
                class='block mb-2 text-sm font-medium text-gray-900'
              >
                Seu email
              </label>
              <input
                type='email'
                name='email'
                id='email'
                className='bg-gray-50 border border-gray-300
        text-gray-900 text-sm rounded-lg focus:ring-blue-500
        focus:border-blue-500 block w-full p-2.5'
                placeholder='name@company.com'
                required
              />
            </div>
            <div>
              <label
                for='password'
                class='block mb-2 text-sm font-medium text-gray-900'
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
        focus:border-blue-500 block w-full p-2.5'
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
                  className='ml-2 text-sm font-medium text-gray-900'
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
              className='flex justify-center items-center gap-2 w-full text-white bg-blue-400 hover:bg-blue-600 transition-colors border focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
            >
              <FaGoogle /> Entrar com o Google
            </button>
          </form>
        </div>
      </Modal>

      <Modal isVisible={showModalRegister}>
        <div className='py-6 px-6 lg:8 text-left relative'>
          <button
            className='text-xl absolute px-7 right-0 top-6 text-blue-600'
            onClick={() => handleCloseModalRegister()}
          >
            X
          </button>

          <h3 class='mb-4 text-2xl font-medium text-gray-900'>Cadastrar-se</h3>
          <form class='space-y-6' action='#'>
            <div>
              <label
                for='nome'
                class='block mb-2 text-sm font-medium text-gray-900'
              >
                Nome
              </label>

              <input
                type='text'
                name='nome'
                id='nome'
                className='bg-gray-50 border border-gray-300
        text-gray-900 text-sm rounded-lg focus:ring-blue-500
        focus:border-blue-500 block w-full p-2.5'
                placeholder='Fulano'
                required
              />
            </div>
            <div>
              <label
                for='endereco'
                class='block mb-2 text-sm font-medium text-gray-900'
              >
                Endereço
              </label>

              <input
                type='text'
                name='endereco'
                id='endereco'
                className='bg-gray-50 border border-gray-300
        text-gray-900 text-sm rounded-lg focus:ring-blue-500
        focus:border-blue-500 block w-full p-2.5'
                placeholder='Rua.'
                required
              />
            </div>
            <div>
              <label
                for='phone'
                class='block mb-2 text-sm font-medium text-gray-900'
              >
                Telefone
              </label>
              <input
                type='tel'
                name='phone'
                id='phone'
                className='bg-gray-50 border border-gray-300
        text-gray-900 text-sm rounded-lg focus:ring-blue-500
        focus:border-blue-500 block w-full p-2.5'
                placeholder='(XX) XXXXX-XXXX'
                required
              />
            </div>
            <div>
              <label
                for='email'
                class='block mb-2 text-sm font-medium text-gray-900'
              >
                Seu email
              </label>
              <input
                type='email'
                name='email'
                id='email'
                className='bg-gray-50 border border-gray-300
        text-gray-900 text-sm rounded-lg focus:ring-blue-500
        focus:border-blue-500 block w-full p-2.5'
                placeholder='name@company.com'
                required
              />
            </div>
            <div>
              <label
                for='password'
                class='block mb-2 text-sm font-medium text-gray-900'
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
        focus:border-blue-500 block w-full p-2.5'
                required
              />
            </div>
            <div>
              <label
                for='password'
                class='block mb-2 text-sm font-medium text-gray-900'
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
        focus:border-blue-500 block w-full p-2.5'
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
                  className='ml-2 text-sm font-medium text-gray-900'
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
              className='flex justify-center items-center gap-2 w-full text-white bg-blue-400 hover:bg-blue-600 transition-colors border focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
            >
              <FaGoogle /> Registrar-se com o Google
            </button>
          </form>
        </div>
      </Modal>

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

          <h3 class='mb-1 text-2xl font-medium text-gray-900'>
            Digite seu email de recuperação
          </h3>
          <h3 class='mb-4 text-sm font-normal text-zinc-500'>
            Será enviado um email com um link de redefiniçào de senha!
          </h3>
          <form class='space-y-6' action='#'>
            <div>
              <label
                for='email'
                class='block mb-2 text-sm font-medium text-gray-900'
              >
                Seu email
              </label>
              <input
                type='email'
                name='email'
                id='email'
                className='bg-gray-50 border border-gray-300
        text-gray-900 text-sm rounded-lg focus:ring-blue-500
        focus:border-blue-500 block w-full p-2.5'
                placeholder='name@company.com'
                required
              />
            </div>

            {/* <div className='flex justify-between'>
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
                  className='ml-2 text-sm font-medium text-gray-900'
                >
                  Lembrar?
                </label>
              </div>
              <a
                href='#'
                className='text-sm text-blue-700
      hover:underline'
              >
                Esqueceu a senha?
              </a>
            </div> */}
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
