import React from 'react'
import Cards from './Components/Cards';
import './App.css'
import Header from './Components/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Contacto from './Components/Contacto';
import Conocimiento from './Components/Conocimiento';
import About from './Components/About';
import Aplicaciones from './Components/Aplicaciones';



function App() {
  return (
    
    <div className="App">
      <Router>
      <Header/>
      <div className="container">
        <h1 className="display-1 text-center text-dark" >Jose Daniel Corredor</h1>
      </div>
      <Switch>
        <Route path="/" exact component={Cards}/>
        <Route path="/Contacto" component={Contacto}/>
        <Route path="/Conocimiento" component={Conocimiento}/>
        <Route path="/Aplicaciones" component={Aplicaciones}/>
        <Route path="/Sobre" component={About}/>
      <Cards />
      </Switch>
      </Router>
    </div>
  )
}

export default App
