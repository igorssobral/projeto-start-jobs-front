import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
  FaGithub,
} from 'react-icons/fa';

export const Footer = () => {
  return (
    <div className='flex-row'>
      <footer className='mt-10 flex justify-around gap-6 md:ms-1'>
        <p className='text-base font-medium text-slate-900 dark:text-slate-50'>
          © 2024 <strong>Start JOBS</strong> Code All Rights Reserved
        </p>
        <div className='text-base font-medium text-slate-900 dark:text-slate-50'>
          <div className='flex flex-row gap-6'>
            {/* Texto acima dos ícones das redes sociais*/}
            <p className='text-base text-slate-900 dark:text-slate-50'>
              Acompanhe nossas redes sociais
            </p>

            {/* Ícones das redes sociais */}
            <div className='flex gap-4'>
              <a
                href='https://www.instagram.com/'
                target='_blank'
                className='text-slate-900 dark:text-slate-50 hover:text-blue-500 dark:hover:text-blue-500 transition'
              >
                <FaInstagram size={20} />
              </a>
              <a
                href='https://github.com/Project-Start-Jobs'
                target='_blank'
                className='text-slate-900 dark:text-slate-50 hover:text-blue-500 dark:hover:text-blue-500 transition'
              >
                <FaGithub size={20} />
              </a>
              <a
                href='https://www.linkedin.com/'
                target='_blank'
                className='text-slate-900 dark:text-slate-50 hover:text-blue-500 dark:hover:text-blue-500 transition'
              >
                <FaLinkedinIn size={20} />
              </a>
              <a
                href='https://web.whatsapp.com/'
                target='_blank'
                className='text-slate-900 dark:text-slate-50 hover:text-blue-500 dark:hover:text-blue-500 transition'
              >
                <FaWhatsapp size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
