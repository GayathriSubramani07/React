//App.js

import logo from './logo.svg';
import './App.css';
import './appStyle.css'
import RefsDemo from './Components/RefsDemo';




function App() {
  return (
     <div className="App">
      <RefsDemo></RefsDemo>
    </div>
  );
}

export default App;


//RefsDemo.js

import React, { Component } from 'react'

 class RefsDemo extends Component {
    constructor(props) {
      super(props)
    
    this.inputRef =React.createRef()
    }

    componentDidMount() {
        this.inputRef.current.focus()
        console.log(this.inputRef)
    }
    

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef}/>
      </div>
    )
  }
}

export default RefsDemo
