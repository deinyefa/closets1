import React, { Component } from 'react';
import { TouchableOpacity, Text, View, Alert } from 'react-native';
import firebase from 'firebase';

import { Button, Input, Spinner } from './common';

class SignUpForm extends Component {
  state = { email: '', password: '', signUpError: '', loading: false };

  renderSignUpButton() {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }
    return <Button onPress={() => this.signUp.bind(this)}>REGISTER</Button>;
  }

  signUp() {
    const { email, password } = this.state;
    this.setState({ signUpError: '' });
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(this.onSignUpSuccess.bind(this))
      .catch(() =>
        this.setState({
          signUpError: 'Sorry, that email is already in use!',
          loading: false
        })
      );
  }
  onSignUpSuccess() {
    this.setState({ email: '', password: '', signInError: '', loading: false });
  }
  login() {
    return Alert.alert('user wants to login');
  }

  render() {
    return (
      <View style={styles.formContainerStyles}>
        <TouchableOpacity
          onPress={this.login.bind(this)}
          style={styles.registerStyles}
        >
          <Text>Log In</Text>
        </TouchableOpacity>

        <View style={styles.formStyles}>
          <Text style={styles.appNameStyles}>App Name</Text>
          <Text>{this.state.signUpErrorStyle}</Text>
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

          {this.renderSignUpButton()}
          
          <Text>I agree to App Name Terms of Use</Text>
          <Text>Subscribe to our newsletter</Text>
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
    // backgroundColor: 'rgba(255, 255, 255, 0.9)'
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
  signUpErrorStyle: {
    color: 'red',
    fontSize: 16
  }
};

export default SignUpForm;
