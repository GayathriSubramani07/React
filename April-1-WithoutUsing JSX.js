//App.js

import logo from './logo.svg';
import './App.css';
import Hello from './Components/Hello';


function App() {
  return (
    <div className="App">
      <Hello />
    </div>
  );
}

export default App;


//Hello.js

import React from "react";

function Hello(){

   

    //Without using jsx

    return( React.createElement('div',null,React.createElement("h1",null,"Hello Everyone")));
}
export default Hello
