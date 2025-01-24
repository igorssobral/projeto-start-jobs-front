import { useAuth } from '../context/auth-context';

const Header = ({ title, description }) => {
  const { user } = useAuth();
  return (
    <div className='mb-8 flex items-center justify-between'>
      <div>
        <h1 className='text-2xl font-medium dark:text-[#FAFAF9]'>{title}</h1>
        <p className='text-gray-500 dark:text-zinc-400'>{description} </p>
      </div>
      <h1 className='text-lg font-normal dark:text-[#FAFAF9]'>
        {user ? (
          <span>
            Bem Vindo, <strong className='text-xl'>{user.user}</strong>
          </span>
        ) : (
          ''
        )}
      </h1>
    </div>
  );
};

export default Header;
