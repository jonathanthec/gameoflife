import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './Main';
import About from './About';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/gameoflife" component={Main} />
        <Route exact path="/gameoflife/about" component={About} />
      </Switch>
    </div>
  );
}

export default App;
