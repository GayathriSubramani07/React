//App.js

import logo from './logo.svg';
import './App.css';
import Stylesheet from './Components/Stylesheet';


function App() {
  return (
    <div className="App">
   <Stylesheet primary={true}></Stylesheet>
    </div>
  );
}

export default App;


//Stylesheet.js
import React from 'react'
import './myStyle.css'

function Stylesheet(props){
    let className=props.primary ? 'primary' :'';
    return(
        
        <div>
            <h1 className={className}>Stylesheet</h1>
        </div>
    )
}
export default Stylesheet


//myStyle.css

  .primary{
    color: orange;
}
