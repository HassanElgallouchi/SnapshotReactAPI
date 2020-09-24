import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Car from './Component/Car';
import Moto from './Component/Moto';
import Bike from './Component/Bike';
import Plane from './Component/Plane';
import Navigation from './Component/Navigation';
import TimeOut from './Component/TimeOut';

function App() {
  return (


      <Router>
        <Navigation />
        <Switch>
          <Route exact path='/bikes' component={Bike}/>
          <Route exact path='/motos' component={Moto}/>
          <Route exact path='/cars' component={Car}/>
          <Route exact path='/planes' component={Plane}/>
          <Route exact path='/time' component={TimeOut}/>
        </Switch>
      </Router>

  );
}

export default App;
