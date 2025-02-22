import { MenuIcon } from 'lucide-react';
import Header from '../components/Header';
import { Footer } from '../components/Footer';
import { useEffect, useState } from 'react';
import CandidaturaCard from '../components/CandidaturaCard';
import { ApiCandidatura } from '../services/candidaturaService';
import FilterBar from '../components/FilterBar';
import ModalNewCandidatura from '../components/ModalNewCandidatura';

const Candidaturas = ({ showMenu }) => {
  const [candidaturas, setCandidaturas] = useState([]);
  const [searchFilter, setSearchFilter] = useState('');
  const [isRemote, setIsRemote] = useState(false);
  const [modalNewCandidatura, setModalNewCandidatura] = useState(false);
  const { getCandidaturas } = ApiCandidatura();

  const refreshJobs = async () => {
    const candidaturasList = await getCandidaturas();
    setCandidaturas(candidaturasList);
  };

  function handleFilter(filters) {
    setSearchFilter(filters.search);
    setIsRemote(filters.remote);
  }

  useEffect(() => {
    async function fetchJobs() {
      const candidaturasList = await getCandidaturas();
      setCandidaturas(candidaturasList);
    }
    fetchJobs();
  }, []);

  function handleOpenMenu() {
    showMenu();
  }

  const filters =
    (candidaturas.length > 0 &&
      candidaturas?.filter((cand) => {
        if (searchFilter === '' && !isRemote) {
          return true;
        }

        const filterSearchFilter =
          cand.vaga.titulo.toLowerCase().includes(searchFilter.toLowerCase()) ||
          cand.vaga.empresa.toLowerCase().includes(searchFilter.toLowerCase());

        const filterRemoteFilter = isRemote
          ? cand.vaga.modeloTrabalho === 'Remoto'
          : true;

        return filterSearchFilter && filterRemoteFilter;
      })) ||
    candidaturas;

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

          <div className='flex flex-col lg:flex-row justify-evenly  items-center mt-12'>
            {' '}
            <FilterBar onSearch={(e) => handleFilter(e)} />
            <button
              className='px-8 py-3  bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:text-zinc-50 dark:hover:bg-blue-700 transition duration-300 '
              onClick={() => setModalNewCandidatura(true)}
            >
              Adicionar candidatura
            </button>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 my-10'>
            {Array.isArray(filters) &&
              filters.map((job) => (
                <CandidaturaCard
                  key={job.id}
                  {...job}
                  refreshJobs={refreshJobs}
                />
              ))}
          </div>
          <div className='border-b  w-[100%] mx-auto border-zinc-500/70 my-4' />
          <Footer />
          <ModalNewCandidatura
            isVisible={modalNewCandidatura}
            handleClose={() => setModalNewCandidatura(false)}
            refreshJobs={refreshJobs}
          />
        </main>
      </div>
    </>
  );
};
export default Candidaturas;
