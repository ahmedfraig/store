import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import SliderHome from './components/Slider';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SliderHome />
    </div>
  );
}

export default App;
