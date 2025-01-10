/* eslint-disable react/no-unknown-property */
import { FaGoogle } from 'react-icons/fa'
import Modal from './Modal'

function ModalRegistro(props) {
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
   </>
  )
}

export default ModalRegistro