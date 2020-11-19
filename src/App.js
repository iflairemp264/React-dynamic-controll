import './App.css';
import DynamicFormControll from './components/DynamicFormControll';
import IncorporationForm from './components/IncorporationForm';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Authentication from './components/Authentication';
import AuthContext from './context/context';
import {useState} from 'react'
function App() {
  const [loggedIn, setLoggedIn] = useState(false);
    const login = () => {
        setLoggedIn(true);
    }
    const logout = () => {
        setLoggedIn(false);
    }
  return (
    <div className="App">
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">Welocme</a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li><Link to={'/'} className="nav-link"> Home </Link></li>
              <li><Link to={'/dynamiccontrol'} className="nav-link">Dynamic Controlls</Link></li>
              <li><Link to={'/authentication'} className="nav-link">Authentication</Link></li>
            </ul>
          </div>
        </nav>
        <header className="App-header">
          <Switch>
            <Route exact path='/' component={DynamicFormControll} />
            <Route path='/dynamiccontrol' component={IncorporationForm} />
            <Route path='/authentication' component={Authentication} />
            {/* <Route path='/about' component={About} /> */}
          </Switch>
          

        </header>
      </Router>
     
    </div>

  );
}

export default App;
