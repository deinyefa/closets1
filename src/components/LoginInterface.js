import React, { Component } from 'react';
import { ImageBackground, View, Text } from 'react-native';
import { connect } from 'react-redux';
import firebase from 'firebase';

import { isUserSignedIn } from '../actions';

import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';
import { Root } from '../config/router';
import { Spinner } from './common';

class LoginInterface extends Component {
  componentWillMount() {
    this.props.isUserSignedIn;
  }

  renderCorrectForm() {
    if (this.props.showSignUpForm) {
      return <SignUpForm />;
    }
    return <SignInForm />;
  }

  render() {
    // return <Root />;

    switch (this.props.user) {
      case true:
        return <Root />;
      case false:
        return (
          <ImageBackground
            source={require('../assets/login-background.jpg')}
            style={styles.backgroundImage}
            blurRadius={30}
          >
            {this.renderCorrectForm()}
          </ImageBackground>
        );
      default:
        return <Spinner size="large" />;
    }
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
    showSignUpForm: state.auth.showSignUpForm,
    user: state.auth.user
  };
};

export default connect(mapStateToProps, { isUserSignedIn })(LoginInterface);
