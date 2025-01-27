import { useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import Modal from './Modal';
import { login } from '../services/authService';
import { useAuth } from '../context/auth-context';
import { toast } from 'react-toastify';
import { LoaderCircle } from 'lucide-react';

function ModalLogin(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { logged, user } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await login(email, password);
      console.log('Usuário logado com sucesso:', data);
      logged(data);
      localStorage.setItem('token', data); // Salva o token no localStorage

      setLoading(false);
      props.handleClose();
      toast.success(`Bem Vindo! ${user.user}`);
    } catch (err) {
      console.error('Erro ao fazer login:', err);
      setError('Email ou senha inválidos. Tente novamente.');
    }
  };

  return (
    <Modal isVisible={props.isVisible}>
      <div className='py-6 px-6 lg:8 text-left relative'>
        <button
          className='text-xl absolute px-7 right-0 top-6 text-blue-600 hover:text-blue-800 transition-colors'
          onClick={props.handleClose}
        >
          X
        </button>
        <h3 className='mb-4 text-2xl font-medium text-gray-900 dark:text-white'>
          Faça login pra entrar na plataforma
        </h3>
        {error && <p className='text-red-500 text-sm'>{error}</p>}
        <form className='space-y-6' onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor='email'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
            >
              Seu email
            </label>
            <input
              type='email'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-zinc-700 dark:bg-[#151419] dark:text-zinc-300'
              placeholder='name@company.com'
              required
            />
          </div>
          <div>
            <label
              htmlFor='password'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
            >
              Sua senha
            </label>
            <input
              type='password'
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-zinc-700 dark:bg-[#151419] dark:text-zinc-300'
              placeholder='*********'
              required
            />
          </div>
          <div className='flex justify-between'>
            <div className='flex items-start'>
              <div className='flex items-center h-5'>
                <input
                  id='remember'
                  type='checkbox'
                  className='w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300'
                />
              </div>
              <label
                htmlFor='remember'
                className='ml-2 text-sm font-medium text-gray-900 dark:text-white'
              >
                Lembrar?
              </label>
            </div>
            <button
            type='button'
              onClick={props.showRecoveryPassword}
              className='text-sm text-blue-700 hover:underline'
            >
              Esqueceu a senha?
            </button>
          </div>
          <button
            type='submit'
            className='w-full text-white bg-blue-700 hover:bg-blue-800 transition-colors focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
          >
            {loading ? (
              <span className='flex items-center justify-center gap-2'>
                <LoaderCircle className='animate-spin' /> Entrando
              </span>
            ) : (
              'Entrar'
            )}
          </button>
          <button
            type='button'
            className='flex justify-center items-center gap-2 w-full text-white bg-blue-400 hover:bg-blue-600 transition-colors focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
            onClick={() =>
              console.log('Login com Google ainda não implementado')
            }
          >
            <FaGoogle /> Entrar com o Google
          </button>
        </form>
      </div>
    </Modal>
  );
}

export default ModalLogin;
