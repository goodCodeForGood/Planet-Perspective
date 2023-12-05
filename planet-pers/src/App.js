
import './App.css';

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
    <div className="App">
      
            <Header />
            <Navbar />
            <Quiz />
            <About />
            <Main />
            <Causes />
            <Resources />
            <Calculator />
            <GetInvolved />
            
    </div>
  );
}

export default App;
