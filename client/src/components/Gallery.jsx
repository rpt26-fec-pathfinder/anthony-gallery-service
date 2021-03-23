import React, { useState, useEffect, useRef } from 'react';
import NavBar from './NavBar.jsx';
import HubButton from './HubButton.jsx';
import Categories from './Categories.jsx';
import SignIn from './SignIn.jsx';
import StopTimer from '../helpers/stopTimer.jsx'
import '../styling/WebkitScrollBar.css';
import { Wrapper, Title, Container, Prev, Next, Row, Col, ThumbImg } from '../styling/GalleryStyled.jsx'

// npm installed packages
import axios from 'axios';
import LazyLoad from 'react-lazyload';
import { motion } from "framer-motion";


const Gallery = () => {
  const [state, setState] = useState({
    title: 'Age of Empires II: Definitive Edition',
    idx: 0,
    preSelectedImage: null,
    showModal: false,
    main: [],
    thumb: [],
  })

  useEffect(async () => {
    // const imageRes = await axios.get(`/images${window.location.pathname}`);
    // const metaRes = await axios.get(`/api/product${window.location.pathname}`);

    // let main = imageRes.data[0].mainImages.map(item => item.main)
    // let thumb = imageRes.data[0].mainImages.map(item => item.thumb)

    let main = ["https://steam-fec.s3.amazonaws.com/steam1/main-1-1.jpg", "https://steam-fec.s3.amazonaws.com/steam1/main-1-2.jpg", "https://steam-fec.s3.amazonaws.com/steam1/main-1-3.jpg", "https://steam-fec.s3.amazonaws.com/steam1/main-1-4.jpg", "https://steam-fec.s3.amazonaws.com/steam1/main-1-5.jpg", "https://steam-fec.s3.amazonaws.com/steam1/main-1-6.jpg", "https://steam-fec.s3.amazonaws.com/steam1/main-1-7.jpg", "https://steam-fec.s3.amazonaws.com/steam1/main-1-8.jpg", "https://steam-fec.s3.amazonaws.com/steam1/main-1-9.jpg", "https://steam-fec.s3.amazonaws.com/steam1/main-1-10.jpg", "https://steam-fec.s3.amazonaws.com/steam1/main-1-11.jpg"]

    let thumb = ["https://steam-fec.s3.amazonaws.com/steam1/thumb-1-1.jpg", "https://steam-fec.s3.amazonaws.com/steam1/thumb-1-2.jpg", "https://steam-fec.s3.amazonaws.com/steam1/thumb-1-3.jpg", "https://steam-fec.s3.amazonaws.com/steam1/thumb-1-4.jpg", "https://steam-fec.s3.amazonaws.com/steam1/thumb-1-5.jpg", "https://steam-fec.s3.amazonaws.com/steam1/thumb-1-6.jpg", "https://steam-fec.s3.amazonaws.com/steam1/thumb-1-7.jpg", "https://steam-fec.s3.amazonaws.com/steam1/thumb-1-8.jpg", "https://steam-fec.s3.amazonaws.com/steam1/thumb-1-9.jpg", "https://steam-fec.s3.amazonaws.com/steam1/thumb-1-10.jpg", "https://steam-fec.s3.amazonaws.com/steam1/thumb-1-11.jpg"]

    await setState(() => {
      return {
        ...state,
        // title: metaRes.data.name,
        main,
        thumb,
      }
    })

    // Timer();
  }, [])

  // function Timer() {
  //   setState((prevState) => {
  //     return {
  //       ...state,
  //       idx: prevState.idx < state.main.length - 1 ? prevState.idx + 1 : 0,
  //     }
  //   })
  //   setTimeout(Timer, 5250)
  // };

  function selectedSlide(e, index) {
    e.preventDefault();
    // StopTimer();
    // Timer();
    // state.preSelectedImage !== null ? state.preSelectedImage.classList.remove('active') : null;
    // e.target.classList.add('active')

    let page;
    if (index < 0) {
      page = state.thumb.length - 1;

    } else if (index >= state.thumb.length) {
      page = 0;

    } else {
      page = index;
    }

    setState(() => {
      return {
        ...state,
        idx: page,
        preSelectedImage: e.target,
      }
    })
  }

  const modelOptions = {
    position: 'fixed',
    paddingTop: '90px',
    paddingLeft: '200px',
    left: '0',
    top: '0',
    width: '130%',
    height: '100%',
    overflow: 'auto',
    backgroundColor: 'rgba(0, 0, 0, 0.94)',

  }

  // modal
  function Modal(e) {
    e.preventDefault(e);
    setState(prevState => {
      return {
        ...state,
        showModal: !prevState.showModal
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

      {/* MAIN IMAGES & MODAL */}
      <Container>
        {state.showModal ?
          <div style={modelOptions}>
            <img id="myModal"
              src={state.main[state.idx]} style={{ width: '52.5%' }} alt="main image" />

            {/* NAVIGATION ARROWS/BUTTONS */}
            <Prev onClick={(e) => selectedSlide(e, state.idx - 1)}>{String.fromCharCode(10094)}</Prev>
            <Next onClick={(e) => selectedSlide(e, state.idx + 1)}>{String.fromCharCode(10095)}</Next>
          </div>

          : <div className="mySlides" style={{ cursor: 'pointer' }} >
            <LazyLoad height={350}>
              <motion.img
                onClick={Modal}
                id="mainImage"
                src={state.main[state.idx]}
                key={state.main[state.idx]}
                initial={{ opacity: 0.3 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                style={{ width: '52.5%', minHeight: '350px' }}
                alt="main image" />
            </LazyLoad>
          </div>}

        {/* THUMBNAIL IMAGES */}
        <Row>
          {state.thumb.map((image, index) => {
            return <Col key={index} >
              <ThumbImg onClick={(e) => selectedSlide(e, index)} src={image} alt="thumb image" />
            </Col>
          })}
        </Row>
      </Container>
      <SignIn />
    </Wrapper >
  );
};

export default Gallery;

// TODO LIST
// modal where you can click left and right...also stops timer, timer initiates again when out of modal mode
// timer every 4 to 5 seconds change photos

/* selected image borders */
// .active {
//   border: 2.5px solid #d1d0c5;
// }
