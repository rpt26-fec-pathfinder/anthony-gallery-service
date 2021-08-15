import React, { useState, useEffect } from 'react';

// other components
import NavBar from './NavBar.jsx';
// import HubButton from './HubButton.jsx';
import Categories from './Categories.jsx';
import SignIn from './SignIn.jsx';
// import Name from './Name.jsx';
import Modal from './Modal.jsx'
import StopTimer from '../helpers/stopTimer.jsx';

// stylings
import '../styling/Gallery.css'
import { Grid, ThumbImg, Wrapper, Main, Container, Row, Col } from '../styling/GalleryStyled.jsx';
import { Background, OuterModal, Download, ModalImage, ScreenShots, ModalBottomGrid, Btn } from '../styling/ModalStyled.jsx'

// npm installed packages
import axios from 'axios';
import LazyLoad from 'react-lazyload';
import { motion } from "framer-motion";
import { BsDownload } from "react-icons/bs";


const Gallery = () => {
  const [state, setState] = useState({
    main: [],
    thumb: [],
    idx: 0,
    next: null,
    isModal: false,
  })

  useEffect(async () => {
    const imageRes = await axios.get(`/images${window.location.pathname}`);
    let main = imageRes.data[0].mainImages.map(item => item.main);
    let thumb = imageRes.data[0].mainImages.map(item => item.thumb);

    await setState({
      ...state,
      main,
      thumb,
    })
  }, [])

  // locks scrollbar when isModal is true
  useEffect(() => {
    state.isModal ? document.body.style.position = 'fixed' : document.body.style.position = 'unset';
  }, [state.isModal]);

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

      if (next === state.thumb.length - 2 || next === state.thumb.length - 1) {
        allThumbs[next].scrollIntoView({ behavior: 'smooth', block: 'end' });
      }
      if (next < state.thumb.length - 2) {
        allThumbs[next + 2].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
      if (next === 0) {
        allThumbs[0].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }

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

    setState({
      ...state,
      idx: page,
    })

    if (state.isModal === false) {
      updateSlide(index);
    }
  }

  // show Modal Func
  function OpenModel() {
    if (state.isModal) {
      let allThumbs = document.getElementsByClassName('thumb');
      allThumbs[state.idx].classList.add('active')
    }

    setState(prevState => {
      return {
        ...state,
        isModal: !prevState.isModal,
      }
    })

    StopTimer();
  }

  // scrolling event, stop timer when scrolling down to prevent auto scroll back to top
  function logit() {
    if (window.pageYOffset > 200) {
      StopTimer();
    }
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", logit);
    };
  });

  return (
    <div data-test="component-app">
      <Wrapper>
        <NavBar />
        <Categories />
        <Grid>
          {/* <Name /> */}
          {/* <HubButton data-test="hub" /> */}
        </Grid>
        <br />

        {/* MAIN IMAGES */}
        <Container>
          {<Main data-test="main">
            <LazyLoad height={350}>
              <motion.img
                onClick={() => OpenModel()}
                id="mainImage"
                src={state.main[state.idx]}
                key={state.main[state.idx]}
                initial={{ opacity: 0.5 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                style={{ width: '54.5%', minHeight: '350px' }}
                alt="main image" />
            </LazyLoad>
          </Main>}

          {/* MODAL */}
          <Modal data-test="modal" open={state.isModal} close={() => OpenModel()} >
            <Background>
              <OuterModal onClick={e => e.stopPropagation()}>
                <Download>&nbsp;&nbsp;&nbsp;Download full-size version&nbsp;&nbsp;<BsDownload style={{ verticalAlign: 'middle' }} /></Download>

                {/* Modal Image */}
                <ModalImage src={state.main[state.idx]} alt="main image" />
                <br />
                <br />

                {/* NAVIGATION / How Many Message */}
                <ModalBottomGrid>
                  <Btn data-test="decrement button" onClick={e => selectedSlide(state.idx - 1, e)}>Prev</Btn>
                  <ScreenShots data-test="message">{state.idx + 1} of {state.main.length} screenshots</ScreenShots>
                  <Btn data-test="increment button" style={{ justifySelf: 'end' }} onClick={e => selectedSlide(state.idx + 1, e)}>Next</Btn>
                </ModalBottomGrid>
              </OuterModal>
            </Background>
          </Modal>

          {/* THUMBNAIL IMAGES */}
          <Row id="row" data-test="thumbs">
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
    </div >
  );
};

export default Gallery;