import { useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import Modal from './Modal';
import { register } from '../services/authService';
import { LoaderCircle } from 'lucide-react';

function ModalRegistro(props) {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: '',
    senha: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (formData.senha !== formData.confirmPassword) {
      setError('As senhas não coincidem.');
      return;
    }

    try {
      const payload = {
        nome: formData.nome,
        telefone: formData.telefone,
        email: formData.email,
        senha: formData.senha,
      };

      const data = await register(payload);
      console.log('Usuário registrado com sucesso:', data);
      setSuccess('Usuário registrado com sucesso!');
      setError('');
      setLoading(false);
      setFormData({
        nome: '',
        telefone: '',
        email: '',
        senha: '',
        confirmPassword: '',
      });
      props.handleClose();
    } catch (err) {
      console.error('Erro ao registrar usuário:', err);
      setError('Erro ao registrar usuário. Tente novamente.');
      setLoading(false);
    }
  };

  return (
    <Modal isVisible={props.isVisible}>
      <div className='py-6 px-6 lg:8 mt-10 text-left relative'>
        <button
          className='text-xl absolute px-7 right-0 top-6 text-blue-600 hover:text-blue-800 transition-colors'
          onClick={props.handleClose}
        >
          X
        </button>

        <h3 className='mb-4 text-2xl font-medium text-gray-900 dark:text-white'>
          Cadastrar-se
        </h3>
        {error && <p className='text-red-500 text-sm'>{error}</p>}
        {success && <p className='text-green-500 text-sm'>{success}</p>}
        <form className='space-y-6' onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor='nome'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
            >
              Nome
            </label>
            <input
              type='text'
              name='nome'
              id='nome'
              value={formData.nome}
              onChange={handleChange}
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-zinc-700 dark:bg-[#151419] dark:text-zinc-300'
              placeholder='Fulano'
              required
            />
          </div>
          <div>
            <label
              htmlFor='telefone'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
            >
              Telefone
            </label>
            <input
              type='tel'
              name='telefone'
              id='telefone'
              value={formData.telefone}
              onChange={handleChange}
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-zinc-700 dark:bg-[#151419] dark:text-zinc-300'
              placeholder='(XX) XXXXX-XXXX'
              required
            />
          </div>
          <div>
            <label
              htmlFor='email'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
            >
              Seu email
            </label>
            <input
              type='email'
              name='email'
              id='email'
              value={formData.email}
              onChange={handleChange}
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-zinc-700 dark:bg-[#151419] dark:text-zinc-300'
              placeholder='name@company.com'
              required
            />
          </div>
          <div>
            <label
              htmlFor='senha'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
            >
              Sua senha
            </label>
            <input
              type='password'
              name='senha'
              id='senha'
              value={formData.senha}
              onChange={handleChange}
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-zinc-700 dark:bg-[#151419] dark:text-zinc-300'
              placeholder='*********'
              required
            />
          </div>
          <div>
            <label
              htmlFor='confirmPassword'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
            >
              Confirme sua senha
            </label>
            <input
              type='password'
              name='confirmPassword'
              id='confirmPassword'
              value={formData.confirmPassword}
              onChange={handleChange}
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-zinc-700 dark:bg-[#151419] dark:text-zinc-300'
              placeholder='*********'
              required
            />
          </div>
          <button
            type='submit'
            className='w-full text-white bg-blue-700 hover:bg-blue-800 transition-colors focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
          >
            {loading ? (
              <span className='flex items-center justify-center gap-2'>
                <LoaderCircle className='animate-spin' /> Cadastrando
              </span>
            ) : (
              'Cadastrar'
            )}
          </button>
          <button
            type='button'
            className='flex justify-center items-center gap-2 w-full text-white bg-blue-400 hover:bg-blue-600 transition-colors focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
            onClick={() =>
              console.log('Registrar-se com o Google ainda não implementado')
            }
          >
            <FaGoogle /> Registrar-se com o Google
          </button>
        </form>
      </div>
    </Modal>
  );
}

export default ModalRegistro;
