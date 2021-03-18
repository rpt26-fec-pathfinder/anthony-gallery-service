import React, { useState, useEffect } from 'react';
import HubButton from './HubButton.jsx';
import '../styling/Gallery.css';
import axios from 'axios';
import { motion, AnimatePresence } from "framer-motion";


const Gallery = () => {
  const [state, setState] = useState({
    // title: 'Age of Empires II: Definitive Edition',
    // idx: -1,
    // preSelectedImage: null,
    // main: [],
    // thumb: [],
    title: 'Age of Empires II: Definitive Edition',
    idx: -1,
    preSelectedImage: null,
    main: ["https://steam-fec.s3.amazonaws.com/steam1/main-1-1.jpg", "https://steam-fec.s3.amazonaws.com/steam1/main-1-2.jpg", "https://steam-fec.s3.amazonaws.com/steam1/main-1-3.jpg", "https://steam-fec.s3.amazonaws.com/steam1/main-1-4.jpg", "https://steam-fec.s3.amazonaws.com/steam1/main-1-5.jpg", "https://steam-fec.s3.amazonaws.com/steam1/main-1-6.jpg", "https://steam-fec.s3.amazonaws.com/steam1/main-1-7.jpg", "https://steam-fec.s3.amazonaws.com/steam1/main-1-8.jpg", "https://steam-fec.s3.amazonaws.com/steam1/main-1-9.jpg", "https://steam-fec.s3.amazonaws.com/steam1/main-1-10.jpg", "https://steam-fec.s3.amazonaws.com/steam1/main-1-11.jpg"],
    thumb: ["https://steam-fec.s3.amazonaws.com/steam1/thumb-1-1.jpg", "https://steam-fec.s3.amazonaws.com/steam1/thumb-1-2.jpg", "https://steam-fec.s3.amazonaws.com/steam1/thumb-1-3.jpg", "https://steam-fec.s3.amazonaws.com/steam1/thumb-1-4.jpg", "https://steam-fec.s3.amazonaws.com/steam1/thumb-1-5.jpg", "https://steam-fec.s3.amazonaws.com/steam1/thumb-1-6.jpg", "https://steam-fec.s3.amazonaws.com/steam1/thumb-1-7.jpg", "https://steam-fec.s3.amazonaws.com/steam1/thumb-1-8.jpg", "https://steam-fec.s3.amazonaws.com/steam1/thumb-1-9.jpg", "https://steam-fec.s3.amazonaws.com/steam1/thumb-1-10.jpg", "https://steam-fec.s3.amazonaws.com/steam1/thumb-1-11.jpg"],
  })


  useEffect(async () => {
    //   const res = await axios.get(`http://localhost:4012/images${window.location.pathname}`);
    //   let main = res.data[0].mainImages.map(item => item.main)
    //   let thumb = res.data[0].mainImages.map(item => item.thumb)

    //   setState(() => {
    //     return {
    //       ...state,
    //       main,
    //       thumb,
    //     }
    //   })

    timer();
  }, [])

  // auto image change
  function timer() {
    setState((prevState) => {
      return {
        ...state,
        idx: prevState.idx < state.main.length - 1 ? prevState.idx + 1 : 0,
      }
    })

    setTimeout(timer, 5000)
  };

  // func renders when thumb is clicked
  function selectedSlide(e, index) {
    e.preventDefault();

    state.preSelectedImage !== null ? state.preSelectedImage.classList.remove('active') : null;
    e.target.classList.add('active')

    setState(() => {
      return {
        ...state,
        idx: index,
        preSelectedImage: e.target,
      }
    })
  }


  // modal
  function modal() {
    console.log('modal open!')
  }

  return (
    < div id="gallery" >
      <h1 id="title">{state.title}</h1>
      {/* Comm Hub */}
      <HubButton />
      <br />
      {/* main images */}
      <div className="container">
        <AnimatePresence>
          {<div className="mySlides" >
            <motion.img
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.75 }}
              src={state.main[state.idx]} style={{ width: '52.5%' }} alt="main image" />
          </div>}
        </AnimatePresence>

        {/* nav arrows */}
        {/* <a className="prev" >{String.fromCharCode(10094)}</a>
        <a className="next" >{String.fromCharCode(10095)}</a> */}

        {/* thumb images */}
        <div className="row">
          {state.thumb.map((image, index) => {
            return <motion.div key={index} className="column" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.75 }} >
              <img onClick={(e) => selectedSlide(e, index)} className="demo cursor" src={image} alt="thumb image" style={{ padding: '1px' }} />
            </motion.div>
          })}
        </div>
      </div>

      {/* Sign in message */}
      <p style={{ fontSize: '11px', backgroundColor: 'rgba(0, 0, 0, 0.1)', padding: '20px', marginRight: '175px' }}>
        <span id="signin" style={{ color: 'white' }} >Sign in</span>
        <span style={{ color: '#bbbab3' }}>&nbsp;to add this item to your wishlist, follow it, or mark it as not interested</span>
      </p>
      <br />
      <br />
    </div >
  );
};

export default Gallery;

// TODO LIST
// modal where you can click left and right...also stops timer, timer initiates again when out of modal mode
// timer every 4 to 5 seconds change photos
// animations fade in fade out in the transitions
// triange on top of border