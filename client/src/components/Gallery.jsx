import React, { useState, useEffect } from 'react';

// other components
import NavBar from './NavBar.jsx';
import HubButton from './HubButton.jsx';
import Categories from './Categories.jsx';
import SignIn from './SignIn.jsx';
import Modal from './Modal.jsx'
import StopTimer from '../helpers/stopTimer.jsx';

// stylings
import '../styling/Gallery.css'
import { Title, ThumbImg, Wrapper, Main, Container, Row, Col } from '../styling/GalleryStyled.jsx';
import { Background, OuterModal, DownloadPrompt, ModalImage, PrevBtn, NextBtn, ScreenShots } from '../styling/ModalStyled.jsx'

// npm installed packages
import axios from 'axios';
import LazyLoad from 'react-lazyload';
import { motion } from "framer-motion";
import { BsDownload } from "react-icons/bs";



const Gallery = () => {
  const [state, setState] = useState({
    title: 'Age of Empires II: Definitive Edition',
    main: [],
    thumb: [],
    idx: 0,
    next: null,
    isModal: false,
  })

  useEffect(async () => {
    // const imageRes = await axios.get(`/images${window.location.pathname}`);
    // const metaRes = await axios.get(`/api/product${window.location.pathname}`);

    // let main = imageRes.data[0].mainImages.map(item => item.main)
    // let thumb = imageRes.data[0].mainImages.map(item => item.thumb)

    let main = ["https://steam-fec.s3.amazonaws.com/steam1/main-1-1.jpg", "https://steam-fec.s3.amazonaws.com/steam1/main-1-2.jpg", "https://steam-fec.s3.amazonaws.com/steam1/main-1-3.jpg", "https://steam-fec.s3.amazonaws.com/steam1/main-1-4.jpg", "https://steam-fec.s3.amazonaws.com/steam1/main-1-5.jpg", "https://steam-fec.s3.amazonaws.com/steam1/main-1-6.jpg", "https://steam-fec.s3.amazonaws.com/steam1/main-1-7.jpg", "https://steam-fec.s3.amazonaws.com/steam1/main-1-8.jpg", "https://steam-fec.s3.amazonaws.com/steam1/main-1-9.jpg", "https://steam-fec.s3.amazonaws.com/steam1/main-1-10.jpg", "https://steam-fec.s3.amazonaws.com/steam1/main-1-11.jpg"]

    let thumb = ["https://steam-fec.s3.amazonaws.com/steam1/thumb-1-1.jpg", "https://steam-fec.s3.amazonaws.com/steam1/thumb-1-2.jpg", "https://steam-fec.s3.amazonaws.com/steam1/thumb-1-3.jpg", "https://steam-fec.s3.amazonaws.com/steam1/thumb-1-4.jpg", "https://steam-fec.s3.amazonaws.com/steam1/thumb-1-5.jpg", "https://steam-fec.s3.amazonaws.com/steam1/thumb-1-6.jpg", "https://steam-fec.s3.amazonaws.com/steam1/thumb-1-7.jpg", "https://steam-fec.s3.amazonaws.com/steam1/thumb-1-8.jpg", "https://steam-fec.s3.amazonaws.com/steam1/thumb-1-9.jpg", "https://steam-fec.s3.amazonaws.com/steam1/thumb-1-10.jpg", "https://steam-fec.s3.amazonaws.com/steam1/thumb-1-11.jpg"]

    await setState({
      ...state,
      // title: metaRes.data.name,
      main,
      thumb,
    })
  }, [])

  // Timer
  function updateSlide(index) {
    StopTimer();

    setTimeout(() => {
      let thumbs = document.getElementsByClassName('thumb active')
      for (let thumb of thumbs) {
        thumb.classList.remove('active');
      }

      let allThumbs = document.getElementsByClassName('thumb')
      let next = index < state.thumb.length - 1 ? index + 1 : 0;
      allThumbs[next].classList.add('active')

      setState(prevState => {
        return {
          ...state,
          idx: prevState.idx < prevState.thumb.length - 1 ? prevState.idx + 1 : 0,
          next: index + 1,
        }
      })

      updateSlide(next);
    }, 5250)
  }

  // Selects thumbnail
  function selectedSlide(index, e) {
    e.preventDefault();

    let thumbs = document.getElementsByClassName('thumb active')

    for (let thumb of thumbs) {
      thumb.classList.remove('active');
    }

    if (e.target.classList.contains('thumb')) {
      e.target.classList.add('active');
    }

    let page;
    if (index < 0) {
      page = state.thumb.length - 1;
    } else if (index >= state.thumb.length) {
      page = 0;
    } else {
      page = index;
    }

    setState(prevState => {
      return {
        ...state,
        idx: page,
      }
    })

    if (state.isModal === false) {
      updateSlide(index);
    }
  }

  // show Modal Func
  function OpenModel() {
    StopTimer();

    setState(prevState => {
      return {
        ...state,
        isModal: !prevState.isModal
      }
    })
  }

  return (
    <Wrapper>
      <NavBar />
      <Categories />
      <Title>{state.title}</Title>
      <HubButton />
      <br />

      {/* MAIN IMAGES */}
      <Container>
        {<Main >
          <LazyLoad height={350}>
            <motion.img
              onClick={() => OpenModel()}
              id="mainImage"
              src={state.main[state.idx]}
              key={state.main[state.idx]}
              initial={{ opacity: 0.5 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              style={{ width: '52.5%', minHeight: '350px' }}
              alt="main image" />
          </LazyLoad>
        </Main>}

        {/* MODAL */}
        <Modal open={state.isModal} close={() => setState(prevState => {
          return {
            ...state,
            isModal: false,
          }
        })} >
          <Background>
            <OuterModal>
              <DownloadPrompt>&nbsp;&nbsp;&nbsp;Download full-size version&nbsp;&nbsp;<BsDownload style={{ verticalAlign: 'middle' }} /></DownloadPrompt>
              {/* Modal Image */}
              <ModalImage src={state.main[state.idx]} alt="main image" />
              <br />
              <br />
              <PrevBtn onClick={(e) => selectedSlide(state.idx - 1, e)}>Prev</PrevBtn>

              {/* Pic out of How Many */}
              <ScreenShots >{state.idx + 1} of {state.main.length} screenshots</ScreenShots>

              {/* Navigation */}
              <NextBtn onClick={(e) => selectedSlide(state.idx + 1, e)}>Next</NextBtn>
            </OuterModal>
          </Background>
        </Modal>

        {/* THUMBNAIL IMAGES */}
        <Row>
          {state.thumb.map((image, index) => {
            if (index === 0) {
              return <Col key={index} >
                <ThumbImg className="thumb active" onClick={e => selectedSlide(index, e)} src={image} alt="thumb image" />
              </Col>

            } else {
              return <Col key={index} >
                <ThumbImg className="thumb" onClick={e => selectedSlide(index, e)} src={image} alt="thumb image" />
              </Col>
            }
          })}
        </Row>
      </Container>
      <SignIn />
    </Wrapper >
  );
};

export default Gallery;

// TODO LIST
// be able to close modal by clicking outside of it
