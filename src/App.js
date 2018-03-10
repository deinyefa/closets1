import React, { Component } from 'react';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import {
  Font,
  AppLoading,
  FontAwesome,
  Ionicons,
  MaterialIcons
} from '@expo/vector-icons';

import LoginInterface from './components/LoginInterface';
import { Spinner } from './components/common';
import reducers from './reducers';

class App extends Component {
  // TODO: refactor into env file and gitignore it
  async componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCp3X2csZ-eOrpaZwdWRhYv2SrpxqhKDr8',
      authDomain: 'closet1-dev.firebaseapp.com',
      databaseURL: 'https://closet1-dev.firebaseio.com',
      projectId: 'closet1-dev',
      storageBucket: 'closet1-dev.appspot.com',
      messagingSenderId: '88443996439'
    });

    // await Font.loadAsync({
    //   fontawesome: FontAwesome.font,
    //   ionicon: Ionicons.font,
    //   materialIcon: MaterialIcons.font
    // });
  }

  // the default case will be the loading screen image! With a black person!
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <LoginInterface />
      </Provider>
    );
  }
}

export default App;
