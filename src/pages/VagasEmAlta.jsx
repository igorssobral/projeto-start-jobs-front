import { FilterX, MenuIcon, UserCircle2, UserPlus } from 'lucide-react';
import SearchBar from '../components/SearchBar';

import { useEffect, useState } from 'react';
import Header from '../components/Header';
// import { getJobs, getJobsByFilters } from '../services/jobService';
import { useAuth } from '../context/auth-context';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '../components/ui/drawer';
import Jobcard from '../components/Jobcard';

const VagasEmAlta = ({ showMenu, showLogin, showRegister }) => {
  const [jobs, setJobs] = useState([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const [filters, setFilters] = useState({
    keyword: '',
    location: '',
    remote: '',
  });

  const { user } = useAuth();

  useEffect(() => {
    Jobs();
  }, [filters]);

  useEffect(() => {
    Jobs();
  }, []);

  async function Jobs() {
    if (filters.keyword != '' || filters.location != '') {
      //   const response = await getJobsByFilters(filters.keyword, filters.location, filters.remote);
      //  console.log('🚀 ~ Jobs ~ response:', response.data);
      //  setJobs(response.data);
      setJobs([]);
    } else {
      const jobList = [
        {
          avg_annual_salary_usd: null,
          cities: [],
          company: 'Claro',
          company_domain: 'claro.com.br',
          company_object: {
            name: 'Claro',
            domain: 'claro.com.br',
            industry: 'Telecommunications',
            country: 'Brazil',
            country_code: 'BR',
          },
          country: 'Brazil',
          country_code: 'BR',
          country_codes: ['BR'],
          date_posted: '2025-01-29',
          description: 'Aqui vai a descrição do cargo...',
          final_url:
            'https://vempraclaro.gupy.io/jobs/8528466?jobBoardSource=share_link',
          // 'https://vempraclaro.gupy.io/job/eyJqb2JJZCI6ODAwMDI1Niwic291cmNlIjoiaW5kZWVkIn0=?jobBoardSource=indeed',
          job_title: 'Analista Data Center Júnior',
          location: 'Salvador - BA',
          // latitude: -22.952133,
          // longitude: -43.282722,
          remote: false,
          hybrid: false,
          seniority: 'junior',
          source_url: 'https://indeed.com/viewjob?jk=29253d08c31cb605',
          url: 'https://vempraclaro.gupy.io/jobs/8528466?jobBoardSource=share_link',
          // 'https://vempraclaro.gupy.io/job/eyJqb2JJZCI6ODAwMDI1Niwic291cmNlIjoiaW5kZWVkIn0=?jobBoardSource=indeed',
        },
        {
          avg_annual_salary_usd: null,
          cities: [],
          company: 'Amazon',
          company_domain: 'amazon.com',
          company_object: {
            name: 'Amazon',
            domain: 'amazon.com',
            industry: 'E-commerce',
            country: 'USA',
            country_code: 'US',
          },
          country: 'USA',
          country_code: 'US',
          country_codes: ['US'],
          date_posted: '2025-01-20',
          description:
            'Estamos procurando um desenvolvedor para trabalhar em projetos de backend.',
          final_url: 'https://www.amazon.jobs/en/jobs/1234567',
          job_title: 'Software Engineer',
          location: 'Seattle, WA',
          latitude: 47.6062,
          longitude: -122.3321,
          remote: true,
          hybrid: false,
          seniority: 'junior',
          source_url: 'https://www.indeed.com/viewjob?jk=1234567890',
          url: 'https://www.amazon.jobs/en/jobs/1234567',
        },
        {
          avg_annual_salary_usd: null,
          cities: [],
          company: 'Google',
          company_domain: 'google.com',
          company_object: {
            name: 'Google',
            domain: 'google.com',
            industry: 'Technology',
            country: 'USA',
            country_code: 'US',
          },
          country: 'USA',
          country_code: 'US',
          country_codes: ['US'],
          date_posted: '2025-01-18',
          description:
            'Vaga para desenvolvedor front-end com experiência em React e Angular.',
          final_url: 'https://careers.google.com/jobs/123456',
          job_title: 'Front-End Developer',
          location: 'Mountain View, CA',
          latitude: 37.4231,
          longitude: -122.0838,
          remote: false,
          hybrid: false,
          seniority: 'mid_level',
          source_url: 'https://www.indeed.com/viewjob?jk=0987654321',
          url: 'https://www.google.com/about/careers/applications/jobs/results',
        },
        {
          avg_annual_salary_usd: 100000,
          cities: ['San Francisco'],
          company: 'Apple',
          company_domain: 'apple.com',
          company_object: {
            name: 'Apple',
            domain: 'apple.com',
            industry: 'Technology',
            country: 'USA',
            country_code: 'US',
          },
          country: 'USA',
          country_code: 'US',
          country_codes: ['US'],
          date_posted: '2025-01-15',
          description:
            'Apple está buscando um desenvolvedor de software para integrar nosso time de iOS. Experiência com Swift é essencial.',
          final_url: 'https://www.apple.com/jobs/us/1234567',
          job_title: 'iOS Developer',
          location: 'Cupertino, CA',
          latitude: 37.3349,
          longitude: -122.009,
          remote: true,
          hybrid: true,
          seniority: 'mid_level',
          source_url: 'https://www.indeed.com/viewjob?jk=abcd1234',
          url: 'https://www.apple.com/jobs/us/1234567',
        },
        {
          avg_annual_salary_usd: 120000,
          cities: ['Austin'],
          company: 'Microsoft',
          company_domain: 'microsoft.com',
          company_object: {
            name: 'Microsoft',
            domain: 'microsoft.com',
            industry: 'Technology',
            country: 'USA',
            country_code: 'US',
          },
          country: 'USA',
          country_code: 'US',
          country_codes: ['US'],
          date_posted: '2025-01-10',
          description:
            'Procuramos um desenvolvedor de software para trabalhar com C# e Azure. Deve ter habilidades para criar soluções escaláveis.',
          final_url: 'https://careers.microsoft.com/us/1234567',
          job_title: 'Software Engineer',
          location: 'Redmond, WA',
          latitude: 47.674,
          longitude: -122.1215,
          remote: false,
          hybrid: true,
          seniority: 'senior',
          source_url: 'https://www.indeed.com/viewjob?jk=efgh5678',
          url: 'https://careers.microsoft.com/us/1234567',
        },
        {
          avg_annual_salary_usd: 95000,
          cities: ['New York'],
          company: 'Spotify',
          company_domain: 'spotify.com',
          company_object: {
            name: 'Spotify',
            domain: 'spotify.com',
            industry: 'Music Streaming',
            country: 'USA',
            country_code: 'US',
          },
          country: 'USA',
          country_code: 'US',
          country_codes: ['US'],
          date_posted: '2025-01-08',
          description:
            'Estamos à procura de um engenheiro de software para integrar nossa equipe de backend. Experiência com Python e AWS é desejável.',
          final_url: 'https://www.spotify.com/careers/jobs/123456',
          job_title: 'Backend Developer',
          location: 'New York, NY',
          latitude: 40.7128,
          longitude: -74.006,
          remote: true,
          hybrid: false,
          seniority: 'junior',
          source_url: 'https://www.indeed.com/viewjob?jk=ijkl91011',
          url: 'https://www.spotify.com/careers/jobs/123456',
        },
        {
          avg_annual_salary_usd: 110000,
          cities: ['Chicago'],
          company: 'Facebook',
          company_domain: 'facebook.com',
          company_object: {
            name: 'Facebook',
            domain: 'facebook.com',
            industry: 'Technology',
            country: 'USA',
            country_code: 'US',
          },
          country: 'USA',
          country_code: 'US',
          country_codes: ['US'],
          date_posted: '2025-01-05',
          description:
            'Procuramos um desenvolvedor full-stack com experiência em JavaScript, React e Node.js. O trabalho será 100% remoto.',
          final_url: 'https://www.facebook.com/careers/jobs/123456',
          job_title: 'Full-stack Developer',
          location: 'Menlo Park, CA',
          latitude: 37.4848,
          longitude: -122.147,
          remote: true,
          hybrid: true,
          seniority: 'mid_level',
          source_url: 'https://www.indeed.com/viewjob?jk=mnop1122',
          url: 'https://www.facebook.com/careers/jobs/123456',
        },
      ];

      //  const response = await getJobs();
      // setJobs(response.data);
      setJobs(jobList);
    }
  }

  function handleOpenMenu() {
    showMenu();
  }
  function handleOpenLogin() {
    showLogin();
  }
  function handleOpenRegister() {
    showRegister();
  }
  return (
    <div className='min-h-screen bg-slate-100 transition-colors dark:bg-[#1F1E25] flex flex-col'>
      <main className='flex-1 justify-between ml-0 md:ml-64 p-6 relative'>
        <button
          onClick={handleOpenMenu}
          className='md:hidden dark:text-zinc-50 z100'
        >
          <MenuIcon />
        </button>

        <Header
          title={'Vagas em Alta'}
          description={'Pesquise e filtre as oportunidades desejadas.'}
        />

        <div className='border-b w-[100%] mx-auto border-zinc-500/70 my-4' />

        <div className='md:hidden flex justify-center'>
          <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
            <DrawerTrigger className='w-32 mt-2 bg-blue-500 text-white font-semibold py-3 rounded-lg hover:bg-blue-600 transition-colors duration-200 focus:ring-4 focus:ring-blue-300'>
              Filtros
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerClose className='fixed right-2 top-3'>
                  <FilterX className='dark:text-[#FAFAF9]' />
                </DrawerClose>
              
                <DrawerTitle>Filtros</DrawerTitle>  

              </DrawerHeader>
              <SearchBar onSearch={(e) => setFilters(e)} />
              <DrawerFooter className=' px-10'></DrawerFooter>

            </DrawerContent>
            
          </Drawer>
        </div>
        <div className='max-md:hidden'>
          <SearchBar onSearch={(e) => setFilters(e)} />
        </div>

        {user && (
          <div style={{ minHeight: 'calc(100dvh - 370px)' }}>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 my-10'>
              {jobs && jobs?.map((job) => <Jobcard key={job.id} {...job} />)}
            </div>
          </div>
        )}

        {!user && (
          <div className='h-dvh overflow-y-auto z-100 fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center '>
            <button
              onClick={handleOpenMenu}
              className='md:hidden dark:text-zinc-50 absolute top-6 left-6'
            >
              <MenuIcon />
            </button>
            <div className='bg-white dark:bg-[#151419] dark:border dark:border-zinc-700 rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-[600px] p-6 lg:ml-32'>
              <div className='flex flex-col justify-between items-start border-b pb-3'>
                <h2 className='text-xl font-semibold text-gray-900 dark:text-zinc-200'>
                  Faça Login ou cadastro pra Visualizar as vagas de emprego{' '}
                </h2>
              </div>

              <div className='flex justify-center mt-6 space-x-2'>
                <button
                  className='text-gray-700 dark:text-gray-300 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors font-medium rounded-lg text-sm px-5 py-2.5'
                  onClick={handleOpenRegister}
                >
                  <span className='flex items-center justify-center gap-2'>
                    <UserPlus size={20} />
                    Cadastro
                  </span>
                </button>

                <button
                  className=' text-white bg-blue-600 hover:bg-blue-800 transition-colors focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-3.5 text-center w-max'
                  onClick={handleOpenLogin}
                >
                  <span className='flex items-center justify-center gap-2'>
                    <UserCircle2 size={20} />
                    Login
                  </span>
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default VagasEmAlta;
