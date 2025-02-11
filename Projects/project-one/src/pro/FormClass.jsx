import React from "react";

class FormClass extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
    this.state = {
      name: "",
      //   email: "",
      //   password: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault(); // prevent the default behavior of the form and does not refresh the page
    alert("Form submitted with input value =" + this.state.name);
  };

  handleChange = (e) => {
    this.setState({ name: e.target.value });
  };

  componentDidMount() {
    //documents.getElementById("input").focus();
    this.ref.current.focus(); //focuses on the input field
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          ref={this.ref}
          type="text"
          x={this.state.name}
          onChange={this.handleChange}
        />
        {/* 
        <input type="email" name="email" />
        <input type="password" /> 
        */}
        <input type="submit" value="submit"></input>
      </form>
    );
  }
}

export default FormClass;
