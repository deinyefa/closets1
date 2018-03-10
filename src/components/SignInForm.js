import React, { Component } from 'react';
import { Alert, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import {
  registerToggle,
  emailChanged,
  passwordChanged,
  loginUser
} from '../actions';
import firebase from 'firebase';

import { Button, Input, Spinner } from './common';

class SignInForm extends Component {
  state = { email: '', password: '', signInError: '', loading: false };

  forgotPassword() {
    return Alert.alert('user forgot password');
  }
  renderSignInButton() {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }
    return <Button onPress={this.onButtonPress.bind(this)}>SIGN IN</Button>;
  }
  onButtonPress() {
    const { email, password } = this.props;

    this.props.loginUser({ email, password });
  }
  signInButton() {
    const { email, password } = this.state;
    this.setState({ signInError: '', loading: true });
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(this.onLogInSuccess.bind(this))
      .catch(() => {
        this.setState({
          signInError:
            'Oops! That email and password combination does not match our records.',
          loading: false
        });
      });
  }

  onLogInSuccess() {
    this.setState({ email: '', password: '', signInError: '', loading: false });
  }

  render() {
    return (
      <View style={styles.formContainerStyles}>
        <TouchableOpacity
          onPress={this.props.registerToggle}
          style={styles.registerStyles}
        >
          <Text>Register</Text>
        </TouchableOpacity>

        <View style={styles.formStyles}>
          <Text style={styles.appNameStyles}>App Name</Text>
          <Text style={styles.signInErrorStyle}>{this.state.signInError}</Text>
          <View>
            <Input
              placeholder="email@gmail.com"
              label="email"
              value={this.props.email}
              onChangeText={text => this.props.emailChanged(text)}
            />
            <Input
              secureTextEntry={true}
              placeholder="password"
              label="password"
              value={this.props.password}
              onChangeText={text => this.props.passwordChanged(text)}
            />
          </View>

          {this.renderSignInButton()}

          <TouchableOpacity
            onPress={this.forgotPassword.bind(this)}
            style={styles.forgotPasswordStyles}
          >
            <Text>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = {
  formContainerStyles: {
    flex: 1,
    alignItems: 'center',
    borderColor: '#EE6A60',
    borderWidth: 3,
    borderRadius: 2
  },
  registerStyles: {
    alignSelf: 'flex-start',
    paddingTop: 15,
    paddingLeft: 10
  },
  formStyles: {
    paddingTop: 70
  },
  appNameStyles: {
    fontSize: 32,
    marginBottom: 30,
    textAlign: 'center'
  },
  forgotPasswordStyles: {
    alignSelf: 'center',
    paddingTop: 15
  },
  signInErrorStyle: {
    color: 'red',
    fontSize: 16
  }
};

mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password
  };
};

export default connect(null, {
  registerToggle,
  emailChanged,
  passwordChanged,
  loginUser
})(SignInForm);
