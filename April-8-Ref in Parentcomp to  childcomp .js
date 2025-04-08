//App.js

import logo from './logo.svg';
import './App.css';
import './appStyle.css'

import FocusInput from './Components/FocusInput';




function App() {
  return (
     <div className="App"> 
     <FocusInput></FocusInput>
    </div>
  );
}

export default App;


//FocusInput.js

import React, { Component } from 'react'
import Input from './Input'

class FocusInput extends Component {
  constructor(props) {
    super(props)
    this.ComponentRef = React.createRef()
  }

  clickHandler = () => {
    this.ComponentRef.current.focusInput() 
  }

  render() {
    return (
      <div>
        <Input ref={this.ComponentRef} />
        <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    )
  }
}

export default FocusInput


//Input.js

import React, { Component } from 'react'

class Input extends Component {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef()
  }

  focusInput() {
    this.inputRef.current.focus()
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
      </div>
    )
  }
}

export default Input

