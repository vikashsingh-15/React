import React from "react";
// export default function Greeting(props){
//     return (
//         <div>
//             <h1>Hi </h1>
//             <h1>you have {props.messageCount >0 ?props.messageCount : "no"} messages</h1>
//             {props.isLogged && <h1>welcome {props.name}</h1>}

//         </div>
//     )
// }




class Greeting extends React.Component {
 constructor(props) {
    super(props);
 }
    render() {
    return (
      <div>
        <h1>Hi</h1>
          you have {this.props.messageCount > 0 ? this.props.messageCount : "no"}{" "}
          messages
        {this.props.isLogged && <h1>welcome {this.props.name}</h1>}
      </div>
    );
  }
}

export default Greeting;

  