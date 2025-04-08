//App.js

import logo from './logo.svg';
import './App.css';
import './appStyle.css'
import FRParent from './Components/FRParent';




function App() {
  return (
     <div className="App"> 
     <FRParent></FRParent>
    </div>
  );
}

export default App;


//FRParent.js

import React, { Component } from 'react'
import FRInput from './FRInput'
import Input from './input'

class FRParent extends Component {
    constructor(props) {
      super(props)
    
      this.inputRef = React.createRef()
         
      
    }


    clickHandler =()=>{
        this.inputRef.current.focus()
    }
    
  render() {
    return (
      <div>
        <FRInput ref={this.inputRef}></FRInput>
        <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    )
  }
}
export default  FRParent

//FRInput.js

import React from 'react'

const FRInput =React.forwardRef( (props ,ref)=>{
    
        return (
            <div>
              <input type='text' ref={ref}/>
            </div>
          )
    } 
) 
export default FRInput
