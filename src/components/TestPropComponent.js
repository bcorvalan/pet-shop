import React, { Component } from "react";
import Button from "./Button";

class TestPropComponent extends Component {
  constructor(props) {
    super(props);
    //La manera correcta de 'bindiar' metodos(funciones) a nuestros componentes de clase
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log("Click happened");
  }
  render() {
    return (
      <div>
        <h1>Hola {this.props.test}</h1>
        <Button handleClick={this.handleClick} />
        {
            this.props.children.map((tag)=> console.log(tag))
        }
      </div>
    );
  }
}

export default TestPropComponent;
