//App.js

import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet';
import Welcome from './Components/Welcome';

function App() {
  return (
    <div className="App">
      <Welcome name="Gayathri"/>
    </div>
  );
}

export default App;


//Welcome.js

import React,{Component} from "react";

class Welcome extends Component{
    render(){
        return(
        <>
        <h1>Welcome {this.props.name}</h1>
        <h1>Class Component</h1>
        </>
        );
    }
}
export default Welcome
