import dayjs from "dayjs";
import { MenuIcon } from "lucide-react";
import SearchBar from "../components/SearchBar";
import Jobcard from "../components/JobCard";
import jobData from "../jobData";


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
        <main className="ml-0 md:ml-64 p-6">
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
              <p className="text-gray-500 dark:text-zinc-400">
                Pesquise e filtre as oportunidades desejadas.
              </p>
            </div>
            <h1 className="text-xl font-normal dark:text-[#FAFAF9]">
              Perfil = nome logado
            </h1>
          </div>
          <div className='border-b  w-[100%] mx-auto border-zinc-500/70 my-4' />

          {/* Grid Layout*/}
          <div>
          <SearchBar />
            {jobData.map((job)=> (
              <Jobcard key={job.id} {...job}/>
        ))}
          </div>
          
        </main>
      </div>
    </>
  );
};
export default Candidaturas;
