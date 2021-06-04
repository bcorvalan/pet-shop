import React from 'react'

function Button(props) {
    return (
        <div>
            <button onClick = {props.handleClick}>Ver mas</button>
        </div>
    )
}

export default Button
