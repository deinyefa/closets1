import React, { Component } from 'react';
import { ImageBackground, View, Text } from 'react-native';
import { connect } from 'react-redux';

import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';

class LoginInterface extends Component {
  renderCorrectForm() {
    if (this.props.showSignUpForm) {
      return <SignUpForm />;
    }
    return <SignInForm />;
  }

  render() {
    return (
      <ImageBackground
        source={require('../assets/login-background.jpg')}
        style={styles.backgroundImage}
        blurRadius={30}
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

mapStateToProps = state => {
  return {
    showSignUpForm: state.auth.showSignUpForm
  };
};

export default connect(mapStateToProps)(LoginInterface);
