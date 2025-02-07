import './App.css';
import Navbar from './Components/Navbar';
import Jumbotron from './Components/Jumbotron';
import CardSection from './Components/CardSection';
import Footer from './Components/Footer';
import AppSection from './Components/AppSection';
import Greet from './Components/Greet';
import Greeting from './Components/Greeting';


function App() {
  return (
    //   <>
    //    <Navbar/>
    // <Jumbotron/>
    // <AppSection/>
    // <CardSection/>
    // <Footer/>
    //   </>

    <div>
       {/* <Greet name="Vikash" age="27"/>
      <Greet name="Shalini" age="30"/> 
      <Greeting name="Vikash" gender="M" isMarried={false}/>
      <Greeting name="Sapna"  gender="F" isMarried={true}/>
      <Greeting name="Samar"  gender="M" isMarried={false}/>    */}

<Greeting name="Vikash" messageCount={10} isLogged={false}/>
<Greeting name="Ashu" messageCount={8} isLogged={true}/>
<Greeting name="Sapna" messageCount={0} isLogged={false}/>

       </div>
  );
}

export default App;






