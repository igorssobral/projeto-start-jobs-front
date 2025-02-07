import pdf from '../assets/ATS.pdf';
const PdfViewer = () => {
  return (
    <div>
      <iframe className='w-full h-[800px]' src={pdf} ></iframe>
    </div>
  );
};

export default PdfViewer;
