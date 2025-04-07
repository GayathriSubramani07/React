//App.js

import logo from './logo.svg';
import './App.css';
import './appStyle.css'
import  Form from './Components/Form'
import LifecycleA from './Components/LifecycleA';



function App() {
  return (
     <div className="App">
    <LifecycleA></LifecycleA>
    </div>
  );
}

export default App;


//LifecycleA.js


import React, {Component} from'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component
{
    constructor(props){
        super(props)
        this.state={
            name: 'Gayathri'
        }
        console.log('LifecycleA Constructor')
    }

    static getDerivedStateFromProps(props,state){

        console.log('LifecycleA getDerivedStateFromProps')
        return null

    }
    componentDidMount(){
        console.log('LifecycleA componentDidMount')
    }
    render()
    {
        console.log('LifecycleA render')
        return(<div>
            <div>
                LifecycleA
            </div>
            <LifecycleB></LifecycleB>

            </div>
        )
    }
}
export default LifecycleA

//LifecycleB.js


import React, {Component} from'react'

class LifecycleB extends Component
{
    constructor(props){
        super(props)
        this.state={
            name: 'Gayathri'
        }
        console.log('LifecycleB Constructor')
    }

    static getDerivedStateFromProps(props,state){

        console.log('LifecycleB getDerivedStateFromProps')
        return null

    }
    componentDidMount(){
        console.log('LifecycleB componentDidMount')
    }
    render()
    {
        console.log('LifecycleB render')
        return(
            <div>
                LifecycleB
            </div>
        )
    }
}
export default LifecycleB
