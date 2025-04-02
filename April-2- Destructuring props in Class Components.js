import React,{Component} from "react";

class Welcome extends Component{
    render(){
        const {name,age}=this.props
        return(
        <>
        <h1>Welcome {name}</h1>
        <h1>Class Component</h1>
        </>
        );
    }
}
export default Welcome
