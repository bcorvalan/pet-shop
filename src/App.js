import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import HelloTwo from './components/HelloTwo';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      {/*<NavBar/>*/}
      <Hello/>
      <HelloTwo/>
    </div>
  );
}

export default App;
