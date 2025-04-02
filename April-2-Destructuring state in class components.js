 import React,{Component} from "react";


class Welcome extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      message: "Hello",
    };
  }

  render() {
    // Destructuring state
    const { count, message } = this.state;

    return (
      <div>
        <h2>Count: {count}</h2>
        <h2>Message: {message}</h2>
      </div>
    );
  }
}

export default Welcome;
