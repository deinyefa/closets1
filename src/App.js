import React, { Component } from 'react';
import firebase from 'firebase';

import LoginInterface from './components/LoginInterface';
import MyCloset from './components/MyCloset';
import { Spinner } from './components/common';

class App extends Component {
  state = {
    loggedIn: false
  };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCp3X2csZ-eOrpaZwdWRhYv2SrpxqhKDr8',
      authDomain: 'closet1-dev.firebaseapp.com',
      databaseURL: 'https://closet1-dev.firebaseio.com',
      projectId: 'closet1-dev',
      storageBucket: 'closet1-dev.appspot.com',
      messagingSenderId: '88443996439'
    });
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }


  // the default case will be the loading screen image! With a black person!
  render() {
    switch (this.state.loggedIn) {
      case true:
        return <MyCloset />;
      case false:
        return <LoginInterface />;
      default:
        return <Spinner size="large" />;
    }
  }
}

export default App;
