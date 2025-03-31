
//index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


//App.js

import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet';

function App() {
  return (
    <div className="App">
      <Greet/>
    </div>
  );
}

export default App;


//Greet.js

import React from 'react'

const Greet =() => <h1>Welcome Gayathri </h1>

export default Greet;
