import { MenuIcon } from 'lucide-react';
import Header from '../components/Header';
import { Footer } from '../components/Footer';
import reuniao from '../assets/reuniao-2.jpg';
import hiring from '../assets/job-hiring2.jpg';
import smartphone from '../assets/smartphone.jpg';
// import apertoMao from '../assets/apertomao.jpg';
import socialMedia from '../assets/social-media.png';


function Home({showMenu}) {
    function handleOpenMenu() {
        showMenu();
      }
  return (
    <main className="ml-0 md:ml-64 p-6 h-[100%] rounded-3xl">
      <button onClick={handleOpenMenu} className="md:hidden dark:text-zinc-50">
        <MenuIcon />
      </button>
      <Header
        title={"Start Jobs"}
        description={" Gerenciamento de perfis | 2024-2025"}
      />

      <div className="border-b  w-[100%] mx-auto border-zinc-500/70 my-4" />

      {/* Grid Layout */}
      <div className="grid grid-cols-3 gap-2">
        {/* Row 1 */}
        <div className="col-span-3 md:col-span-3 bg-white rounded-lg shadow-md h-96 dark:bg-[#151419] dark:text-slate-50">
          <div className="flex flex-row">
            <img
              src={reuniao}
              alt="imagem reuniao"
              className="rounded-lg shadow-sm"
            />
            <div className="text-justify m-3">
              <h1 className="text-blue-500 mb-2 text-lg font-extrabold">
                Start JOBS
              </h1>
              <h3 className="text-base text-center font-medium mb-5">
                Conectando Você às Melhores Oportunidades
              </h3>
              <p className="font-medium text-sm mb-4">
                <span className="ml-10">Explore</span> o Start JOBS, uma
                aplicação web inovadora projetada para conectar você às melhores
                oportunidades de emprego.
              </p>
              <p className="font-medium text-sm mb-4">
              <span className="ml-10">Nosso</span>
                 sistema acompanha cada etapa do processo de seleção, desde
                a inscrição inicial até a contratação, proporcionando uma
                experiência organizada e ágil aos candidatos.
              </p>
              <p className="font-medium text-sm">
              <span className="ml-10">Com</span>
                 a Start JOBS sua plataforma integrada de gerenciamento de
                candidaturas, encontrar o emprego ideal nunca foi tão eficiente
                e fácil!
              </p>
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="col-span-3 md:col-span-auto bg-white rounded-lg shadow-md h-96 dark:bg-[#151419] dark:text-slate-50">
          <div className="flex flex-row">
            <div>
              <h1 className="text-blue-500 m-2 ml-3 text-lg font-extrabold">
                Start JOBS
              </h1>
              <h2 className="text-base text-center font-medium mb-5">
                Transformamos suas buscas em conquistas
              </h2>

              <p className="font-normal ml-3">🔹 Experiência organizada:</p>
              <p className="ml-8 mb-2 font-medium text-sm">
                Acompanhe cada passo da seleção sem complicações.
              </p>

              <p className="font-normal ml-3">🔹 Transparência total:</p>
              <p className="ml-8 mb-2 font-medium text-sm">
                Saiba sempre onde está no processo.
              </p>

              <p className="font-normal ml-3">🔹 Eficiência máxima:</p>
              <p className="ml-8 mb-2 font-medium text-sm">
                Economize tempo e esforço com nossa plataforma integrada.
              </p>

              <p className="font-normal ml-3">🔹 Oportunidades certeiras:</p>
              <p className="ml-8 mb-7 font-medium text-sm">
                Encontre o emprego ideal rapidamente.
              </p>

              <p className="ml-3 mt-3 font-medium text-base">
                Utilize o Start Jobs e transforme suas buscas por emprego em
                conquistas! 🚀
              </p>
            </div>

            <img
              src={hiring}
              alt="imagem reuniao"
              className="rounded-lg shadow-sm"
            />
          </div>
        </div>

        {/* Row 3 */}
        <div className="col-span-3 md:col-span-auto bg-white rounded-lg shadow-md h-96 dark:bg-[#151419] dark:text-slate-50">
        <div className="flex flex-row">
            <div class="">
              <img src={smartphone} alt="image smartphone" className="h-full object-cover rounded-lg shadow-md mt-3 mx-1" />
            </div>
            <div>
              <img src={socialMedia} alt="image redes sociais" className="h-full object-cover rounded-lg shadow-md mt-3 px-1" />
            </div>
          </div>
        </div>
      </div>
      <div className="border-b  w-[100%] mx-auto border-zinc-500/70 my-4" />
      <Footer />
    </main>
  );
}

export default Home;


