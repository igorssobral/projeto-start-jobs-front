import { MenuIcon } from 'lucide-react';

const DicasCV = ({ showMenu }) => {
  function handleOpenMenu() {
    showMenu();
  }
  return (
    <div className='h-dvh bg-gray-50 dark:bg-[#1F1E25]'>
      <main className='ml-0 md:ml-64 p-8'>
        <button
          onClick={handleOpenMenu}
          className='md:hidden dark:text-zinc-50'
        >
          <MenuIcon />
        </button>
        <div className='mb-8 flex items-center justify-between'>
          <div>
            <h1 className='text-2xl font-medium dark:text-[#FAFAF9]'>
              Dicas para o seu Currículo
            </h1>
            <p className='text-gray-500 dark:text-zinc-400'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          {/* <h1 className='text-xl font-normal dark:text-[#FAFAF9]'>
      Bem vindo, nome
    </h1> */}
        </div>

        {/* Grid Layout */}
        <div className='grid grid-cols-3 gap-6'>
          {/* Row 1 */}
          <div className='col-span-3 bg-white rounded-lg shadow-sm h-96 dark:bg-[#151419]'></div>
          <div className='col-span-3 bg-white rounded-lg shadow-sm h-96 dark:bg-[#151419]'></div>

          {/* Row 2 */}
          {/* <div className='col-span-1 bg-white rounded-lg shadow-sm h-96 dark:bg-[#151419]'></div>
          <div className='col-span-2 bg-white rounded-lg shadow-sm h-96 dark:bg-[#151419]'></div> */}
        </div>
      </main>
    </div>
  );
};

export default DicasCV;
