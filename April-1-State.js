//App.js

import logo from './logo.svg';
import './App.css';
import Message from './Components/Message';




function App() {
  return (
    <div className="App">
  <Message></Message>
     
      
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
            message:"Welcome"
        }
    }

    changeMessage(){
        this.setState({
            message:"Thank you for subscribing 🤗✨"
        })
    }
    render(){
        return(
            <div>
            <h1>{this.state.message}</h1>
            <button  onClick={() =>this.changeMessage()}>Subscribe</button>
            </div>
            
        )
    }

}
export default Message
