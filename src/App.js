import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './Main';
import About from './About';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/about" component={About} />
      </Switch>
    </div>
  );
}

export default App;
