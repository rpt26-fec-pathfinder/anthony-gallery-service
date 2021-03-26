import React from 'react';


const Modal = ({ children, open, close }) => {
  return (
    open &&
    <div onClick={() => close()}>
      <div >
        {children}
      </div>
    </div>
  );
}

export default Modal;