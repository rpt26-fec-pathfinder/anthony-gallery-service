import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HubButton from './HubButton.jsx';
import '../styling/Gallery.css';


const Gallery = () => {
  const [state, setState] = useState({
    // title: 'Age of Empires II: Definitive Edition',
    // main: [],
    // thumb: [],
    title: 'Age of Empires II: Definitive Edition',
    main: ["https://steam-fec.s3.amazonaws.com/steam1/main-1-1.jpg", "https://steam-fec.s3.amazonaws.com/steam1/main-1-2.jpg", "https://steam-fec.s3.amazonaws.com/steam1/main-1-3.jpg", "https://steam-fec.s3.amazonaws.com/steam1/main-1-4.jpg", "https://steam-fec.s3.amazonaws.com/steam1/main-1-5.jpg", "https://steam-fec.s3.amazonaws.com/steam1/main-1-6.jpg", "https://steam-fec.s3.amazonaws.com/steam1/main-1-7.jpg", "https://steam-fec.s3.amazonaws.com/steam1/main-1-8.jpg", "https://steam-fec.s3.amazonaws.com/steam1/main-1-9.jpg", "https://steam-fec.s3.amazonaws.com/steam1/main-1-10.jpg", "https://steam-fec.s3.amazonaws.com/steam1/main-1-11.jpg"],
    thumb: ["https://steam-fec.s3.amazonaws.com/steam1/thumb-1-1.jpg", "https://steam-fec.s3.amazonaws.com/steam1/thumb-1-2.jpg", "https://steam-fec.s3.amazonaws.com/steam1/thumb-1-3.jpg", "https://steam-fec.s3.amazonaws.com/steam1/thumb-1-4.jpg", "https://steam-fec.s3.amazonaws.com/steam1/thumb-1-5.jpg", "https://steam-fec.s3.amazonaws.com/steam1/thumb-1-6.jpg", "https://steam-fec.s3.amazonaws.com/steam1/thumb-1-7.jpg", "https://steam-fec.s3.amazonaws.com/steam1/thumb-1-8.jpg", "https://steam-fec.s3.amazonaws.com/steam1/thumb-1-9.jpg", "https://steam-fec.s3.amazonaws.com/steam1/thumb-1-10.jpg", "https://steam-fec.s3.amazonaws.com/steam1/thumb-1-11.jpg"],
  })

  // useEffect(async () => {
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
  // }, [])


  console.log(state)

  return (
    < div id="gallery" >
      <h1 id="title">{state.title}</h1>
      <HubButton />

      <div className="container">
        {/* <div className="mySlides" style={{ display: 'block' }}>
          <div className="numbertext">testing</div>
          <img src={state.main[0]} style={slidesOptions} alt="main image 1" />
        </div> */}

        {/* main images */}
        {state.main.map((image, index) => {
          if (index === 0) {
            return <div key={index} className="mySlides" style={{ display: 'block' }}>
              <div className="numbertext">testing</div>
              <img src={image} style={{ width: '52.5%' }} alt="main image" />
            </div>

          } else {
            return <div key={index} className="mySlides" style={{ display: 'none' }}>
              <div className="numbertext">testing</div>
              <img src={image} style={{ width: '52.5%' }} alt="main image" />
            </div>
          }
        })}

        {/* nav arrows */}
        <a className="prev" >{String.fromCharCode(10094)}</a>
        <a className="next" >{String.fromCharCode(10095)}</a>

        <div className="row">
          {/* thumb images */}
          {state.thumb.map((image, index) => {
            return <div key={index} className="column">
              <img className="demo cursor" src={image} alt="thumb image" />
            </div>
          })}

          {/* end of row & container div */}
        </div>
      </div>
      <p style={{ fontSize: '11px', backgroundColor: 'rgba(0, 0, 0, 0.1)', padding: '20px', marginRight: '175px' }}>
        <span id="signin" style={{ color: 'white' }} >Sign in</span>&nbsp;
      <span style={{ color: '#bbbab3' }}>to add this item to your wishlist, follow it, or mark it as not interested</span>
      </p>
      <br />
      <br />
    </div >
  );
};

export default Gallery;

