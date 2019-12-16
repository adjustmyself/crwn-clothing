import React from 'react';
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


class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
            <Route exact={true} path='/' component={HomePage}></Route>
            <Route path='/shop' component={ShopPage}></Route>
            <Route exact path='/checkout' component={CheckOutPage}></Route>
            <Route path='/signin'
              render={ () => 
              this.props.currentUser ? (
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
}

const mapStateToProps = createStructuredSelector({
  currentUser:selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
