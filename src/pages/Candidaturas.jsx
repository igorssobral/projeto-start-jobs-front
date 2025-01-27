import { MenuIcon } from 'lucide-react';
import SearchBar from '../components/SearchBar';
import Header from '../components/Header';
import { Footer } from "../components/Footer";


const Candidaturas = ({ showMenu }) => {



  function handleOpenMenu() {
    showMenu();
  }

  return (
    <>
      <div className="min-h-screen bg-slate-100 transition-colors dark:bg-[#1F1E25]">

        <main className="ml-0 md:ml-64 p-6 h-[100%] rounded-3xl">
    
          <button
            onClick={handleOpenMenu}
            className='md:hidden dark:text-zinc-50'
          >
            <MenuIcon />
          </button>
          <Header
            title={'Candidaturas'}
            description={' Pesquise e filtre as oportunidades desejadas.'}
          />

          <div className='border-b  w-[100%] mx-auto border-zinc-500/70 my-4' />

          <SearchBar />
          <div className='grid grid-cols-3 gap-6'>
            <div className='col-span-3 bg-white rounded-lg shadow-sm min-h-[670px] dark:bg-[#151419]'></div>
          </div>
         

         <Footer/>
        </main>
      </div>
    </>
  );
};
export default Candidaturas;
