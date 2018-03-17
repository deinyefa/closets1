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
  onButtonPress() {
    const { email, password } = this.props;

    this.props.signUpUser({ email, password });
  }

  renderSignUpButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }
    return <Button onPress={this.onButtonPress.bind(this)}>REGISTER</Button>;
  }

  onEmailChanged(text) {
    this.props.emailChanged(text);
  }

  onPasswordChanged(text) {
    this.props.passwordChanged(text);
  }

  renderError() {
    if (this.props.error) {
      return <Text style={styles.signUpErrorStyle}>{this.props.error}</Text>;
    }
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
          {this.renderError()}
          <View style={{ flex: 1 }}>
            <Input label="full name" placeholder="Adaeze Nwankwolo" />
            <Input label="username" placeholder="ada" />
            <Input label="location" placeholder="Alberta, Canada" />
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
          <Text style={{ color: 'grey' }}>
            Password must be at least 6 characters!
          </Text>

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
    // flex: 1,
    alignItems: 'center',
    borderColor: '#EE6A60',
    borderWidth: 3,
    borderRadius: 2,
    backgroundColor: '#DF91AF'
  },
  registerStyles: {
    alignSelf: 'flex-start',
    paddingTop: 15,
    paddingLeft: 10
  },
  formStyles: {
    paddingTop: 20
  },
  appNameStyles: {
    fontSize: 32,
    marginBottom: 25,
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
    password: state.auth.password,
    error: state.auth.error,
    loading: state.auth.loading
  };
};

export default connect(mapStateToProps, {
  emailChanged,
  passwordChanged,
  registerToggle,
  signUpUser
})(SignUpForm);
