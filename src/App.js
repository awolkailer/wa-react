import React from 'react';
import Weather from "./Weather";

import './App.css';

export default function App(){
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App </h1>
        <Weather />

      <footer>
        <p>
          coded by kaila turpin 
        </p>
        <a href="https://github.com/awolkailer/wa-react"> 
          open sourced on GitHub
        </a>
        </footer>
       
       </div>
    </div>
  );
}


