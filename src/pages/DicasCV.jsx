import { MenuIcon } from 'lucide-react';
import PDFViewer from '../components/PdfViewer';
import Header from '../components/Header';

import DicasCVCard from '../components/DicasCVCard';
import Image1 from '../assets/DicasCV_1.png';
import Image2 from '../assets/DicasCV_2.png';
import Image3 from '../assets/DicasCV_3.png';
import Image4 from '../assets/DicasCV_4.png';
// import Modal from '../components/Modal';
import pdf from '../assets/ATS.pdf';
import { useState } from 'react';

const DicasCV = ({ showMenu }) => {
  const [openDicasCv, setOpenDicasCv] = useState(false);

  const cardsData = [
    {
      image: Image1,
      altText: 'Descrição da imagem 1',
      title: 'Modelos criados por profissionais',
      description:
        'Chame atenção com modelos de currículos desenvolvidos por especialistas e seja aprovado pelos recrutadores das empresas.',
        url: 'https://www.jobseeker.com/pt/curriculo?msclkid=4ec8da9bb6b61019ef7fbd2f6200ef05&utm_source=bing&utm_medium=cpc&utm_campaign=02+%7C+PT-BR+%7C+CV&utm_term=curriculo+pronto&utm_content=curriculo+pronto',
    },
    {
      image: Image2,
      altText: 'Descrição da imagem 2',
      title: 'Conteúdos escritos por especialistas',
      description:
        'Tópicos específicos por cargos. Personalize o conteúdo para cada vaga que quiser se candidatar.',
      url: 'https://www.scielo.br/j/ptp/a/6fnm9ShDY8jLZN5XSyJy96h/?form=MG0AV3'  
    },
    {
      image: Image3,
      altText: 'Descrição da imagem 3',
      title: 'Guia de orientações do recrutamento',
      description:
        'Aprenda a apresentar suas experiências profissionais da melhor forma, isso lhe ajudará em cada etapa.',
      url: 'https://estudogeral.uc.pt/bitstream/10316/115227/2/vf_PT_Guia%20de%20procedimentos%20de%20recrutamento%20e%20sele%c3%a7%c3%a3o.pdf'
    },
    {
      image: Image4,
      altText: 'Descrição da imagem 4',
      title: 'Compartilhe seu currículo com amigos',
      description:
        'Crie um link do seu currículo, compartilhe com amigos e use o feedback deles para deixar seu currículo ainda melhor.',
      url:'',
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
          title={'Dicas para o seu Currículo'}
          description={
            ' Aqui você encontra dicas de como montar um Currículo Vitae Profissional.'
          }
        />

        <div className='border-b w-[100%] mx-auto border-zinc-500/70 mb-8' />

        <main>
          <h1 className='text-2xl text-center font-medium mb-6 dark:text-[#FAFAF9]'>
            Transforme seu Currículo: Dicas Essenciais para Alavancar sua Carreira
          </h1>
          <div className='p-4'>

            {/* Grid dos cards */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
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
            {/* <div className='flex justify-center mt-12'>
              <button
              onClick={() => setOpenDicasCv(true)}
              className='px-8 py-3 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-700 dark:bg-blue-500 dark:text-zinc-50 dark:hover:bg-blue-700 transition duration-300 '>
                Confira mais Dicas
              </button>
            </div> */}
          </div>
        </main>
        {/* <PDFViewer /> */}
        {/* Modal para exibir o PDF */}
        {/* <Modal
          isVisible={openDicasCv}
          width={'800px'}
          closeModal={() => setOpenDicasCv(false)}
        >
          
        </Modal> */}
      </div>
    </div>
  );
};

export default DicasCV;