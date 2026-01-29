import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import SliderHome from './components/Slider';
import Wrapper from './components/Wrapper';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SliderHome />
      <Wrapper />
    </div>
  );
}

export default App;
