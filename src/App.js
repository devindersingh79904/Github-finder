import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Component/Layout/Navbar';
import Alert from './Component/Layout/Alert';
import User from './Component/users/User';
import Home from './Component/pages/Home';
import About from './Component/pages/About';
import NotFound from './Component/pages/NotFound';
import GithubState from '../src/Context/github/GithubState';
import AlertState from '../src/Context/alert/AlertState';

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className='App'>
            <Navbar />
            <div className='container'>
              <Alert />

              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/user/:login' component={User} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
