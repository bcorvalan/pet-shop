import React, { useState } from "react";

function UseState() {
  const [animal, setAnimal] = useState("perro");
  function handlerAnimal() {
    setAnimal("gato");
  }

  return (
    <div>
      <button onClick={handlerAnimal}>Cambiar Animal</button>
      {console.log(animal)}
    </div>
  );
}

export default UseState;
