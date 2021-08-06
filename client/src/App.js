import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/home/home';
import Login from './components/login/login';
import Register from './components/register/register';
import NotFound from './components/notFound';

import './App.css';

const App = () => {
  return (
      <Switch>
        <Route exact path={'/'}> <Home/> </Route>
        <Route path={'/login'}> <Login/> </Route>
        <Route path={'/singup'}> <Register /> </Route>
        <Route> <NotFound /> </Route>
      </Switch>
  );
}

export default App;
