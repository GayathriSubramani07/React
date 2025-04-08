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

import React, { Component } from 'react'
import Regularcomp from './Regularcomp'
import PureComponents from './PureComponents'
 class Parentcomp extends Component {


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
        <Regularcomp name={this.state.name}></Regularcomp>
        <PureComponents name={this.state.name}></PureComponents>
      </div>
    )
  }
}

export default Parentcomp

//Regularcomp.js
import React, { Component } from 'react'

 class Regularcomp extends Component {
  render() {

    console.log("Regular components render method")
    return (
      <div>
        Regular components {this.props.name}
      </div>
    )
  }
}

export default Regularcomp

//PureComponents.js

import React, { PureComponent } from 'react'

 class PureComponents extends PureComponent {
  render() {
    console.log("Pure components render method")
    return (
      <div>
        Purecomponets {this.props.name}
      </div>
    )
  }
}

export default PureComponents
