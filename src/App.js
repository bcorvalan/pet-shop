import "./App.css"
import NavBar from "./components/NavBar"
import ProductCardClassWithProps from "./components/ProductCardClassWithProps"
import ItemListContainer from "./components/ItemListContainer"
import ProductCardFunctionComponet from "./components/ProductCardFunctionComponet"
import image from'./assets/perro.png'

function App() {
  return (
    <div className="App">
      <NavBar />
       <ProductCardClassWithProps precio="$5500" peso="20kg" img = {image}/>
       <ItemListContainer greeting = "Hola react"/>
       <ProductCardFunctionComponet/>
    </div>
  );
}

export default App;
