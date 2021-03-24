import React from 'react';
import { ModelBackGround, ModalImgDownload, Prev, Next, NavBtn, ScreenShots } from '../styling/GalleryStyled.jsx'


const HugeGallery = ({ shown, close }) => {
  return shown ? (
    <div
      className="modal-backdrop"
      onClick={() => {
        close(); // close modal when outside of modal is clicked
      }}
    >
      <div
        className="modal-content"
        onClick={(e) => {
          e.stopPropagation(); // do not close modal if anything inside modal content is clicked
        }}
      ></div>
    </div>
  ) : null;
}

export default HugeGallery;