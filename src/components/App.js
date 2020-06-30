import React from 'react';

import {
  Router,
  Route,
  Switch
} from "react-router-dom";

import '../assets/style/main.scss';
import Splash from './Page/Splash/index';
import Page1 from './Page/Page1';
import Page2 from './Page/Page2';
import Page3 from './Page/Page3';
import Header from './Header';
import history from '../history';


const App = () => {
  return (
    <Router history={history}>

      <Switch>

        <Route exact path="/">
          <Splash />
        </Route>

        <Route exact path="/Step1">
          <header>
            <Header />
          </header>
          <Page1 />
        </Route>

        <Route exact path="/Step2">
          <header>
            <Header />
          </header>
          <Page2 />
        </Route>

        <Route exact path="/Step3">
          <header>
            <Header />
          </header>
          <Page3 />
        </Route>

      </Switch>

    </Router>
  );
}

export default App;