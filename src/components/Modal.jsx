import React from 'react';

const Modal = ({ isVisible, children }) => {
  if (!isVisible) return null;

  return (
    <div
      className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'
      id='wrapper'
      
    >
      <div className='md:w-[600px] w-[90%] mx-auto flex flex-col'>
        <div className='bg-white p-2 rounded'>{children}</div>
    
      </div>
    </div>
  );
};

export default Modal;
