import React, { Component } from 'react';
import { ImageBackground, View, Text } from 'react-native';
import { connect } from 'react-redux';
import firebase from 'firebase';
// import { loggedIn } from '../actions';

import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';
import MyCloset from './MyCloset';
import { Spinner } from './common';

let userLoggedIn;

class LoginInterface extends Component {
  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        userLoggedIn = true;
      } else {
        userLoggedIn = false;
      }
    });
    console.log(userLoggedIn);
  }

  renderCorrectForm() {
    if (this.props.showSignUpForm) {
      return <SignUpForm />;
    }
    return <SignInForm />;
  }

  render() {
    return <MyCloset />;

    // switch (userLoggedIn) {
    //   case true:
    //     return <MyCloset />;
    //   case false:
    //     return (
    //       <ImageBackground
    //         source={require('../assets/login-background.jpg')}
    //         style={styles.backgroundImage}
    //         blurRadius={30}
    //       >
    //         {this.renderCorrectForm()}
    //       </ImageBackground>
    //     );
    //   default:
    //     return <Spinner size="large" />;
    // }
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
