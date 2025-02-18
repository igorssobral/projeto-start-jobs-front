import pdf from '../assets/ATS.pdf';

const PdfViewer = () => {
  return (
    <div div className='min-h-screen bg-slate-100 transition-colors dark:bg-[#1F1E25]'>
      <embed src={pdf} type="application/pdf" width={100} height={100}/>
      {/* <iframe className='h-full w-[90%]' src={pdf} ></iframe> */}
    </div>
  );
};

export default PdfViewer;
