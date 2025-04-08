//RefsDemo.js



import React, { Component } from 'react'

 class RefsDemo extends Component {
    constructor(props) {
      super(props)
    
   
    this.cbref=null //Step 1: Create a variable to hold the DOM element 

    this.setcbref = (element) =>{ //Define the callback function to receive the DOM element
        console.log("Callback ref got:", element);
        this.cbref=element
    }
    }

    componentDidMount() {
     //step 4 After the component is mounted, the DOM is ready.
        if(this.cbref)
        {
            this.cbref.focus() //This puts cursor focus inside the input box
        }
    }
    

   

  render() {
    return (
      <div>
        
{/*  Step 2: This sets the callback ref on the input element */}
        <input type="text" ref={(this.setcbref)}/>
       
      </div>
    )
  }
}

export default RefsDemo

