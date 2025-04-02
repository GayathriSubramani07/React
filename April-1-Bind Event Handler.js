import React, { Component } from 'react'

class EventBind extends Component {
     constructor()
     {   
         super()
        this.state={
             message:"Hii"
        }
       // this.add=this.add.bind(this)
     }

    add = () => {
        this.setState({
            message: "Good Bye!"
        });
    };  

  render() {
    return (
      <div>
        <div>{this.state.message}</div> 
        {/* Using blind keyword in render method */}

              {/*  <button onClick={this.add.bind(this)}>Click</button> */}
        
        {/* Arrow function */}

              {/* <button onClick={() =>this.add()} >Click</button> */}

        {/* Using constructor */}

               {/* <button onClick={this.add}>Click</button>
        */}
        
        {/* Using Arrow function as a class Property */}
        
              <button onClick={this.add}>Click</button>
      </div>
    )
  }
}

export default EventBind
