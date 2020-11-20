import './App.css';
import DynamicFormControll from './components/DynamicFormControll';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Authentication from './components/Authentication';
import FormValidation from './components/FormValidation';
import IncorporationForm from './components/IncorporationForm';
import { useState } from 'react';
import Protected from './components/ProtectedPage';
import Unprotected from './components/Unprotected';
import GuardedRoute from './components/guard/GuardedRoute';

function App() {

  const[isAutheticated, setisAutheticated] = useState(false);

  function login(){
    setisAutheticated(true);
    console.log("loggedInUser:" + isAutheticated)
  }

  function logout(){
    setisAutheticated(false);
    console.log("loggedInUser:" + isAutheticated)
  }

  return (
    <div className="App">
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand">Welocme</a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li><Link to={'/'} className="nav-link"> Home </Link></li>
              <li><Link to={'/dynamiccontrol'} className="nav-link">Dynamic Controlls</Link></li>
              <li><Link to={'/authentication'} className="nav-link">Authentication</Link></li>
              <li><Link to={'/validation'} className="nav-link">Validations</Link></li>
              <li><Link to={'/protected'} className="nav-link">Protected</Link></li>
              <li><Link to={'/unprotected'} className="nav-link">Unprotected</Link></li>
            </ul>
            <button onClick={login} className="mr-3 btn btn-light">Login</button>
            <button onClick={logout} className="btn btn-light">Logout</button>
          </div>
        </nav>
        <header className="App-header">
          <Switch>
              <Route exact path='/' component={DynamicFormControll} />
              <Route path='/dynamiccontrol' component={IncorporationForm} />
              <Route path='/authentication' component={Authentication} />
              <Route path='/validation' component={FormValidation} />
              <GuardedRoute path='/protected' component={Protected} auth isAutheticated />
              <Route path='/unprotected' component={Unprotected}/>
          </Switch>
        </header>
      </Router>

    </div>

  );
}

export default App;
