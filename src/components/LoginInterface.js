import React, { Component } from 'react';
import { ImageBackground, View, Text } from 'react-native';

import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';

class LoginInterface extends Component {
  state = {
    registerToggle: false
  };

  toggleAuthPages() {
    this.setState({ registerToggle: !this.state.registerToggle });
  }

  renderCorrectForm() {
    if (this.state.registerToggle) {
      return <SignUpForm toggleAuthPages={this.toggleAuthPages.bind(this)} />;
    }
    return <SignInForm toggleAuthPages={this.toggleAuthPages.bind(this)} />;
  }

  render() {
    return (
      <ImageBackground
        source={require('../assets/login-background.jpg')}
        style={styles.backgroundImage}
      >
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
