import React, { Component } from 'react'

import Button from './components/Button'
import InputValue from './components/InputValue'
import logo from './logo.svg';
import './App.css';

export default class App extends Component {
  /*constructor() {
    super();
    this.state = {
      contador: 0,
      limiteSuperior:10,
      limiteInferior:3
    };
    this.aumentarContador = this.aumentarContador.bind(this);
    this.decreaseCounter = this.decreaseCounter.bind(this);
    this.setUpperLimit = this.setUpperLimit.bind(this);
    this.setLowerLimit = this.setLowerLimit.bind(this);
  } */
  state = {
    contador:0,
    limiteSuperior:10,
    limiteInferior:3,
    mensajes:[]
  };
  aumentarContador =() => {
    if(this.state.contador < this.state.limiteSuperior){
      this.setState({ contador: this.state.contador + 1});
    }else{
      this.setState({
        ...this.state,
        mensajes:[...this.state.mensajes, `El límite superior es ${this.state.limiteSuperior}`]
      })
    }
  }

  decreaseCounter = () => {
    if(this.state.contador > this.state.limiteInferior){
      this.setState({ contador: this.state.contador - 1});
    }else{
      this.setState({
        ...this.state,
        mensajes:[...this.state.mensajes, `El límite inferior es ${this.state.limiteInferior}`]
      })
    }
  }

  setUpperLimit = (upperLimit) => {
    this.setState({...this.state,limiteSuperior:upperLimit})
  }

setLowerLimit = (lowerLimit) => {
  this.setState({...this.state,limiteInferior:lowerLimit})
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Contador</h3>
        <p> {JSON.stringify(this.state)} </p>
        <InputValue
          limite={this.state.limiteSuperior}
          setLimit={this.setUpperLimit}
          title='Limite Superior'
        />
        <InputValue
          limite={this.state.limiteInferior}
          setLimit={this.setLowerLimit}
          title='Limite Inferior'
        />
        <p>{this.state.contador}</p>

        <Button handleClick={this.aumentarContador} title='Aumentador'/>
        <Button handleClick={this.decreaseCounter} title='disminuidor'/>

        {this.state.mensajes.map( mensaje => (
          <p> { mensaje } </p>
        ) )}
        </header>
      </div>
    );
  }
}

