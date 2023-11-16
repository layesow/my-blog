import Ajouter from './Ajouter';
import './App.css';
import BlogDetail from './BlogDetail';
import Home from './Home';
import Nav from './Nav';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  
  return (
    <Router>
      <div className="App">
        <Nav />
        <div className="contenu">
          <Switch>
            <Route exact path={'/'}>
              <Home />
            </Route>

            <Route path={'/ajouter'}>
              <Ajouter />
            </Route>
            <Route path={'/blogs/:id'}>
              <BlogDetail />
            </Route>


          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
