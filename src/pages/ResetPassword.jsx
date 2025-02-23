import { CheckCircleIcon, LoaderCircle } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import logo from '../assets/logo2x.png';
import { passwordSchema } from '../schemas/register-validate';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import { resetPassword } from '../services/authService';

export default function ResetPassword() {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(passwordSchema),
  });
  const [loading, setLoading] = useState(false);

  const [tokenResetPassword, setTokenResetPassword] = useState('');
  const [passwordResetSucess, setPasswordResetSucess] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const urlObj = new URL(window.location.href);
    const params = new URLSearchParams(urlObj.search);

    const tokenResetPassword = params.get('token') || '';
    setTokenResetPassword(tokenResetPassword);
  }, []);

  async function authenticate(data) {
    setLoading(true);
    await resetPassword({
      token: tokenResetPassword,
      newPassword: data.senha,
    })
      .then((response) => {
        toast.success(response.data);
        reset();
        setPasswordResetSucess(true);
      })
      .catch((error) => {
        toast.error(error.data);
      });
       setLoading(false);

  }
  const onSubmit = (data) => {
    authenticate(data);
  };
  return (
    <div className='h-dvh overflow-y-auto z-100 fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center '>
      <div className={`md:w-[600px] w-[90%] mx-auto flex flex-col`}>
        <div className='bg-white dark:bg-[#1F1E25] p-2 rounded'>
          <div className='flex items-center justify-center flex-col space-x-2'>
            <div className='text-blue-500 text-3xl'>
              <img src={logo} alt='Logo' width='50' height='50' />
            </div>
            <div className='text-blue-500 font-bold text-xl'>Start JOBS</div>
          </div>
          {passwordResetSucess ? (
            <div className='py-6 px-6 lg:8 relative'>
              <h3 className='flex gap-2 items-center mb-2 text-2xl font-medium text-green-500 dark:text-white text-center'>
                <CheckCircleIcon size={30} /> Senha redefinida com sucesso!
              </h3>
              <p className='mb-10'>
                {' '}
                Sua senha foi atualizada com sucesso. Você já pode usar a nova
                senha para acessar sua conta.
              </p>

              <button
                type='submit'
                className='w-full text-white bg-blue-700 hover:bg-blue-800 transition-colors focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
                onClick={() => navigate('/')}
              >
                {loading ? (
                  <span className='flex items-center justify-center gap-2'>
                    <LoaderCircle className='animate-spin' /> Alterando senha
                  </span>
                ) : (
                  'Pagina inicial'
                )}
              </button>
            </div>
          ) : (
            <div className='py-6 px-6 lg:8  text-left relative'>
              <h3 className='mb-6 text-2xl font-medium text-gray-900 dark:text-white text-center'>
                Redefinir Senha
              </h3>

              <form className='space-y-6' onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <label
                    htmlFor='senha'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                  >
                    Nova senha
                  </label>
                  <input
                    {...register('senha')}
                    type='password'
                    name='senha'
                    id='senha'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-zinc-700 dark:bg-[#151419] dark:text-zinc-300'
                    placeholder='*********'
                  />
                  <p className='text-red-500 text-sm'>
                    {errors.senha?.message}
                  </p>
                </div>
                <div>
                  <label
                    htmlFor='confirmPassword'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                  >
                    Confirme nova senha
                  </label>
                  <input
                    {...register('confirmSenha')}
                    type='password'
                    name='confirmSenha'
                    id='confirmSenha'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-zinc-700 dark:bg-[#151419] dark:text-zinc-300'
                    placeholder='*********'
                  />
                  <p className='text-red-500 text-sm'>
                    {errors.confirmSenha?.message}
                  </p>
                </div>
                <button
                  type='submit'
                  className='w-full text-white bg-blue-700 hover:bg-blue-800 transition-colors focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
                >
                  {loading ? (
                    <span className='flex items-center justify-center gap-2'>
                      <LoaderCircle className='animate-spin' /> Alterando senha
                    </span>
                  ) : (
                    'Alterar senha'
                  )}
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
