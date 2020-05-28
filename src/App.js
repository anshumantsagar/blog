import React from 'react';
import './App.css';
// import {
//   BrowserRouter as Router,
//   Route,
//   Link
// } from "react-router-dom";

//components
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Foorter'
import Body from './components/body/Body'

function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Body></Body>
      <Footer></Footer>
    </div>
  );
}

export default App;
