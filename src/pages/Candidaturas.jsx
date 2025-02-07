import { MenuIcon } from 'lucide-react';
import SearchBar from '../components/SearchBar';
import Header from '../components/Header';
import { Footer } from "../components/Footer";
import { useEffect, useState } from 'react';
import CandidaturaCard from '../components/CandidaturaCard';
import { ApiCandidatura } from '../services/candidaturaService';


const Candidaturas = ({ showMenu }) => {
  const [jobs, setJobs] = useState([]);
  const {getCandidaturas} = ApiCandidatura()

  useEffect(() => {
    async function Jobs() {
      const jobList = await getCandidaturas()
      // const jobList = [
      //   {
      //     avg_annual_salary_usd: null,
      //     cities: [],
      //     company: 'Claro',
      //     company_domain: 'claro.com.br',
      //     company_object: {
      //       name: 'Claro',
      //       domain: 'claro.com.br',
      //       industry: 'Telecommunications',
      //       country: 'Brazil',
      //       country_code: 'BR',
      //     },
      //     country: 'Brazil',
      //     country_code: 'BR',
      //     country_codes: ['BR'],
      //     date_posted: '2025-01-22',
      //     description: 'Aqui vai a descrição do cargo...',
      //     final_url:
      //       'https://vempraclaro.gupy.io/job/eyJqb2JJZCI6ODAwMDI1Niwic291cmNlIjoiaW5kZWVkIn0=?jobBoardSource=indeed',
      //     job_title: 'Desenvolvedor Front-end Pleno',
      //     location: 'Rio de Janeiro',
      //     latitude: -22.952133,
      //     longitude: -43.282722,
      //     remote: false,
      //     hybrid: true,
      //     seniority: 'mid_level',
      //     source_url: 'https://indeed.com/viewjob?jk=29253d08c31cb605',
      //     url: 'https://vempraclaro.gupy.io/job/eyJqb2JJZCI6ODAwMDI1Niwic291cmNlIjoiaW5kZWVkIn0=?jobBoardSource=indeed',
      //   },
      //   {
      //     avg_annual_salary_usd: null,
      //     cities: [],
      //     company: 'Amazon',
      //     company_domain: 'amazon.com',
      //     company_object: {
      //       name: 'Amazon',
      //       domain: 'amazon.com',
      //       industry: 'E-commerce',
      //       country: 'USA',
      //       country_code: 'US',
      //     },
      //     country: 'USA',
      //     country_code: 'US',
      //     country_codes: ['US'],
      //     date_posted: '2025-01-20',
      //     description:
      //       'Estamos procurando um desenvolvedor para trabalhar em projetos de backend.',
      //     final_url: 'https://www.amazon.jobs/en/jobs/1234567',
      //     job_title: 'Software Engineer',
      //     location: 'Seattle, WA',
      //     latitude: 47.6062,
      //     longitude: -122.3321,
      //     remote: true,
      //     hybrid: false,
      //     seniority: 'junior',
      //     source_url: 'https://www.indeed.com/viewjob?jk=1234567890',
      //     url: 'https://www.amazon.jobs/en/jobs/1234567',
      //   },
      //   {
      //     avg_annual_salary_usd: null,
      //     cities: [],
      //     company: 'Google',
      //     company_domain: 'google.com',
      //     company_object: {
      //       name: 'Google',
      //       domain: 'google.com',
      //       industry: 'Technology',
      //       country: 'USA',
      //       country_code: 'US',
      //     },
      //     country: 'USA',
      //     country_code: 'US',
      //     country_codes: ['US'],
      //     date_posted: '2025-01-18',
      //     description:
      //       'Vaga para desenvolvedor front-end com experiência em React e Angular.',
      //     final_url: 'https://careers.google.com/jobs/123456',
      //     job_title: 'Front-End Developer',
      //     location: 'Mountain View, CA',
      //     latitude: 37.4231,
      //     longitude: -122.0838,
      //     remote: false,
      //     hybrid: false,
      //     seniority: 'mid_level',
      //     source_url: 'https://www.indeed.com/viewjob?jk=0987654321',
      //     url: 'https://careers.google.com/jobs/123456',
      //   },
      // ];
     
      setJobs(jobList);

    }
    Jobs();
  }, []);


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
            description={'Veja todas as vagas que você se candidatou.'}
          />

          <div className='border-b  w-[100%] mx-auto border-zinc-500/70 my-4' />

          <SearchBar />
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 my-10'>
            {jobs && jobs?.map((job) => <CandidaturaCard key={job.id} {...job} />)}
          </div>
         

         <Footer/>
        </main>
      </div>
    </>
  );
};
export default Candidaturas;
