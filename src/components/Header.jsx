import { useAuth } from '../context/auth-context';
import profile from '../assets/user01.png';

const Header = ({ title, description }) => {
  const { user } = useAuth();
  const firstName = user?.user.split(' ')[0];
  return (
    <div className='mb-8 flex items-center justify-between'>
      <div>
        <h1 className='text-lg lg:text-2xl font-medium dark:text-[#FAFAF9]'>
          {title}
        </h1>
        <p className='text-gray-500 max-lg:max-w-[180px] dark:text-zinc-400 text-sm lg:text-xl'>{description} </p>
      </div>
      <h1 className='text-lg font-normal dark:text-[#FAFAF9]'>
        {user ? (
          <span className='flex items-center gap-2 text-base'>
            <img src={profile} alt='' className='size-12 rounded-full' />
            <span className='text-base text-center'>
              Olá, <strong>{firstName}</strong>
            </span>
          </span>
        ) : (
          ''
        )}
      </h1>
    </div>
  );
};

export default Header;
