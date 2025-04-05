import React, { Component } from 'react'

 class Form extends Component {

    constructor(){
        super()
        this.state={
            username: '',
            Comments:'',
            topic:'react'
        }
    }

    handleUsernameChange = (event) =>{
    
        this.setState({
            username:event.target.value
        })

    }

    handleCommandChange =event=>{
    
      this.setState({
        Comments:event.target.value
      })
    }

    handleTopicChamge=(event) =>{
      this.setState({
        topic: event.target.value
      })
    }


    handleSubmit =(event) =>{
      alert(`${this.state.username}  ${this.state.Comments}  ${this.state.topic}`)
      event.preventDefault()

    }

  render() {
    const {username,Comments,topic}=this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Username: </label>
        <input type='text' value={username} onChange={this.handleUsernameChange}/>
        
        <div>
          <label>Comments</label>
          <textarea value={Comments} onChange={this.handleCommandChange}></textarea>
        </div>
        <div>
          <label>Topics</label>
          <select value={topic}  onChange={this.handleTopicChamge}>
          <option value="react">React</option>
          <option value="angular">Angular</option>
          <option value="javascript">JavaScript</option>
          </select>
          
        </div>
        <button>Submit</button>
      </form>
    )
  }
}

export default Form
