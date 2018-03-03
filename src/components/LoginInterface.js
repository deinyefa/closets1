import React, { Component } from 'react';
import { ImageBackground, View, Text } from 'react-native';

import SignInForm from './SignInForm';

class LoginInterface extends Component {
  render() {
    return (
      <ImageBackground
        source={require('../assets/login-background.jpg')}
        style={styles.backgroundImage}
      >
        <SignInForm />
      </ImageBackground>
    );
  }
}

const styles = {
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    paddingLeft: 60,
    paddingRight: 60,
    paddingVertical: 90
  }
};

export default LoginInterface;
