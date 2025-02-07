import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import Navbar from './Components/Navbar';
import Jumbotron from './Components/Jumbotron';
import CardSection from './Components/CardSection';
import Footer from './Components/Footer';
import AppSection from './Components/AppSection';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar/>
    <Jumbotron/>
    <AppSection/>
    <CardSection/>
    <Footer/>
  </React.StrictMode>
);


