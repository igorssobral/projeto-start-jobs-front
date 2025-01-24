import { Bell, MenuIcon } from "lucide-react";
import { Footer } from "../components/Footer";
import perfilPaula from "../assets/perfilPaula.jpg";

const DicasCV = ({ showMenu }) => {
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
          <div className="grid grid-cols-3 gap-6 mt-10">
          {/* Row 1 */}
          <div className="col-span-3 bg-white rounded-lg shadow-sm h-96 dark:bg-[#151419]"></div>
          {/* <div className="col-span-3 bg-white rounded-lg shadow-sm h-96 dark:bg-[#151419]"></div> */}

          {/* Row 2 */}
           <div className='col-span-1 bg-white rounded-lg shadow-sm h-96 dark:bg-[#151419]'></div>
          <div className='col-span-2 bg-white rounded-lg shadow-sm h-96 dark:bg-[#151419]'></div>
        </div>
      </main>
          <Footer />   
      </div>

      
      
    </div>
  );
};

export default DicasCV;
