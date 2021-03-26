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


      //   {!state.isModal ?
      //     <Background>
      //       <OuterModal>
      //         <DownloadPrompt>&nbsp;&nbsp;&nbsp;Download full-size version&nbsp;&nbsp;<BsDownload style={{ verticalAlign: 'middle' }} /></DownloadPrompt>

      //         {/* Modal Image */}
      //         <ModalImage src={state.main[state.idx]} alt="main image" />
      //         <br />
      //         <br />
      //         <PrevBtn onClick={(e) => selectedSlide(state.idx - 1, e)}>Prev</PrevBtn>

      //         {/* Pic out of How Many */}
      //         <ScreenShots >{state.idx + 1} of {state.main.length} screenshots</ScreenShots>

      //         {/* Navigation */}
      //         <NextBtn onClick={(e) => selectedSlide(state.idx + 1, e)}>Next</NextBtn>
      //       </OuterModal>
      //     </Background>

      //     : <Main >
      //       <LazyLoad height={350}>
      //         <motion.img
      //           onClick={Modal}
      //           id="mainImage"
      //           src={state.main[state.idx]}
      //           key={state.main[state.idx]}
      //           initial={{ opacity: 0.5 }}
      //           animate={{ opacity: 1 }}
      //           transition={{ duration: 0.5 }}
      //           style={{ width: '52.5%', minHeight: '350px' }}
      //           alt="main image" />
      //       </LazyLoad>
      //     </Main>}


                  // return <Col key={index} >
            //   <ThumbImg className="thumb" onClick={(e) => selectedSlide(index, e)} src={image} alt="thumb image" />
            // </Col>