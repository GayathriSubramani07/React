//App.js
import logo from './logo.svg';
import './App.css';
import Stylesheet from './Components/Stylesheet';


function App() {
  return (
    <div className="App">
   <Stylesheet></Stylesheet>
    </div>
  );
}

export default App;


//Stylesheet.js

import React from 'react'
import './myStyle.css'

function Stylesheet(){
    return(
        <div>
            <h1 className='primary'>Stylesheet</h1>
        </div>
    )
}
export default Stylesheet


//myStyle.css

.primary{
    color: orange;
}
