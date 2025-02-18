import { MenuIcon } from 'lucide-react';
import SearchBar from '../components/SearchBar';
import Header from '../components/Header';
import { Footer } from '../components/Footer';
import { useEffect, useState } from 'react';
import CandidaturaCard from '../components/CandidaturaCard';
import { ApiCandidatura } from '../services/candidaturaService';

const Candidaturas = ({ showMenu }) => {
  const [jobs, setJobs] = useState([]);
  const { getCandidaturas } = ApiCandidatura();

  const refreshJobs = async () => {
    const jobList = await getCandidaturas();
    setJobs(jobList);
  };

  useEffect(() => {
    async function fetchJobs() {
      const jobList = await getCandidaturas();
      setJobs(jobList);
    }
    fetchJobs();
  }, []);

  function handleOpenMenu() {
    showMenu();
  }
  return (
    <>
      <div className='min-h-screen bg-slate-100 transition-colors dark:bg-[#1F1E25]'>
        <main className='ml-0 md:ml-64 p-6 h-[100%] rounded-3xl'>
          <button
            onClick={handleOpenMenu}
            className='md:hidden dark:text-zinc-50'
          >
            <MenuIcon />
          </button>
          <Header
            title={'Candidaturas'}
            description={'Veja todas as vagas que você se candidatou.'}
          />

          <div className='border-b  w-[100%] mx-auto border-zinc-500/70 my-4' />

          <SearchBar />
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 my-10'>
          {jobs.length > 0 ? (
              jobs.map((job) => (
                <CandidaturaCard
                  key={job.id}
                  {...job}
                  refreshJobs={refreshJobs}
                />
              ))
            ) : (
             ""
            )}
          </div>
          {/* <div className='border-b  w-[100%] mx-auto border-zinc-500/70 my-4' />
          <Footer /> */}
        </main>
      </div>
    </>
  );
};
export default Candidaturas;
