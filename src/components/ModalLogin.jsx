/* eslint-disable react/no-unknown-property */
import { FaGoogle } from 'react-icons/fa';
import Modal from './Modal';

function ModalLogin(props) {
  return (
    <>
      <Modal isVisible={props.isVisible}>
        <div className='py-6 px-6 lg:8 text-left relative'>
          <button
            className='text-xl absolute px-7 right-0 top-6 text-blue-600 hover:text-zinc-50 transition-colors'
            onClick={props.handleClose}
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
                onClick={props.showRecoveryPassword}
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
    </>
  );
}

export default ModalLogin;
