import React from 'react';
import './App.css';
import {Route,Switch} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';

const HatPage = (props) => (
  <div>
    <h1>This is HatPage</h1>
    {console.log(props)}
  </div>
);

function App() {
  return (
    <Switch>
        <Route exact={true} path='/' component={HomePage}></Route>
        <Route path='/shop/hats' component={HatPage}></Route>
    </Switch> 
  );
}

export default App;
