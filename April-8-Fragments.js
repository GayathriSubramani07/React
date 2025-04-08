//App.js

import logo from './logo.svg';
import './App.css';
import './appStyle.css'
import FragmentDemo from './Components/FragmentDemo';
import Table from './Components/Table';



function App() {
  return (
     <div className="App">
    <Table></Table>
    </div>
  );
}

export default App;

//Table.js

import React from 'react'
import Columns from './Columns'

function Table(){
    return(
      <table>
        <tbody>
            <tr>
                <Columns></Columns>
            </tr>
        </tbody>
      </table>
    )
}
export default Table


//Columns.js

import React from 'react'

function Columns() {
  return (
    <React.Fragment>
      <td>Name</td>
      <td>Gayathri</td>
    </React.Fragment>
  )
}

export default Columns
