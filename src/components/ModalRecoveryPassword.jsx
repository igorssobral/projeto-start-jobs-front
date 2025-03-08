/* eslint-disable react/no-unknown-property */
import { useForm } from 'react-hook-form';
import Modal from './Modal';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '../schemas/login-schema';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { recoveryPassword } from '../services/authService';
import { emailSchema } from '../schemas/register-validate';
import { LoaderCircle } from 'lucide-react';

function ModalRecoveryPassword(props) {
  const [isEmailSubmited, setIsEmailSubmited] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(emailSchema),
  });

  async function authenticate(data) {
    setLoading(true);
    await recoveryPassword({
      email: data.email,
    })
      .then((response) => {
        toast.success(response.data);
        setIsEmailSubmited(true);
        reset();
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
    <>
      <Modal isVisible={props.isVisible} onClose={props.handleClose}>
        <div className='py-6 px-6 lg:8 text-left relative'>
          {isEmailSubmited ? (
            <>
              {' '}
              <h3 class='mb-1 text-2xl font-medium text-gray-900 dark:text-white '>
                Verifique seu e-mail
              </h3>
              <p class='mb-4 text-sm font-normal text-zinc-500 dark:text-zinc-300'>
                Um link foi enviado para o endereço de e-mail fornecido. Por
                favor, verifique sua caixa de entrada (ou pasta de spam) e siga
                as instruções.
              </p>
              <button
                type='button'
                className='w-full text-white bg-blue-700 hover:bg-blue-800 transition-colors    font-medium rounded-lg text-sm px-5 py-2.5 text-center'
                onClick={() => {
                  props.handleClose();
                  setIsEmailSubmited(false);
                }}
              >
                <span className='flex items-center justify-center gap-2'>
                  Fechar
                </span>
              </button>
            </>
          ) : (
            <>
              {' '}
              <button
                className='text-xl absolute px-7 right-0 top-6 text-blue-600'
                onClick={props.handleClose}
              >
                x
              </button>
              <h3 class='mb-1 text-2xl font-medium text-gray-900 dark:text-white '>
                Digite seu email de recuperação
              </h3>
              <h3 class='mb-4 text-sm font-normal text-zinc-500 dark:text-zinc-300'>
                Será enviado um email com um link de redefiniçào de senha!
              </h3>
              <form class='space-y-6' onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <label
                    for='email'
                    class='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                  >
                    Seu email
                  </label>
                  <input
                    {...register('email')}
                    type='email'
                    name='email'
                    id='email'
                    className='bg-gray-50 border border-gray-300
        text-gray-900 text-sm rounded-lg 
        block w-full p-2.5 dark:border-zinc-700 dark:bg-[#151419] dark:text-zinc-300'
                    placeholder='name@company.com'
                  />
                  <p className='text-red-500 text-sm'>
                    {errors.email?.message}
                  </p>
                </div>

                <button
                  type='submit'
                  className='w-full text-white bg-blue-700 hover:bg-blue-800 transition-colors    font-medium rounded-lg text-sm px-5 py-2.5 text-center'
                >
                  {loading ? (
                    <span className='flex items-center justify-center gap-2'>
                      <LoaderCircle className='animate-spin' /> Enviando
                    </span>
                  ) : (
                    'Enviar'
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </Modal>
    </>
  );
}

export default ModalRecoveryPassword;
