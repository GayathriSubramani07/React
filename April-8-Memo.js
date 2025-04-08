//App.js

import logo from './logo.svg';
import './App.css';
import './appStyle.css'
import PureComponents from './Components/PureComponents';
import Parentcomp from './Components/Parentcomp';



function App() {
  return (
     <div className="App">
<Parentcomp></Parentcomp>
    </div>
  );
}

export default App;


//Parentcomp.js


import React, {Component ,PureComponent} from 'react'
import Regularcomp from './Regularcomp'
import PureComponents from './PureComponents'
import Memocomp from './Memocomp'
 class Parentcomp extends PureComponent {


    constructor(props)
    {
        console.log("Cons")
        super(props)
        this.state={
            name:"Gayathri"
        }
    }

    componentDidMount() {
        setInterval (() => {
            this.setState({
                name:"Gayu"
            })
        },2000)
    }
  render() {

console.log("Parent components render method" , this.state.name)
    return (
      <div>
        Parentcomp
      <Memocomp name={this.state.name}></Memocomp>
      </div>
    )
  }
}

export default Parentcomp

//Memocomp.js

import React from 'react'

function Memocomp({name}) {
    console.log("Rendering Memo component")
  return (
    <div>
      {name}
    </div>
  )
}

export default React.memo(Memocomp)

