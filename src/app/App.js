import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { LoginPage } from '../domain/login/login';

function App() {
  
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/' component={LoginPage} />
          <Route path='/login' component={LoginPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
