import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import Page1 from './components/page1/Page1';
import Page2 from './components/page2/Page2';
import Header from './components/common/Header';
import NotFound from './components/NotFound';

export const App = ()=> (
  <div>
    <Header />
    <div className="container container-fluid">
      <Main />
    </div>
  </div>
);

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/page1' component={Page1}/>
      <Route path='/page2' component={Page2}/>
      <Route component={NotFound} />
    </Switch>
  </main>
);
