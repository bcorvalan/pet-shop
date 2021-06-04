import React from 'react'

function InputValueTwo() {
    function handleChange(e){
        console.log(e.target.InputValue)
    }
    return (
        <div>
            <button onChange={handleChange}></button>
            
        </div>
    )
}

export default InputValueTwo
