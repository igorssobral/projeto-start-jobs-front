import { MenuIcon } from 'lucide-react';

const VagasEmAlta = ({ showMenu }) => {
  function handleOpenMenu() {
    showMenu();
  }
  return (
    <div className='min-h-screen bg-slate-100 transition-colors dark:bg-blue-950'>
      <main className='ml-0 md:ml-64 p-6 h-[100%] rounded-3xl'>
        <button
          onClick={handleOpenMenu}
          className='md:hidden dark:text-zinc-50'
        >
          <MenuIcon />
        </button>
        <div className='mb-8 flex items-center justify-between'>
          <div>
            <h1 className='text-2xl font-medium dark:text-[#FAFAF9]'>
              Vagas em Alta
            </h1>
            <p className='text-gray-500 dark:text-zinc-400'>
              Encontre as Vagas mais atuais e recorrentes, para você se candidatar.
            </p>
          </div>
          <h1 className='text-xl font-normal dark:text-[#FAFAF9]'> 
            Perfil = Nome logado
          </h1>
        </div>
        <div className='border-b  w-[100%] mx-auto border-zinc-500/70 my-4' />

        {/* Grid Layout */}
        <div className='grid grid-cols-3 gap-6'>
          {/* Row 1 */}
          <div className='col-span-3 md:col-span-1 bg-white rounded-lg shadow-sm h-96 dark:bg-[#151419]'></div>
          <div className='col-span-3 md:col-span-2 bg-white rounded-lg shadow-sm h-96 dark:bg-[#151419]'></div>

          {/* Row 2 */}
          <div className='col-span-3 bg-white rounded-lg shadow-sm h-96 dark:bg-[#151419]'></div>
          {/* <div className='col-span-2 bg-white rounded-lg shadow-sm h-96 dark:bg-[#151419]'></div> */}
        </div>
      </main>
    </div>
  );
};

export default VagasEmAlta;
