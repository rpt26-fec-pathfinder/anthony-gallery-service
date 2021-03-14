import React from 'react';
import Gallery from './components/Gallery.jsx';
import NavBar from './components/NavBar.jsx';
import './styling/App.css';


const App = () => {
  return (
    <div id="content">
      <NavBar />
      <Gallery />
    </div>
  );
};

export default App;