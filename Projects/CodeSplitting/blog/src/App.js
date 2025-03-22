import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Details from "./components/details";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

////way 2 nested routes  --. in home.js we see way 2 with outle tag

// import "./App.css";
// import NavBar from "./components/NavBar";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import Home from "./components/Home";
// import About from "./components/About";
// import Contact from "./components/Contact";
// import Details from "./components/details";

// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <NavBar />
//         <Routes>
//           <Route path="/" element={<Home />}>
//             {/* Nested routes for options inside Home */}
//             <Route path="/option1" element={<h1>option1</h1>} />
//             <Route path="/option2" element={<h1>option2</h1>} />
//             <Route path="/option3" element={<h1>option3</h1>} />
//           </Route>

//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/details" element={<Details />} />
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;
