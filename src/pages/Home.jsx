import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';

import { MenuIcon } from 'lucide-react';
import Header from '../components/Header';
import { Footer } from '../components/Footer';

import Hiring from '../assets/job-hiring2.jpg';
import Smartphone from '../assets/smartphone.jpg';
import SocialMedia from '../assets/social-media.png';
import ApertoMao from '../assets/apertomao.jpg';
import Reuniao from '../assets/reuniao-2.jpg';

import { LuLayers, LuMapPinPlus, LuBoxes, LuShrink } from 'react-icons/lu';

function Home({ showMenu }) {
  function handleOpenMenu() {
    showMenu();
  }

  const [slidePerView] = useState(1);
  const data = [
    { id: '1', image: Reuniao },
    { id: '2', image: Smartphone },
    { id: '3', image: Hiring },
    { id: '4', image: SocialMedia },
    { id: '5', image: ApertoMao },
  ];

  return (
    <main className='ml-0 md:ml-64 p-6 h-[100%] rounded-3xl'>
      <button onClick={handleOpenMenu} className='md:hidden dark:text-zinc-50'>
        <MenuIcon />
      </button>
      <Header
        title={'Conheça a Plataforma'}
        description={'Saiba mais sobre a Start JOBS'}
      />

      {/* Grid Layout */}
      <div className='grid grid-cols-3 gap-3'>
        {/* Row 1 */}

        <div className='col-span-3 md:col-span-3 shad'>
          <h1 className='text-blue-600 mb-2 text-3xl font-bold text-center '>
            Start JOBS
          </h1>
          <h2 className='text-xl text-center font-semibold ml-10 mb-1 dark:text-zinc-300'>
            Conectando Você a um mundo de Oportunidades!
          </h2>
        </div>
        <div className='col-span-3 md:col-span-3 bg-white rounded-lg dark:bg-[#151419] dark:text-slate-50 text-black shadow-lg'>
          <div className='p-5 rounded-lg bg-white dark:bg-[#151419] '>
            {/* Título principal */}
            <p className='font-semibold text-2xl text-blue-500 mb-4'>
              Mas o que é Start JOBS?
            </p>

            {/* Descrição */}
            <p className='text-lg mb-6'>
              Start JOBS é uma aplicação web inovadora, projetada para conectar
              você às melhores oportunidades de emprego. Ela facilita o processo
              de busca e candidaturas, otimizando a experiência para todos os
              usuários.
            </p>

            {/* Subtítulo */}
            <p className='font-semibold text-xl text-blue-500 mb-4'>
              Como funciona?
            </p>

            {/* Descrição do funcionamento */}
            <p className='text-lg mb-6'>
              Nosso sistema acompanha cada etapa do processo de seleção, desde a
              inscrição inicial até a contratação, proporcionando uma
              experiência organizada e ágil aos candidatos. Com isso, o processo
              é mais simples e eficiente.
            </p>

            {/* Subtítulo */}
            <p className='font-semibold text-xl text-blue-500 mb-4'>
              Como opero a Start JOBS?
            </p>

            {/* Descrição de operação */}
            <p className='text-lg'>
              Com a Start JOBS, sua plataforma integrada de gerenciamento de
              candidaturas, você só precisa encontrar o emprego ideal,
              adicioná-lo às vagas em alta, aplicar para a vaga, e já pode
              começar a se preparar para os processos que virão. E pronto!
              Buscar uma oportunidade nunca foi tão eficiente e fácil!
            </p>
          </div>
        </div>
        <div className='col-span-3 md:col-span-3 bg-white rounded-lg dark:bg-[#151419] dark:text-slate-50'>
          <div className=' flex flex-col bg-cover  rounded-lg'>
            <img
              src={ApertoMao}
              alt='imagem aperto de maos'
              className='rounded-lg shadow-sm'
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className='col-span-3 md:col-span-3 bg-white rounded-lg dark:bg-[#151419] dark:text-slate-50 text-black shadow-lg'>
          <div className='pt-6 px-5 pb-4 rounded-lg flex flex-col space-y-8'>
            {/* Título principal */}
            <h2 className='text-xl text-center font-semibold text-blue-500'>
              Utilize o Start JOBS e transforme suas buscas por emprego em
              conquistas! 🚀
            </h2>

            {/* Lista de características */}
            <div className='space-y-6'>
              <div className='flex items-center space-x-4'>
                <LuLayers size={26} className='text-blue-500' />
                <div>
                  <p className='font-semibold text-lg'>
                    Experiência organizada:
                  </p>
                  <p className='text-lg '>
                    Acompanhe cada passo da seleção sem complicações.
                  </p>
                </div>
              </div>
              <div className='border-b border-zinc-500/70' />

              <div className='flex items-center space-x-4'>
                <LuShrink size={26} className='text-blue-500' />
                <div>
                  <p className='font-semibold text-lg'>Controle total:</p>
                  <p className='text-lg '>
                    Saiba sempre onde está em cada etapa do processo.
                  </p>
                </div>
              </div>
              <div className='border-b border-zinc-500/70' />

              <div className='flex items-center space-x-4'>
                <LuBoxes size={26} className='text-blue-500' />
                <div>
                  <p className='font-semibold text-lg'>Eficiência máxima:</p>
                  <p className='text-lg '>
                    Economize tempo e esforço com nossa plataforma integrada.
                  </p>
                </div>
              </div>
              <div className='border-b border-zinc-500/70' />

              <div className='flex items-center space-x-4'>
                <LuMapPinPlus size={26} className='text-blue-500' />
                <div>
                  <p className='font-semibold text-lg'>
                    Oportunidades promissoras:
                  </p>
                  <p className='text-lg '>
                    Encontre rapidamente o emprego ideal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Row 3 */}
        <div className='col-span-3 md:col-span-auto bg-white shadow-md h-96 rounded-lg dark:bg-[#151419] dark:text-slate-50'>
          <Swiper
            slidesPerView={slidePerView}
            pagination={{ clickable: true }}
            navigation
            loop={true}
          >
            {data.map((item) => (
              <SwiperSlide key={item.id}>
                <img
                  src={item.image}
                  alt='Slider'
                  className='w-[100%] h-[24rem] object-cover rounded-lg'
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className='border-b  w-[100%] mx-auto border-zinc-500/70 mt-6' />
      <Footer />
    </main>
  );
}

export default Home;
