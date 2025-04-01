//App.js

import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet';
import Welcome from './Components/Welcome';

function App() {
  return (
    <div className="App">
      <Greet 
       name="Gayathri" 
       age={22} 
       isAdmin={true} 
       hobbies={["Reading", "Coding",]} 
       user={{ name: "janani", age: 23 }} 
      />
    </div>
  );
}

export default App;


//Greet.js

import React from 'react';

function Greet(props) {
    return (
        <>
            <h1>Name: {props.name}</h1>
            <h1>Age: {props.age}</h1>
            <h1>Admin: {props.isAdmin ? "Yes" : "No"}</h1>
            <h1>Hobbies: {props.hobbies.join(", ")}</h1> 
            <h1>User: {props.user.name}, Age: {props.user.age}</h1> 
        </>
    );
}

export default Greet;
