import React, { Component } from 'react';
import { Alert, View, Text, TextInput, TouchableOpacity } from 'react-native';
import firebase from 'firebase';

import { Button, Input, Spinner } from './common';

class SignInForm extends Component {
  state = { email: '', password: '', signInError: '', loading: false };

  forgotPassword() {
    return Alert.alert('user forgot password');
  }
  register() {
    return Alert.alert('user wants to register');
  }
  renderSignInButton() {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }
    return (
      <Button onPress={() => this.signInButton.bind(this)}>SIGN IN</Button>
    );
  }
  signInButton() {
    const { email, password } = this.state;
    this.setState({ signInError: '', loading: true });
    firebase.auth
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
          onPress={() => this.register}
          style={styles.registerStyles}
        >
          <Text>Register</Text>
        </TouchableOpacity>

        <View style={styles.formStyles}>
          <Text style={styles.appNameStyles}>App Name</Text>
          <Text>{this.state.signInErrorStyle}</Text>
          <View>
            <Input
              placeholder="email@gmail.com"
              label="email"
              value={this.state.email}
              onChangeText={email => this.setState({ email })}
            />
            <Input
              secureTextEntry={true}
              placeholder="password"
              label="password"
              value={this.state.password}
              onChangeText={password => this.setState({ password })}
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
    marginBottom: 30
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

export default SignInForm;
