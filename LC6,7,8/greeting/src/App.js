// import './App.css';
// import Navbar from './Components/Navbar';
// import Jumbotron from './Components/Jumbotron';
// import CardSection from './Components/CardSection';
// import Footer from './Components/Footer';
// import AppSection from './Components/AppSection';
// import Greet from './Components/Greet';
// import Greeting from './Components/Greeting';

// function App() {
//   return (
//     //   <>
//     //    <Navbar/>
//     // <Jumbotron/>
//     // <AppSection/>
//     // <CardSection/>
//     // <Footer/>
//     //   </>

// //     <div>
// //        {/* <Greet name="Vikash" age="27"/>
// //       <Greet name="Shalini" age="30"/> 
// //       <Greeting name="Vikash" gender="M" isMarried={false}/>
// //       <Greeting name="Sapna"  gender="F" isMarried={true}/>
// //       <Greeting name="Samar"  gender="M" isMarried={false}/>    */}

// // {/* <Greeting name="Vikash" messageCount={10} isLogged={false}/>
// // <Greeting name="Ashu" messageCount={8} isLogged={true}/>
// // <Greeting name="Sapna" messageCount={0} isLogged={false}/> */}

// //        </div>
      
//   );
// }

// export default App;


// import './App.css';
// import Addition from './Components/Util';
// // import Addition,{ sum, multiply,divide } from './Components/util';
// function App() {
//   return (
// <div>
// <h1>Sum of 1 and 2 is: {sum(1,3)}</h1>
// <h1>Product of 10 and 20 is: {multiply(10,20)}</h1>
// <h1>Sum of 10 and 20 is: {Addition(10,20)}</h1>
// <h1>Divide of 12 by 3 is: {divide(12,3)} </h1> 
// </div>  
//   );
// }
// export default App;

// import './App.css';
// import Display from './Components/Display';

// function App() {
//   return (
// <div>
// <Display/>
// </div>  
//   );
// }
// export default App;

import './App.css';
import Display from './Components/Display';
import React from "react";
import Namaste from './Components/Namaste';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
    };
  }
  handleClick = () => {
    this.setState({ show: false });
  };
  render() {
    return (
      // <>
      //   {this.state.show && <Display />}
      //   <button onClick={this.handleClick}>Hidess</button>
      // </>

      <>
        <Namaste/>
        </>
    );
  }
}


