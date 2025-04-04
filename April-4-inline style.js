//App.js

import logo from './logo.svg';
import './App.css';
import InlineStyle from './Components/InlineStyle';


function App() {
  return (
    <div className="App">
      <InlineStyle></InlineStyle>
    </div>
  );
}

export default App;

//InlineStyle.js

import React from 'react'


const heading={
    fontSize :'72px',
    color:'blue'
}
 function InlineStyle() {
  return (
    <div>
      <h2 style={heading}>Inline</h2>
    </div>
  )
}
export default InlineStyle

