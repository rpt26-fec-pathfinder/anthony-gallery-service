import React from 'react';
import Gallery from './components/Gallery.jsx';
import styled from 'styled-components';

const AppContent = styled.div`
  background-image: url('https://steam-fec.s3.amazonaws.com/images/background.jpg');
  height: 100vh;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  font-family: 'Yantramanav', sans-serif;
  margin: 0px;
  padding: 0px;
  `

const App = () => {
  return (
    <AppContent>
      <Gallery />
    </AppContent>
  );
};

export default App;