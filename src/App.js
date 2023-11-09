import './App.css';
import Home from './Home';
import Nav from './Nav';

function App() {
  
  return (
    <div className="App">
        <Nav />
      <div className="contenu">
        <Home />
      </div>
    </div>
  );
}

export default App;
