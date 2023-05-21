import './App.css';
import './components/Slider';
import React, { Component } from 'react';
import './App.css';
import Slider from './components/Slider';



const url = process.env.PUBLIC_URL + '/img/bg.png';

function App() {
  return (
    <div>
      <h1>Briskly</h1>
      <div><Slider/></div>
    </div>
  );
}

export default App;