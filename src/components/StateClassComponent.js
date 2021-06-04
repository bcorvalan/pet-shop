import React, { Component } from "react";

class StateClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "React",
    };
  }
  handlerValue = (e) => {
    this.setState(
      {
        name: e.target.value
      },
      () => {
        console.log(this.state.name);
      }
      );
  };
  render() {
    return (
      <div>
        <input
          placeholder="Ingresa tu nombre"
          onChange={this.handlerValue}
        />
      </div>
    );
  }
}

export default StateClassComponent;
