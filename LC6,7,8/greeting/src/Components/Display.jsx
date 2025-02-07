import React from "react";

export default class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        on:false,
    };
    console.log("constructor Called");
    }

    handleClick=()=>{
        this.setState({
            on: !this.state.on,
        });
    };

    componentDidMount(){
        console.log("componentDidMount Called");
    }

    componentDidUpdate(){
        console.log("componentDidUpdate Called");
    }

    componentWillUnmount(){
        console.log("componentWillUnmount Called");
    }
  
    render() {
      console.log("render Called");
    return (
      <div>
        <h1>Display Component</h1>
        <button onClick={this.handleClick}>Turn {this.state.on ? "off":"on"}</button>
        {this.state.on ? "ON" : "OFF"}
        {/* <h1>Vikash</h1> */}
      </div>
    );
  }
}




