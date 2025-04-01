//APP.js

import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet';
import Welcome from './Components/Welcome';

function App() {
  return (
    <div className="App">
      <Greet name="Gayathri"/>
      
      <Welcome />
    </div>
  );
}

export default App;


//Greet.js

import React from 'react'

const Greet =(props) =><h1>Welcome {props.name} </h1>


export default Greet;


//Welcome.js

import React,{Component} from "react";

class Welcome extends Component{
    render(){
        return<h1>Class Component</h1>
    }
}
export default Welcome
