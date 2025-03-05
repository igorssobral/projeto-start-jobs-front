import { MenuIcon } from 'lucide-react';
import Header from '../components/Header';

import DicasCVCard from '../components/DicasCVCard';
import Image1 from '../assets/DicasCV_1.png';
import Image2 from '../assets/DicasCV_2.png';
import Image3 from '../assets/DicasCV_3.png';
import Image4 from '../assets/DicasCV_4.png';

import pdf from '../assets/DicaCV.pdf';
import { useState } from 'react';

const DicasCV = ({ showMenu }) => {
  const [openDicasCv, setOpenDicasCv] = useState(false);

  const cardsData = [
    {
      image: Image1,
      altText: 'Descrição da imagem 1',
      title: 'Modelos de currículos profissionais',
      description:
        'Chame atenção com modelos de currículos desenvolvidos por especialistas e seja aprovado pelos recrutadores das empresas.',
        url: 'https://www.jobseeker.com/pt/curriculo?msclkid=4ec8da9bb6b61019ef7fbd2f6200ef05&utm_source=bing&utm_medium=cpc&utm_campaign=02+%7C+PT-BR+%7C+CV&utm_term=curriculo+pronto&utm_content=curriculo+pronto',
    },
    {
      image: Image2,
      altText: 'Descrição da imagem 2',
      title: 'Entrevista de empregos: dicas para se dar bem',
      description:
        'Como se comportar e o que dizer no momento da entrevista de emprego sobre você e suas experiências de trabalho.',
      url:'https://www.hostgator.com.br/blog/entrevista-de-emprego-dicas/?gad_source=1',  
    },
    {
      image: Image3,
      altText: 'Descrição da imagem 3',
      title: 'Guia para criar o seu portfólio',
      description:
        'Portfólio profissional: dicas para montar um bom perfil de apresentação',
      url: 'https://www.serasaexperian.com.br/carreiras/blog-carreiras/portfolio-profissional/'
    },
    {
      image: Image4,
      altText: 'Descrição da imagem 4',
      title: 'Fazer networking e potencializar sua carreira',
      description:
        'Aprenda a se conectar com outros profissionais e construir bons relacionamentos para sua carreira.',
      url:'https://blog.infojobs.com.br/candidatos/como-fazer-networking-e-potencializar-sua-carreira/',
    },
  ];

  function handleOpenMenu() {
    showMenu();
  }

  return (
    <div className='min-h-screen bg-slate-100 transition-colors dark:bg-[#1F1E25]'>
      <div className='ml-0 md:ml-64 p-6'>
        <button
          onClick={handleOpenMenu}
          className='md:hidden dark:text-zinc-50'
        >
          <MenuIcon />
        </button>
        <Header
          title={'Dicas de Currículo'}
          description={
            'Monte seu currículo profissional'
          }
        />

        <div className='border-b w-[100%] mx-auto border-zinc-500/70 mb-8' />

        <main>
          <h1 className='text-2xl text-center font-medium mb-6 dark:text-[#FAFAF9]'>
            Transforme seu Currículo: Dicas Essenciais para Alavancar sua Carreira
          </h1>
          <div className='p-4 flex flex-col items-center'>

            {/* Grid dos cards */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 2xl:gap-8 max-w-[1100px]'>
              {cardsData.map((card, index) => (
                <DicasCVCard
                  key={index}
                  image={card.image}
                  altText={card.altText}
                  title={card.title}
                  description={card.description}
                  url={card.url}
                />
              ))}
            </div>

            {/* Botão Confira mais Dicas - Abrirá o pdf */}
            <div className='flex justify-center mt-12'>
              <a href={pdf} target='_blank'>
                <button className='px-8 py-3 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-700 dark:bg-blue-500 dark:text-zinc-50 dark:hover:bg-blue-700 transition duration-300 '>
                Confira mais Dicas
                </button></a>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DicasCV;
