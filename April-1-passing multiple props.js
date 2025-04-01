//App.js

import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet';
import Welcome from './Components/Welcome';

function App() {
  return (
    <div className="App">
      <Greet name="Gayathri" age={22}>//If you write age="25", React treats "25" as a string, not a number.Using {25} ensures React treats it as a JavaScript number, allowing calculations like age + 5.

      <button>Action</button>
        
        </Greet>  



    </div>
  );
}

export default App;


//Greet.js

import React from 'react'

function Greet(props){
    return(
        <>
            <h1>Welcome {props.name}</h1>
            <h1>Age: {props.age}</h1>
            <h1>{props.children}</h1>
        </>
    )
}


export default Greet;

// Different way of doing it. you can use React Fragments (<>...</>) to avoid unnecessary HTML elements.


import React from 'react'

function Greet(props){
    return(
        <>
            <h1>Welcome {props.name}</h1>
            <h1>Age: {props.age}</h1>
        </>
    )
}


export default Greet;

