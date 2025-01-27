const DicasCVCard = ({ image, altText, title, description, onClick }) => {
  return (
    <div
      className='max-w-lg mx-auto bg-[#F6F5F0] dark:bg-[#151419] rounded-2xl shadow-lg overflow-hidden cursor-pointer '
      onClick={onClick}  
    >
      <img
        src={image}
        alt={altText}
        className='w-full h-48 object-cover bg-gray-100'
      />
      <div className='p-4 bg-[#F6F5F0] dark:bg-[#151419]'>
        <h2 className='text-xl font-semibold text-blue-950 dark:text-zinc-50'>
          {title}
        </h2>
        <p className='mt-2 text-blue-950 dark:text-zinc-50'>{description}</p>
      </div>
    </div>
  );
};

export default DicasCVCard;
