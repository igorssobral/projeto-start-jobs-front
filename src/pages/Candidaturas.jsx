import dayjs from "dayjs";
import { Bell, MenuIcon } from "lucide-react";
import SearchBar from "../components/SearchBar";
import Jobcard from "../components/JobCard";
import jobData from "../jobData";
import { Footer } from "../components/Footer";
import perfilPaula from "../assets/perfilPaula.jpg"


const Candidaturas = ({ showMenu }) => {
  function handleOpenMenu() {
    showMenu();
  }

  function JobCard() {
    const date1 = dayjs(Date.now());
    const diffInDays = date1.diff("2024-12-25", "day");
  }

  return (
    <>
      <div className="min-h-screen bg-slate-100 transition-colors dark:bg-blue-950">

        <main className="ml-0 md:ml-64 p-6 h-[100%] rounded-3xl">
          <button
            onClick={handleOpenMenu}
            className="md:hidden dark:text-zinc-50"
          >
            <MenuIcon />
          </button>

          <div className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-medium dark:text-[#FAFAF9]">
                Candidaturas
              </h1>
              <p className="text-slate-500 dark:text-zinc-400">
                Pesquise as oportunidades desejadas.
              </p>
            </div>
            <div className="flex items-center justify-between px-1">
            <button className="btn-ghost size-10 dark:text-zinc-400">
                <Bell size={20} />
            </button>
            <button className="size-10 overflow-hidden rounded-full">
                <img 
                  src={perfilPaula} 
                  alt="foto logado" 
                  className="mr-3 size-full object-cover"/>
            </button>
            <h1 className="ml-4 text-xl font-normal dark:text-zinc-400">
              Perfil logado
            </h1>
          </div>
          </div>
          <div className='border-b  w-[100%] mx-auto border-zinc-500/70 my-4' />

          {/* Grid Layout*/}
          <div>
          <SearchBar />
            {jobData.map((job)=> (
              <Jobcard key={job.id} {...job}/>
        ))}
          </div>
          <Footer />
        </main>
        
      </div>
    </>
  );
};
export default Candidaturas;
