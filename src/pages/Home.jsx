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

  const [slidePerView, setSlidePerView] = useState(1);
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

      <div className='border-b  w-[100%] mx-auto border-zinc-500/70 my-4' />

      {/* Grid Layout */}
      <div className='grid grid-cols-3 gap-3'>
        {/* Row 1 */}

        <div className='col-span-3 md:col-span-3 '>
          <h1 className='text-blue-500 mb-2 text-3xl font-bold'>Start JOBS</h1>
          <h2 className='text-xl font-semibold ml-10 mb-1 dark:text-slate-50'>
            Conectando Você a um mundo de Oportunidades!
          </h2>
        </div>

        <div className='col-span-3 md:col-span-3 bg-white rounded-lg dark:bg-[#151419] dark:text-slate-50'>
          <div className='flex flex-col bg-cover border border-separate rounded-lg'>
            <img
              src={ApertoMao}
              alt='imagem aperto de maos'
              className='rounded-lg shadow-sm'
            />
          </div>
        </div>

        <div className='col-span-3 md:col-span-3 bg-white rounded-lg dark:bg-[#151419] dark:text-slate-50'>
          <div className=' border border-separate p-5 rounded-lg '>
            <p className='font-medium text-xl mb-1'>Mas o que é Start JOBS?</p>
            <p className='font-medium text-gl ml-10 mb-5'>
              {' '}
              É uma aplicação web inovadora, projetada para conectar você às
              melhores oportunidades de emprego.
            </p>
            <p className='font-medium text-xl mb-1'>Como funciona?</p>
            <p className='font-medium text-gl mb-4 ml-10'>
              Nosso sistema acompanha cada etapa do processo de seleção, desde a
              inscrição inicial até a contratação, proporcionando uma
              experiência organizada e ágil aos candidatos.
            </p>
            <p className='font-medium text-xl mb-1'>Como opero a Start JOBS?</p>
            <p className='font-medium text-gl ml-10'>
              Com a Start JOBS sua plataforma integrada de gerenciamento de
              candidaturas, você só precisa encontrar o emprego ideal,
              adiciona-lo a vagas em alta, aplicando a vaga, e já pode começar a
              se preparar para os processos que virão, e pronto, buscar uma
              oportunidade nunca foi tão eficiente e fácil!
            </p>
          </div>
        </div>

        {/* Row 2 */}
        <div className='col-span-3 md:col-span-3 bg-white rounded-lg dark:bg-[#151419] dark:text-slate-50'>
          <div className='border border-separate pt-2 pl-5 rounded-lg flex flex-col'>
            <div>
              <h1 className='text-blue-500 mt-3 ml-8 text-3xl font-bold '>
                Start JOBS
              </h1>
              <h2 className='text-xl text-center font-medium mt-3 mb-5'>
                Utilize o Start JOBS e transforme suas buscas por emprego em
                conquistas! 🚀
              </h2>

              <div />
            </div>
            <div className='flex ml-8'>
              <LuLayers size={26} />
              <h2 className='font-medium ml-8'>Experiência organizada:</h2>
              <p className='ml-8 mb-4 text-gl'>
                Acompanhe cada passo da seleção sem complicações.
              </p>
            </div>
            <div className='border-b  w-[95%] mx-auto border-zinc-500/70 mb-6' />
            <div className='flex ml-8'>
              <LuShrink size={26} />
              <p className='font-medium ml-8'>Controle total:</p>
              <p className='ml-8 mb-4 text-gl'>
                Saiba sempre onde está em cada etapa do processo.
              </p>
            </div>
            <div className='border-b  w-[95%] mx-auto border-zinc-500/70 mb-6' />
            <div className='flex ml-8'>
              <LuBoxes size={26} />
              <p className='font-medium ml-8'>Eficiência máxima:</p>
              <p className='ml-8 mb-4 text-gl'>
                Economize tempo e esforço com nossa plataforma integrada.
              </p>
            </div>
            <div className='border-b  w-[95%] mx-auto border-zinc-500/70 mb-6' />
            <div className='flex ml-8'>
              <LuMapPinPlus size={26} />
              <p className='font-medium ml-8'>Oportunidades promissoras:</p>
              <p className='ml-8 mb-4 text-gl'>
                Encontre rapidamente o emprego ideal.
              </p>
            </div>
            <div className='border-b  w-[95%] mx-auto border-zinc-500/70 mb-6' />
          </div>
        </div>

        {/* Row 3 */}
        <div className='col-span-3 md:col-span-auto bg-white shadow-md h-96 rounded-lg dark:bg-[#151419] dark:text-slate-50'>
          <Swiper
            slidesPerView={slidePerView}
            pagination={{ clickable: true }}
            navigation
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
