import { MenuIcon } from 'lucide-react';

function Home({showMenu}) {
    function handleOpenMenu() {
        showMenu();
      }
  return (
    <main className='ml-0 md:ml-64 p-6 h-[100%] rounded-3xl'>
      <button onClick={handleOpenMenu} className='md:hidden dark:text-zinc-50'>
        <MenuIcon />
      </button>
      <div className='mb-8 flex items-center justify-between'>
        <div>
          <h1 className='text-2xl font-medium dark:text-[#FAFAF9]'>
            Start Jobs
          </h1>
          <p className='text-gray-500 dark:text-zinc-400'>
            Gerenciamento de perfis | 2024-2025
          </p>
        </div>
        <h1 className='text-base md:text-xl font-normal dark:text-[#FAFAF9]'>
          Bem vindo, nome
        </h1>
      </div>
      <div className='border-b  w-[100%] mx-auto border-zinc-500/70 my-4' />

      {/* Grid Layout */}
      <div className='grid grid-cols-3 gap-6'>
        {/* Row 1 */}
        <div className='col-span-3 md:col-span-1 bg-white rounded-lg shadow-sm h-96 dark:bg-[#151419]'></div>
        <div className='col-span-3 md:col-span-2  bg-white rounded-lg shadow-sm h-96 dark:bg-[#151419]'></div>

        {/* Row 2 */}
        <div className='col-span-3 md:col-span-2 bg-white rounded-lg shadow-sm h-96 dark:bg-[#151419]'></div>
        <div className='col-span-3 md:col-span-1 bg-white rounded-lg shadow-sm h-96 dark:bg-[#151419]'></div>
      </div>
    </main>
  );
}

export default Home;
