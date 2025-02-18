const Modal = ({ isVisible, closeModal, children }) => {
  if (!isVisible) return null;

  return (
    <div
      className='h-dvh overflow-y-auto z-50 fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'
      id='wrapper'
      onClick={closeModal}
    >
      <div
        className={`md:w-[600px] w-[90%] mx-auto flex flex-col`}
      >
        <div className='bg-white dark:bg-[#1F1E25] p-2 rounded'>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
