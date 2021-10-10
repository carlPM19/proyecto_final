import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">UMG</h1>
        </header>
        <p className="App-intro">
          Universidad Mariano Galvez de Guatemala

          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        
        <button className="accordion">Acerca del curso</button>
<div className="panel">
  <p>La finalidad de este curso es aprender a diseñar e implementar aplicaciones que hagan uso de los servicios proporcionados por el sistema operativo, así adquirir los conocimientos necesarios para utilizar el sistema operativo a nivel de usuario avanzado </p>
</div>

<button className="accordion">Centro Universitario</button>
<div className="panel">
  <p>Centro Universitario San Juan Sacatepéquez, Guatemala Oficinas Administrativas 9a. calle 4-26 zona 4</p>
</div>


<a href="principal.html">Ir a principal</a>


      </div>
      

      
      
    );
  }
}

export default App;
