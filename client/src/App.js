import React, { useEffect } from 'react';
import './App.css';

import { connect } from 'react-redux';

import {Route, Switch, Redirect} from 'react-router-dom';

import { selectCurrentUser } from './redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';
import { checkUserSession } from './redux/user/user.actions';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import CheckOutPage from './pages/checkout/checkout.component';
import Header from './components/header/header.component';
import Sign from './pages/sign/sign.component';


const App = ({checkUserSession, currentUser}) => {

  useEffect(() => {
    checkUserSession()
  },[checkUserSession]);

  return (
    <div>
      <Header />
      <Switch>
          <Route exact={true} path='/' component={HomePage}></Route>
          <Route path='/shop' component={ShopPage}></Route>
          <Route exact path='/checkout' component={CheckOutPage}></Route>
          <Route path='/signin'
            render={ () => 
            currentUser ? (
              <Redirect to='/' />
              ) : (
                <Sign />
                )
            }>
          </Route>
      </Switch> 
    </div>
  );
}


const mapStateToProps = createStructuredSelector({
  currentUser:selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
