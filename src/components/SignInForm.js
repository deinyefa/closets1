import React, { Component } from 'react';
import { Alert, View, Text, TextInput, TouchableOpacity } from 'react-native';
import firebase from 'firebase';

import { Button, Input } from './common';

class SignInForm extends Component {
  state = { email: '', password: '' };

  forgotPassword() {
    return Alert.alert('user forgot password');
  }
  signInButton() {
    const { email, password } = this.state;
    firebase.auth.signInWithEmailAndPassword(email, password);
  }

  render() {
    return (
      <View style={styles.formContainerStyles}>
        <TouchableOpacity
          onPress={() => this.setState({ registerToggle: 'true' })}
          style={styles.registerStyles}
        >
          <Text>Register</Text>
        </TouchableOpacity>

        <View style={styles.formStyles}>
          <Text style={styles.appNameStyles}>App Name</Text>
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
          <Button onPress={() => this.signInButton.bind(this)}>SIGN IN</Button>
          <TouchableOpacity
            onPress={this.forgotPassword}
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
  loginDetailsStyles: {
    flex: 1,
    alignSelf: 'center'
  },
  forgotPasswordStyles: {
    alignSelf: 'center',
    paddingTop: 15
  }
};

export default SignInForm;
