import { Bell, MenuIcon } from "lucide-react";
import { Footer } from "../components/Footer";
import perfilPaula from "../assets/perfilPaula.jpg";
import DicasCVCard from "../components/DicasCVCard";
import Image1 from "../assets/DicasCV_1.png";
import Image2 from "../assets/DicasCV_2.png";
import Image3 from "../assets/DicasCV_3.png";
import Image4 from "../assets/DicasCV_4.png";

const DicasCV = ({ showMenu }) => {

    const cardsData = [
        {
          image: Image1,
          altText: "Descrição da imagem 1",
          title: "Modelos criados por profissionais",
          description:
            "Chame atenção com nossos modelos de currículo desenvolvidos por especialistas e seja aprovado pelos softwares de recrutamento usados nas empresas.",
        },
        {
          image: Image2,
          altText: "Descrição da imagem 2",
          title: "Conteúdos escritos por especialistas",
          description:
            "Você pode escolher entre milhares de tópicos pré-escritos e específicos por cargo. Em segundos, personalize o conteúdo para cada vaga que quiser se candidatar.",
        },
        {
          image: Image3,
          altText: "Descrição da imagem 3",
          title: "Dicas e orientações em todas as etapas",
          description:
            "Nossos especialistas estão prontos para te ajudar em cada etapa. Aprenda a apresentar sua experiência profissional e educação da melhor forma.",
        },
        {
          image: Image4,
          altText: "Descrição da imagem 4",
          title: "Compartilhe seu currículo com amigos",
          description:
            "Crie um link do seu currículo, compartilhe com amigos e use o feedback deles para deixar seu currículo ainda melhor.",
        },
      ];

  function handleOpenMenu() {
    showMenu();
  }
  return (
    <div className="min-h-screen bg-slate-100 transition-colors dark:bg-blue-950">
      <div className="ml-0 md:ml-64 p-6">

        <button
          onClick={handleOpenMenu}
          className="md:hidden dark:text-zinc-50"
        >
          <MenuIcon />
        </button>
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-medium dark:text-[#FAFAF9]">
              Dicas para o seu Currículo
            </h1>
            <p className="text-gray-500 dark:text-zinc-400">
              Aqui você encontra dicas de como montar um Currículo Vitae
              Profissional.
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
                className="mr-3 size-full object-cover"
              />
            </button>
            <h1 className="ml-4 text-xl font-normal dark:text-zinc-400">
              Perfil logado
            </h1>
          </div>
        </div>
        <div className="border-b  w-[100%] mx-auto border-zinc-500/70 my-4" />

         {/* Grid Layout */}
      <main>
          <h1 className="text-2xl text-center font-medium mb-8 dark:text-[#FAFAF9]">
              Crie o currículo perfeito com nosso gerador online
          </h1>
           <div className="p-4">
                {/* Grid dos cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {cardsData.map((card, index) => (
                    <DicasCVCard
                      key={index}
                      image={card.image}
                      altText={card.altText}
                      title={card.title}
                      description={card.description}
                    />
                  ))}
                </div>

                {/* Botão Criar Currículo */}
                <div className="flex justify-center mt-12">
                  <button className="px-8 py-3 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-700 dark:bg-blue-500 dark:text-zinc-50 dark:hover:bg-blue-700 transition duration-300 ">
                    Criar meu currículo
                  </button>
                </div>
              </div>
      </main>
          <Footer />   
      </div>
    </div>
  );
};

export default DicasCV;
