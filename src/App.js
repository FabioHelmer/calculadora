import React, { Component, useState } from "react";
import './App.css'
class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      valor_a: "",
      valor_b: 0,
    };

    this.handlerClick = this.handlerClick.bind(this)
    this.clear = this.clear.bind(this)
    this.backspace = this.backspace.bind(this)
  }

  handlerClick = (e) =>{
    var caractere = e.target.name
    caractere = this.state.valor_a + caractere
    this.setState({valor_a: caractere});
  }

  clear = () =>{
    this.setState({valor_a: ""}); 
  }

  backspace = () =>{
    var valor_a = this.state.valor_a
    valor_a = valor_a.slice(0, valor_a.length-1)
    this.setState({valor_a})
  }

  calcular= () =>{
    try{
      this.setState({valor_a: eval(this.state.valor_a)})
    }catch(err){
      this.setState({valor_a: "Nan"})
    }

  }


  render() {
    return (
      <div className="container">
        <input type="text" value={this.state.valor_a} />

        <div className="keyPad">
          <button onClick={this.clear} className="highlight" id="clear">clear</button>
          <button onClick={this.backspace} className="highlight" id="backspace">C</button>
          <button name="/" onClick={this.handlerClick}>&divide;</button>
          <button name="7" onClick={this.handlerClick}>7</button>
          <button name="8" onClick={this.handlerClick}>8</button>
          <button name="9" onClick={this.handlerClick}>9</button>
          <button name="*" onClick={this.handlerClick}>&times;</button>
          <button name="4" onClick={this.handlerClick}>4</button>
          <button name="5" onClick={this.handlerClick}>5</button>
          <button name="6" onClick={this.handlerClick}>6</button>
          <button name="-" onClick={this.handlerClick}>&ndash;</button>
          <button name="1" onClick={this.handlerClick}>1</button>
          <button name="2" onClick={this.handlerClick}>2</button>
          <button name="3" onClick={this.handlerClick}>3</button>
          <button name="+" onClick={this.handlerClick}>+</button>
          <button name="0" onClick={this.handlerClick}>0</button>
          <button name="." onClick={this.handlerClick}>.</button>
          <button onClick={this.calcular} className="highlight" id="result">=</button>
        </div>
      </div>
    );
  }
}

export default App;
