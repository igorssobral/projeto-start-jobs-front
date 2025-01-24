import { MenuIcon } from "lucide-react";
import PDFViewer from '../components/PdfViewer';
import pdf from '../assets/ATS.pdf'
import Header from '../components/Header';
const DicasCV = ({ showMenu }) => {

  function handleOpenMenu() {
    showMenu();
  }
  return (
    <div className="min-h-screen bg-slate-100 transition-colors dark:bg-[#1F1E25]">
      <main className="ml-0 md:ml-64 p-6">
        <button
          onClick={handleOpenMenu}
          className="md:hidden dark:text-zinc-50"
        >
          <MenuIcon />
        </button>
        <Header title={"Dicas para o seu Currículo"} description={" Aqui você encontra dicas de como montar um Currículo Vitae Profissional."}/>

        
        <div className='border-b  w-[100%] mx-auto border-zinc-500/70 my-4' />

        
        <PDFViewer pdfUrl={pdf}/>
      
      </main>
    </div>
  );
};

export default DicasCV;
