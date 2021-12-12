import React, { Component } from 'react';
import { userSession } from './auth';
import { Signin } from './components/Signin';
import Manager from './components/Manager';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";

export default class App extends Component {
  state = {
    userData: null,
  };

  render() {
    return (
      <div>
        {!userSession.isUserSignedIn() ? <Signin /> : <Manager userData = {this.state.userData}/>}
      </div>
    )
  }

  componentDidMount() {
    if (userSession.isSignInPending()) {
      userSession.handlePendingSignIn().then(userData => {
        window.history.replaceState({}, document.title, '/');
        this.setState({ userData: userData });
      });
    } else if (userSession.isUserSignedIn()) {
      this.setState({ userData: userSession.loadUserData() });
    }
  }
}