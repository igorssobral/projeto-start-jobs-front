import { MenuIcon } from "lucide-react";
import Header from '../components/Header';

const Dashboard = ({ showMenu }) => {
  function handleOpenMenu() {
    showMenu();
  }
  return (
    <div className="min-h-screen bg-slate-100 transition-colors dark:bg-[#1F1E25]">
      <main className="ml-0 md:ml-64 p-6">
        <button
          onClick={handleOpenMenu}
          className="md:hidden dark:text-zinc-50"
        >
          <MenuIcon />
        </button>
        <Header title={"Dashboard"} description={" Acompanhe seus processos e compare as expectativas."}/>
       
        <div className='border-b  w-[100%] mx-auto border-zinc-500/70 my-4' />

        {/* Grid Layout */}
        <div className="grid grid-cols-3 gap-6">
          {/* Row 1 */}
          <div className="col-span-3 md:col-span-1 bg-white rounded-lg shadow-sm h-96 dark:bg-[#151419]"></div>
          <div className="col-span-3 md:col-span-1 bg-white rounded-lg shadow-sm h-96 dark:bg-[#151419]"></div>

          {/* Row 2 */}
          <div className="col-span-3 md:col-span-1 bg-white rounded-lg shadow-sm h-96 dark:bg-[#151419]"></div>
          <div className="col-span-3 bg-white rounded-lg shadow-sm h-96 dark:bg-[#151419]"></div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
