//App.js

import logo from './logo.svg';
import './App.css';
import EventBind from './Components/EventBind';
import ParentComponent from './Components/ParentComponent';
function App() {
  return (
    <div className="App">
      <ParentComponent></ParentComponent>
    </div>
  );
}

export default App;


//ParentComponent.js

import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

 class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentName:"Parent"
      }
      this.greetParent=this.greetParent.bind(this)
    }
    greetParent()
    {
        alert(`Hello ${this.state.parentName}`)
    }
    
  render() {
    return (
      <div>
        <ChildComponent greetHandler={this.greetParent}> </ChildComponent>
      </div>
    )
  }
}

export default ParentComponent



//ChildComponent.js


import React from 'react'

function ChildComponent(props) {
  return (
    <div>
      <button onClick={props.greetHandler}>greetParent</button>
    </div>
  )
}

export default ChildComponent

