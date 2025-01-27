import { MenuIcon } from 'lucide-react';
import Header from '../components/Header';

function Home({showMenu}) {
    function handleOpenMenu() {
        showMenu();
      }
  return (
    <main className='ml-0 md:ml-64 p-6 h-[100%] rounded-3xl'>
      <button onClick={handleOpenMenu} className='md:hidden dark:text-zinc-50'>
        <MenuIcon />
      </button>
      <Header title={"Start Jobs"} description={" Gerenciamento de perfis | 2024-2025"}/>

      
    
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
