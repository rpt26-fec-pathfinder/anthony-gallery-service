import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styling/Gallery.css';


const Gallery = () => {
  const [state, setState] = useState({
    images: [],
    title: 'Age of Empires II: Definitive Edition'
  })

  // "componentDidMounts" to page 1 upon page initially loading
  useEffect(async () => {
    const res = await axios.get('/images/1');
    setState({ images: [res.data] })
    console.log(res.data);
  }, [])

  return (
    < div id="gallery" >
      <h1 id="title">{state.title}</h1>
      <a id="community-hub">Community Hub</a>
      <br />
      <br />
      <br />
      <div id="main"><img src="" alt="main image" /></div>
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
      </div>
      <div>
      </div>
    </div >
  );
};


export default Gallery;