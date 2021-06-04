import React from 'react'

function EjemploChildren(props) {
    console.log(props)
    return (
        <div>
            {props.children}
        </div>
    )
}

export default EjemploChildren
