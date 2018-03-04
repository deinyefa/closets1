import React, { Component } from 'react';
import firebase from 'firebase';

import LoginInterface from './components/LoginInterface';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCp3X2csZ-eOrpaZwdWRhYv2SrpxqhKDr8',
      authDomain: 'closet1-dev.firebaseapp.com',
      databaseURL: 'https://closet1-dev.firebaseio.com',
      projectId: 'closet1-dev',
      storageBucket: 'closet1-dev.appspot.com',
      messagingSenderId: '88443996439'
    });
  }

  render() {
    return <LoginInterface />;
  }
}

export default App;
