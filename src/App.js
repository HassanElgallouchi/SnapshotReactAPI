import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Beatch from './Component/Beatch';
import Bird from './Component/Bird';
import Food from './Component/Food';
import Mountain from './Component/Mountain';
import Navigation from './Component/Navigation';

function App() {
  return (


      <Router>
        <Navigation />
        <Switch>
          <Route exact path='/bird' component={Bird}/>
          <Route exact path='/food' component={Food}/>
          <Route exact path='/beatch' component={Beatch}/>
          <Route exact path='/mountain' component={Mountain}/>
        </Switch>
      </Router>

  );
}

export default App;
