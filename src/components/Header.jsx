import { useAuth } from '../context/auth-context';
import profile from '../assets/logo1x.png';

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
          <span className='flex items-center gap-2'>
            <img src={profile} alt='' className='size-12 rounded-full' />
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
