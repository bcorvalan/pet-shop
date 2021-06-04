import React, { Component } from "react";

class InputState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: null,
      count: null
    };
  }
  handlerValue = (e) => {
    this.setState(
      {
        inputValue: e.target.value,
      },
      () => {
        //Si queremos imprimir en consola nuesro estado actualizado
        console.log(this.state.inputValue);
      }
    );
  };
  handleIncrement = () => {
    this.setState(
      {
        count: this.state.count + 1,
      }
    );
  };

  
  render() {
    return (
      <div> 
        esto es Class Component
        <input
          placeholder="Ingresa tu nombre"
          onChange={this.handlerValue()}
        />
         <button
          placeholder="Ingresa tu nombre"
          onClick={this.handlerIncrement()}
        >Sumar de a uno</button>
        <p>{this.state.inputValue}</p>
      </div>
    );
  }
}

export default InputState;
