import React from 'react'
import '../styles/navBar.css'; 


function NavBarFunctionComponent() {
    return (
        <nav class="topnav">
        <a class="active" href="#home">Home</a>
        <a href="#news">Productos</a>
        <a href="#contact">Promociones</a>
        <a href="#about">About</a>
    </nav>
    )
}

export default NavBarFunctionComponent
