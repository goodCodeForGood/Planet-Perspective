
import './App.css';

import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import Causes from "./components/Causes"
import GetInvolved from "./components/GetInvolved"
import Quiz from "./components/Quiz"
import About from "./components/About"
import Header from "./components/Header"
import Resources from "./components/Resources"
import Calculator from "./components/Calculator"

function App() {
  return (
    <>
      <Router>
        <Header />
        <Navbar />
        <Routes>
          <Route path='/' exact />
        </Routes>
      </Router>

      
      <Quiz />
      <About />
      <Main />
      <Causes />
      <Resources />
      <Calculator />
      <GetInvolved />
    </>
  );
}

export default App;
