//App.js
import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet';

function App() {
  return (
    <div className="App">
      <Greet name="Gayathri"/>
      <Greet name="Janani"/>
    </div>
  );
}

export default App;


//Greet.js


import React from 'react'

const Greet =(props) => <h1>Welcome {props.name} </h1>

export default Greet;
