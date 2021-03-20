import React, { useState, useEffect, useRef } from 'react';
import HubButton from './HubButton.jsx';
import Categories from './Categories.jsx';
import SignIn from './SignIn.jsx';
import '../styling/Gallery.css';
import axios from 'axios';
import StopTimer from '../helpers/stopTimer.jsx'


const Gallery = () => {
  const [state, setState] = useState({
    title: '',
    idx: 0,
    preSelectedImage: null,
    showModal: false,
    main: [],
    thumb: [],
  })

  useEffect(async () => {
    const imageRes = await axios.get(`/images${window.location.pathname}`);
    const metaRes = await axios.get(`/api/product${window.location.pathname}`);

    let main = imageRes.data[0].mainImages.map(item => item.main)
    let thumb = imageRes.data[0].mainImages.map(item => item.thumb)


    // let main = ["https://steam-fec.s3.amazonaws.com/steam1/main-1-1.jpg", "https://steam-fec.s3.amazonaws.com/steam1/main-1-2.jpg", "https://steam-fec.s3.amazonaws.com/steam1/main-1-3.jpg", "https://steam-fec.s3.amazonaws.com/steam1/main-1-4.jpg", "https://steam-fec.s3.amazonaws.com/steam1/main-1-5.jpg", "https://steam-fec.s3.amazonaws.com/steam1/main-1-6.jpg", "https://steam-fec.s3.amazonaws.com/steam1/main-1-7.jpg", "https://steam-fec.s3.amazonaws.com/steam1/main-1-8.jpg", "https://steam-fec.s3.amazonaws.com/steam1/main-1-9.jpg", "https://steam-fec.s3.amazonaws.com/steam1/main-1-10.jpg", "https://steam-fec.s3.amazonaws.com/steam1/main-1-11.jpg"]

    // let thumb = ["https://steam-fec.s3.amazonaws.com/steam1/thumb-1-1.jpg", "https://steam-fec.s3.amazonaws.com/steam1/thumb-1-2.jpg", "https://steam-fec.s3.amazonaws.com/steam1/thumb-1-3.jpg", "https://steam-fec.s3.amazonaws.com/steam1/thumb-1-4.jpg", "https://steam-fec.s3.amazonaws.com/steam1/thumb-1-5.jpg", "https://steam-fec.s3.amazonaws.com/steam1/thumb-1-6.jpg", "https://steam-fec.s3.amazonaws.com/steam1/thumb-1-7.jpg", "https://steam-fec.s3.amazonaws.com/steam1/thumb-1-8.jpg", "https://steam-fec.s3.amazonaws.com/steam1/thumb-1-9.jpg", "https://steam-fec.s3.amazonaws.com/steam1/thumb-1-10.jpg", "https://steam-fec.s3.amazonaws.com/steam1/thumb-1-11.jpg"]

    await setState(() => {
      return {
        ...state,
        title: metaRes.data.name,
        main,
        thumb,
      }
    })

    // Timer();
  }, [])

  console.log(state)

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



    setState(() => {
      return {
        ...state,
        idx: index,
        preSelectedImage: e.target,
      }
    })
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
    < div id="gallery" >
      <Categories />
      <h1 id="title" style={{ color: 'white' }}>{state.title}</h1>
      <HubButton />
      <br />

      {/* main images & modal */}
      <div className="container">
        {state.showModal ?
          <div id="modal">
            <img id="myModal"
              src={state.main[state.idx]} style={{ width: '52.5%' }} alt="main image" />
          </div>
          : <div className="mySlides" >
            <img
              onClick={Modal}
              src={state.main[state.idx]} style={{ width: '52.5%' }} alt="main image" />
          </div>}

        {/* nav arrows */}
        <a className="prev" onClick={(e) => selectedSlide(e, index)}>{String.fromCharCode(10094)}</a>
        <a className="next" onClick={(e) => selectedSlide(e, index)}>{String.fromCharCode(10095)}</a>

        {/* thumb images */}
        <div className="row">
          {state.thumb.map((image, index) => {
            return <div key={index} className="column"  >
              <img onClick={(e) => selectedSlide(e, index)} className="demo cursor" src={image} alt="thumb image" style={{ padding: '1px' }} />
            </div>
          })}
        </div>
      </div>
      <SignIn />
    </div >
  );
};

export default Gallery;

// TODO LIST
// modal where you can click left and right...also stops timer, timer initiates again when out of modal mode
// timer every 4 to 5 seconds change photos
// animations fade in fade out in the transitions
// triange on top of border

