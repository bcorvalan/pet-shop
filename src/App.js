import "./App.css";
import NavBar from "./components/NavBar";
//import ProductCardClassWithProps from "./components/ProductCardClassWithProps"
//import ItemListContainer from "./components/ItemListContainer"
//import ProductCardFunctionComponet from "./components/ProductCardFunctionComponet"
//import TestPropComponent from "./components/TestPropComponent";
//import InputState from "./components/InputState";
//import Test from "./components/Test";
//import image from "./assets/perro.png";
//(import EjemploChildren from "./components/EjemploChildren"
//import StateInCC from "./components/StateInCC"
import UseState from "./components/UseState"

function App() {
  return (
    <div className="App">
      <NavBar />
      {/*<ProductCardClassWithProps precio="$5500" peso="20kg" img = {image}/>/}
      {/*<ItemListContainer greeting = "Hola react"/>*/}
      {/* <ProductCardFunctionComponet/>*/}
      {/*<TestPropComponent test = 'React'>
        <h1>Wow React</h1>
        <h3>Que copado el componente clase</h3>
      </TestPropComponent>*/}
      {/*<Test/>/}
      {/*<InputState/>*/}
      {/*<StateInCC/>*/}
      <UseState/>
    </div>
  );
}

export default App;
