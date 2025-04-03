//App.js
import logo from './logo.svg';
import './App.css';

import UserGreeting from './Components/UserGreeting';
import NameList from './Components/NameList';

function App() {
  return (
    <div className="App">
   <NameList></NameList>
    </div>
  );
}

export default App;


//NameList.js

import React from "react";
import Person from "./Person";

function NameList() {
  const persons = [
    { id: 1, name: "Gayathri", role: "Developer" },
    { id: 2, name: "John", role: "Designer" },
    { id: 3, name: "Alice", role: "Manager" }
  ];

  const personList = persons.map(person => <Person person={person} />);

  return <div>{personList}</div>; 
}

export default NameList;

//Person.js

import React from "react"

function Person({person}){
    return(
        <div>
            <h2> I am {person.name}. My role is {person.role} </h2>
        </div>
    )
}
export default Person
