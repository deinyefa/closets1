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

  forgotPassword() {
    return Alert.alert('user forgot password');
  }

  onEmailChanged(text) {
    this.props.emailChanged(text);
  }

  onPasswordChanged(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }

  renderError() {
    if (this.props.error) {
      return <Text style={styles.signInErrorStyle}>{this.props.error}</Text>;
    }
  }

  renderSignInButton() {
    if (this.props.loading) {
      return <Spinner size="small" />;
    }
    return <Button onPress={this.onButtonPress.bind(this)}>SIGN IN</Button>;
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
          {this.renderError()}
          <View style={{ flex: 1, width: 220 }}>
            <Input
              placeholder="email@gmail.com"
              label="email"
              value={this.props.email}
              onChangeText={this.onEmailChanged.bind(this)}
            />
            <Input
              secureTextEntry={true}
              placeholder="password"
              label="password"
              value={this.props.password}
              onChangeText={this.onPasswordChanged.bind(this)}
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
    // flex: 1,
    alignItems: 'center',
    borderColor: '#EE6A60',
    borderWidth: 3,
    borderRadius: 2,
    paddingBottom: 30,
    top: 50
  },
  registerStyles: {
    alignSelf: 'flex-start',
    paddingTop: 15,
    paddingLeft: 10
  },
  formStyles: {
    paddingTop: 70,
    height: 300
  },
  appNameStyles: {
    fontSize: 32,
    marginBottom: 10,
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
    password: state.auth.password,
    error: state.auth.error,
    loading: state.auth.loading
  };
};

export default connect(mapStateToProps, {
  registerToggle,
  emailChanged,
  passwordChanged,
  loginUser
})(SignInForm);
