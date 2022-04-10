import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Web3 from 'web3';
import Navigation from './Nav.js';
import Hero from './Hero.js';


function App() {
  let Web3 = require('web3');
  return (
    <div className="App">
      <Navigation />
      <Hero />
    </div>
  );
}

export default App;
