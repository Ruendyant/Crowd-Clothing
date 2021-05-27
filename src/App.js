import "./styles.css";
import React from 'react';
import HomePage from "./Pages/Homepage/Homepage_component_jsx";
import { Redirect, Route, Switch } from "react-router-dom";
import ShopPage from "./Pages/Shop/shop-page_component_jsx";
import Header from "./Component/Header/header_component";
import { auth, createdUserWithGoogle } from "./Component/firebase/firebase_utils";
import SignInSignUp from "./Pages/Account/sing-in_and_sign-up";
import { connect } from "react-redux";
import { Users } from './redux/user/action-creator';
import { selectorUserCurrent } from "./redux/user/user-selector";
import {createStructuredSelector} from 'reselect';
import Checkout from "./Component/Checkout/chekcout_comp";


class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const {Users} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      if(user) {
        const userRef = await createdUserWithGoogle(user);
        userRef.onSnapshot(snap => {
          Users({
            id:snap.id,
             ...snap.data()
          })
        })
      }
      Users(user);
    })
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return ( <React.Fragment>
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/shop" component={ShopPage}/>
        <Route path="/checkout" component={Checkout}/>
        <Route exact path="/signin" render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInSignUp />)} />
      </Switch>
      </React.Fragment>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser : selectorUserCurrent
})

const mapDispatchToProps = dispatch => ({
  Users : user => dispatch(Users(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);