import './App.css';
import About from './components/About/About';
import Education from './components/Education/Education';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import NavigationBar from './components/Navigation/NavigationBar'
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from './components/Contact/Contact';
import Skills from './components/Skills/Skills';

function App() {
  return ( 
  <>
  <NavigationBar/>
  <Header/>
  <About/>
  <Education/>
  <Skills/>
  <Contact/>
  <Footer/>

  </>
  )
}

export default App