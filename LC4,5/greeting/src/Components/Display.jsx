import React from "react";
import Greet from "./Greet";
import Test from "./util";


export default class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 1, display: false };
    console.log(Test(2,2));
    }
   
    handleClick=()=>{
        const earlierCount = this.state.count;
        this.setState({count: earlierCount+1});
    };


    render() {
      console.log("render Called");
      console.log(this.state.count);
    return (
      <div>
        {this.state.count}
        <button onClick={this.handleClick}>Click Me</button>
        <Greet count={this.state.count}/>
      </div>
    );
  }
}
