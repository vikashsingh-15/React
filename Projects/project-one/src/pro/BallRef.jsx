// import React from "react";
// import "./BallRef.css";

// class MovingBall extends React.Component {
//   constructor(props) {
//     super(props);
//     this.ballref = React.createRef();
//     this.state = {
//       top: 0,
//       bottom: 0,
//       left: 0,
//       right: 0,
//     };
//   }

//   handleMove = (direction) => {
//     console.log(this.ballref.current.getBoundingClientRect());
//     let newPosition;
//     switch (direction) {
//       case "up":
//         newPosition = { ...this.state, top: this.state.top - 20 };
//         // this.setState(newPosition);
//         break;
//       case "down":
//         newPosition = { ...this.state, top: this.state.top + 20 };
//         // this.setState(newPosition);
//         break;
//       case "left":
//         newPosition = { ...this.state, left: this.state.left - 20 };
//         // this.setState(newPosition);
//         break;
//       case "right":
//         newPosition = { ...this.state, left: this.state.left + 20 };
//         // this.setState(newPosition);
//         break;
//       default:
//         break;

//       // case "up":
//       //   newPosition = this.state.top - 20;
//       //   this.setState({ top: newPosition });
//       //   break;
//       // case "down":
//       //   newPosition = this.state.top + 20;
//       //   this.setState({ top: newPosition });
//       //   break;
//       // case "left":
//       //   newPosition = this.state.left - 20;
//       //   this.setState({ left: newPosition });
//       //   break;
//       // case "right":
//       //   newPosition = this.state.left + 20;
//       //   this.setState({ left: newPosition });
//       //   break;
//       // default:
//       //   break;
//     }
//     this.setState(newPosition); //instead of calling setState multiple times, we can call it once with the final state object
//   };

//   render() {
//     return (
//       <>
//         <div
//           ref={this.ballref}
//           className="ball"
//           style={{ position: "absolute", ...this.state }}
//         ></div>
//         <button onClick={() => this.handleMove("up")}> Up</button>
//         <button onClick={() => this.handleMove("down")}> Down</button>
//         <button onClick={() => this.handleMove("left")}> Left</button>
//         <button onClick={() => this.handleMove("right")}> Right</button>
//       </>
//     );
//   }
// }

// export default MovingBall;

//// way 2
// import React from "react";
// import "./BallRef.css";

// class MovingBall extends React.Component {
//   constructor(props) {
//     super(props);
//     this.ballref = React.createRef();
//     this.state = {
//       top: 0,
//       down: 0,
//       left: 0,
//       right: 0,
//     };
//   }

//   handleMove = (direction) => {
//     const newPosition = { ...this.state }; // Copy state

//     // Determine movement direction and update correct property
//     if (direction === "up") newPosition.top -= 20;
//     else if (direction === "down") newPosition.top += 20;
//     else if (direction === "left") newPosition.left -= 20;
//     else if (direction === "right") newPosition.left += 20;

//     this.setState(newPosition); // Update state
//   };

//   render() {
//     return (
//       <>
//         <div
//           ref={this.ballref}
//           className="ball"
//           style={{
//             position: "absolute",
//             top: this.state.top,
//             left: this.state.left,
//           }}
//         ></div>
//         <div style={{ marginTop: "100px" }}>
//           <button onClick={() => this.handleMove("up")}>Up</button>
//           <button onClick={() => this.handleMove("down")}>Down</button>
//           <button onClick={() => this.handleMove("left")}>Left</button>
//           <button onClick={() => this.handleMove("right")}>Right</button>
//         </div>
//       </>
//     );
//   }
// }

// export default MovingBall;

////way 3

// import React from "react";
// import "./BallRef.css";

// class MovingBall extends React.Component {
//   constructor(props) {
//     super(props);
//     this.ballref = React.createRef();
//     this.state = {
//       top: 0,
//       down: 0,
//       left: 0,
//       right: 0,
//     };
//   }

//   handleMove = (direction, multiplier) => {
//     const newPosition = { ...this.state }; // Copy state
//     newPosition[direction] += 20 * multiplier;
//     this.setState(newPosition); // Update state
//   };

//   render() {
//     return (
//       <>
//         <div
//           ref={this.ballref}
//           className="ball"
//           style={{
//             position: "absolute",
//             top: this.state.top,
//             left: this.state.left,
//           }}
//         ></div>
//         <div style={{ marginTop: "100px" }}>
//           <button onClick={() => this.handleMove("top", -1)}>Up</button>
//           <button onClick={() => this.handleMove("top", 1)}>Down</button>
//           <button onClick={() => this.handleMove("left", -1)}>Left</button>
//           <button onClick={() => this.handleMove("left", 1)}>Right</button>
//         </div>
//       </>
//     );
//   }
// }

// export default MovingBall;

////way 4

import React from "react";
import "./BallRef.css";

class MovingBall extends React.Component {
  constructor(props) {
    super(props);
    this.ballref = React.createRef();
    this.state = {
      top: 0,
      down: 0,
      left: 0,
      right: 0,
    };
  }

  handleMove = (direction, multiplier) => {
    const newPosition = {
      ...this.state,
      [direction]: this.state[direction] + 20 * multiplier,
    }; // Dynamically computed key
    this.setState(newPosition); // Update state
  };

  render() {
    return (
      <>
        <div
          ref={this.ballref}
          className="ball"
          style={{
            position: "absolute",
            top: this.state.top,
            left: this.state.left,
          }}
        ></div>
        <div style={{ marginTop: "100px" }}>
          <button onClick={() => this.handleMove("top", -1)}>Up</button>
          <button onClick={() => this.handleMove("top", 1)}>Down</button>
          <button onClick={() => this.handleMove("left", -1)}>Left</button>
          <button onClick={() => this.handleMove("left", 1)}>Right</button>
        </div>
      </>
    );
  }
}

export default MovingBall;
