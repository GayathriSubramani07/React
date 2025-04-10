//App.js

import logo from './logo.svg';
import './App.css';
import './appStyle.css'

import Hero from './Components/Hero';
import ErrorBoundary from './Components/ErrorBoundary';




function App() {
  return (
     <div className="App"> 
    <ErrorBoundary>
    <Hero heroname="Batman"></Hero>
    </ErrorBoundary>
    <ErrorBoundary>
    <Hero heroname="Superman"></Hero>
    </ErrorBoundary>
    <ErrorBoundary>
    <Hero heroname="Joker"></Hero>
    </ErrorBoundary>

    </div>
  );
}

export default App;

//ErrorBoundary.js

import React, { Component } from 'react'

 class ErrorBoundary extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         hasError: false
      }
    }
    

    static getDerivedStateFromError(error) {
        return{
            hasError: true
        }
    }

  render() {
    if (this.state.hasError){
        return <h1>Something went wrong </h1>
    }
    return this.props.children
    return (
      <div>
        
      </div>
    )
  }
}

export default ErrorBoundary


//Hero.js

import React from'react'

function Hero({heroname}){
    if(heroname ==="Joker")
    {
        throw new Error("Not a hero")
    }
    return(
        <div>
            {heroname}
        </div>
    )
}
export default Hero
