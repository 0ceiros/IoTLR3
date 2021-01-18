import logo from './logo.svg';
import './App.css';
import './styles.css';
import React, { useState } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import LoginPage from './loginPage';
import MainPage from './mainPage';

function App() {



  return (
    <div >
      <BrowserRouter>
        <Switch>
          <Route exact path='/main' component={MainPage} />
          <Route path='*' component={LoginPage}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
