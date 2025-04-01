//App.js

import logo from './logo.svg';
import './App.css';
import Hello from './Components/Hello';


function App() {
  return (
    <div className="App">
     
      <Hello name="Gayu" />
    </div>
  );
}

export default App;

//Hello.js

import React from "react";


function Hello(props) {
    return (
      <h1 className="greeting" style={{ color: "blue" }}>
        Hello, {props.name}!
      </h1>
    );
  }
export default Hello
