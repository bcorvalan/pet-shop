import React from 'react'
//React sin JSX
const Hello = () => {
     return React.createElement(
        'div', //tag 
        {id:'hello'},//propiedad 
        React.createElement(
            'h1',//tag 
            null,//propiedad
            "Hola mundo! React sin JSX" //elemento hijo
        )
     )
}

export default Hello