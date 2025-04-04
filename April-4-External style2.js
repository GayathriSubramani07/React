//Stylesheet.js

import React from 'react'
import './myStyle.css'

function Stylesheet(props){
   
    return(
        
        <div>
            <h1 className="primary  font-xl">Stylesheet</h1> 
        </div>
    )
}
export default Stylesheet


//myStyle.css

.primary{
    color: rebeccapurple;
}

.font-xl{
    font-size:72px;
}
