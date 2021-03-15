import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HubButton from './HubButton.jsx';
import '../styling/Gallery.css';


const Gallery = () => {
  // update state to api calls afterwards
  // const [state, setState] = useState({
  //   images: [],
  //   title: 'Age of Empires II: Definitive Edition'
  // })
  const [state, setState] = useState({
    main: [],
    thumb: [],
    title: 'Age of Empires II: Definitive Edition'
  })

  useEffect(async () => {
    const res = await axios.get('/images/1');
    setState({ main: [res.data] })
    // console.log(res.data);
  }, [])

  const slidesOptions = {
    width: "52.5%"
  }

  return (
    < div id="gallery" >
      <h1 id="title">{state.title}</h1>
      <HubButton />
      {/* <div id="main"><img src="" alt="main image" /></div>
      <div className="scroll">
        <div className="item">item1</div>
        <div className="item">item2</div>
        <div className="item">item3</div>
        <div className="item">item4</div>
        <div className="item">item5</div>
        <div className="item">item6</div>
        <div className="item">item7</div>
        <div className="item">item8</div>
        <div className="item">item9</div>
        <div className="item">item10</div>
      </div> */}

      <div className="container">
        <div className="mySlides" style={{ display: 'block' }}>
          <div className="numbertext">testing</div>
          <img src={"https://steam-fec.s3.amazonaws.com/steam2/main-2-1.jpg"} style={slidesOptions} alt="main image 1" />
        </div>

        <div className="mySlides" style={{ display: 'none' }}>
          <div className="numbertext">2 / 5</div>
          <img src={"https://steam-fec.s3.amazonaws.com/steam2/main-2-2.jpg"} style={slidesOptions} alt="main image 2" />
        </div>

        <div className="mySlides" style={{ display: 'none' }}>
          <div className="numbertext">3 / 5</div>
          <img src={"https://steam-fec.s3.amazonaws.com/steam2/main-2-3.jpg"} style={slidesOptions} alt="main image 3" />
        </div>

        <div className="mySlides" style={{ display: 'none' }}>
          <div className="numbertext">4 / 5</div>
          <img src={"https://steam-fec.s3.amazonaws.com/steam2/main-2-4.jpg"} style={slidesOptions} alt="main image 4" />
        </div>

        <div className="mySlides" style={{ display: 'none' }}>
          <div className="numbertext">5 / 5</div>
          <img src={"https://steam-fec.s3.amazonaws.com/steam2/main-2-5.jpg"} style={slidesOptions} alt="main image 5" />
        </div>

        {/* nav arrows */}
        <a className="prev" >{String.fromCharCode(10094)}</a>
        <a className="next" >{String.fromCharCode(10095)}</a>

        <div className="row">
          <div className="column">
            <img className="demo cursor" src={"https://steam-fec.s3.amazonaws.com/steam2/thumb-2-1.jpg"} alt="thumb image 1" />
          </div>

          <div className="column">
            <img className="demo cursor" src={"https://steam-fec.s3.amazonaws.com/steam2/thumb-2-2.jpg"} alt="thumb image 2" />
          </div>

          <div className="column">
            <img className="demo cursor" src={"https://steam-fec.s3.amazonaws.com/steam2/thumb-2-3.jpg"} alt="thumb image 3" />
          </div>

          <div className="column">
            <img className="demo cursor" src={"https://steam-fec.s3.amazonaws.com/steam2/thumb-2-4.jpg"} alt="thumb image 4" />
          </div>

          <div className="column">
            <img className="demo cursor" src={"https://steam-fec.s3.amazonaws.com/steam2/thumb-2-5.jpg"} alt="thumb image 5" />
          </div>

          <div className="column">
            <img className="demo cursor" src={"https://steam-fec.s3.amazonaws.com/steam2/thumb-2-5.jpg"} alt="thumb image 5" />
          </div>

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