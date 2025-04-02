//App.js

import logo from './logo.svg';
import './App.css';
import Message from './Components/Message';
import Counter from './Components/Counter';
import Greet from './Components/Greet';

function App() {
  return (
    <div className="App">
 <Greet name="Gayathri" age={22}></Greet>
     
      
    </div>
  );
}

export default App;






//Greet.js
import React from 'react';



//Destructuring in Parameter


 function Greet({name,age}) {
     return (
         <>
             <h1>Name: {name}</h1>
             <h1>Age: {age}</h1>
            
         </>
     );
 }



export default Greet;
