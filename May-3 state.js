//App.js

import logo from './logo.svg';
import './App.css';
import Message from './components/Message';



function App() {
  return (
    <div className="App">
    <Message name="Gayathri "></Message>


  </div>
  );
}

export default App;

//Message.js

import React, {Component} from 'react'

class Message extends Component{
    constructor(){
        super();
        this.state={
            message:"Welcome",showName: true
        }
    }

    changeMessage(){
        this.setState({
            message:"Thank you for subscribing 🤗✨",showName: false         
        })
    }
    render(){
        return(
            <div>
            <h1 style={{ color: "blue" }} >{this.state.message} {this.state.showName && this.props.name} </h1>
            <button  onClick={() =>this.changeMessage()}>Subscribe</button>
            </div>
            
        )
    }

}
export default Message
