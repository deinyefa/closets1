import React, { Component } from 'react';
import { TouchableOpacity, Text, View, Alert } from 'react-native';
import { connect } from 'react-redux';
import {
  emailChanged,
  passwordChanged,
  registerToggle,
  signUpUser
} from '../actions';
import firebase from 'firebase';

import { Button, Input, Spinner } from './common';

class SignUpForm extends Component {
  state = { email: '', password: '', signUpError: '', loading: false };

  onButtonPress() {
    const { email, password } = this.props;

    this.props.signUpUser({ email, password });
  }

  renderSignUpButton() {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }
    return <Button onPress={this.onButtonPress.bind(this)}>REGISTER</Button>;
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

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  render() {
    return (
      <View style={styles.formContainerStyles}>
        <TouchableOpacity
          onPress={this.props.registerToggle}
          style={styles.registerStyles}
        >
          <Text>Log In</Text>
        </TouchableOpacity>

        <View style={styles.formStyles}>
          <Text style={styles.appNameStyles}>App Name</Text>
          <Text style={styles.signUpErrorStyle}>{this.state.signUpError}</Text>
          <View>
            <Input
              placeholder="email@gmail.com"
              label="email"
              value={this.props.email}
              onChangeText={this.onEmailChange.bind(this)}
            />
            <Input
              secureTextEntry={true}
              placeholder="password"
              label="password"
              value={this.state.password}
              onChangeText={this.onPasswordChange.bind(this)}
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

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password
  };
};

export default connect(mapStateToProps, {
  emailChanged,
  passwordChanged,
  registerToggle,
  signUpUser
})(SignUpForm);
