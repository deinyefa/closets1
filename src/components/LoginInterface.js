import React, { Component } from 'react';
import { ImageBackground, View, Text } from 'react-native';

import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';

class LoginInterface extends Component {
  state = {
    registerToggle: 'false'
  };

  forgotPassword() {
    return Alert.alert('user forgot password');
  }
  signUpButton() {
    return Alert.alert('user submitted form');
  }
  registerForm() {
    return Alert.alert('user wants to register');
  }

  renderCorrectForm() {
    if (this.state.registerToggle) {
      return (
        <SignUpForm
          registerToggle={this.state.registerToggle}
          signUpButton={this.state.signUpButton}
        />
      );
    }
    return (
      <SignInForm
        registerForm={this.state.registerForm}
        signUpButton={this.state.signUpButton}
        forgotPassword={this.state.forgotPassword}
      />
    );
  }

  render() {
    return (
      <ImageBackground
        source={require('../assets/login-background.jpg')}
        style={styles.backgroundImage}
      >
        <SignUpForm />
        {this.renderCorrectForm()}
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
