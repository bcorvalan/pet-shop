import React, { Component } from "react";
import '../styles/navBar.css'; 

class NavBar extends Component {
  render() {
    return (
      <nav className="topnav">
        <a className="active" href="#home">PetShop</a>
        <a href="#news">Productos</a>
        <a href="#contact">Promociones</a>
        <a href="#about">About</a>
    </nav>
    );
  }
}

export default NavBar;
