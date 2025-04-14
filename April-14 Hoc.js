//App.js

import './App.css';
import './appStyle.css';
import ClickCounter from './Components/ClickCounter';
import HovweCounter from './Components/HovweCounter';

function App() {
  console.log("App Component Rendered ✅");
  return (
    
    <div className="App">
      <ClickCounter />
      <HovweCounter />
    </div>
  );
}

export default App;

//ClickCounter.js

import React, { Component } from 'react';
import UpdatedComponent from './WithCounter';

class ClickCounter extends Component {
  

  render() {
    console.log("ClickCounter Render 🎨");
    const { count ,incrementCount} = this.props;
    return (
      <div>
        <button onClick={incrementCount}>
          Clicked {count} times
        </button>
      </div>
    );
  }
}

console.log("ClickCounter File Loaded 📄");

export default UpdatedComponent(ClickCounter); // HOC


//WithCounter.js

import React from 'react';

const UpdatedComponent = (OriginalComponent) => {
  class NewComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          count: 0
        };
        console.log(" Constructor 🛠️");
      }
    
      incrementCount = () => {
        this.setState(prevState => {
          return { count: prevState.count + 1 };
        });
      };


    render() {
      console.log("NewComponent (HOC Wrapper) Render 🌀");
      return <OriginalComponent 
      count={this.state.count} 
      incrementCount={this.incrementCount}/>;
    }
  }

  console.log("HOC is Wrapping the Component 🎁");

  return NewComponent;
};

console.log("WithCounter File Loaded 🔄");

export default UpdatedComponent;

//HovweCounter.js

import React, { Component } from 'react';
import UpdatedComponent from './WithCounter';

class HovweCounter extends Component {
  

  render() {
    console.log("🎨 HovweCounter Render Called");
    const { count ,incrementCount} = this.props;
    return (
      <div>
        <h2 onMouseOver={incrementCount}>
      Hovered {count} Times
        </h2>
      </div>
    );
  }
}

console.log("📄 HovweCounter File Loaded");

export default UpdatedComponent(HovweCounter);


