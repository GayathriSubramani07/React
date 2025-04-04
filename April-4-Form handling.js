import React, { Component } from 'react'

 class Form extends Component {

    constructor(){
        super()
        this.state={
            username: ''
        }
    }

    handleUsernameChange = (event) =>{
    
        this.setState({
            username:event.target.value
        })

    }

  render() {
    return (
      <form>
        <label>Username: </label>
        <input type='text' value={this.state.username} onChange={this.handleUsernameChange}/>
        <h1>{this.state.username}</h1>
      </form>
    )
  }
}

export default Form
