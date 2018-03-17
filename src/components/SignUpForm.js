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
import CheckBox from 'react-native-checkbox';

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
          <Text style={{ color: 'black', marginBottom: 30 }}>
            Password must be at least 6 characters!
          </Text>

          {this.renderSignUpButton()}

          <View style={{ marginTop: 20 }}>
            <View style={{ flexDirection: 'row' }}>
              <CheckBox
                label="I agree to App Name"
                onChange={checked => {
                  if (checked) {
                    console.log(
                      'if true, state."agreed-to-terms-of-use" = true; save info to database'
                    );
                  } else {
                    console.log(
                      '-> check this when register button has been clicked! Didn\'t agree, show error: "Must accept terms of use to access this app"'
                    );
                  }
                }}
                labelStyle={{
                  color: 'black',
                  fontSize: 11
                }}
                checkboxStyle={{
                  width: 20,
                  height: 20
                }}
              />
              <TouchableOpacity
                onPress={() => console.log('go to terms of use')}
              >
                <Text
                  style={{
                    fontSize: 11,
                    alignSelf: 'flex-start',
                    marginLeft: -7,
                    marginTop: 4,
                    textDecorationLine: 'underline'
                  }}
                >
                  Terms of Use
                </Text>
              </TouchableOpacity>
            </View>
            <CheckBox
              label="Subscribe to our newsletter"
              onChange={checked => {
                if (checked) {
                  console.log(
                    'if true, state."subscribed" = true; collect email and add to mailing list'
                  );
                }
              }}
              labelStyle={{
                color: 'black',
                fontSize: 11
              }}
              checkboxStyle={{
                width: 20,
                height: 20
              }}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = {
  formContainerStyles: {
    alignItems: 'center',
    borderColor: '#EE6A60',
    borderWidth: 3,
    borderRadius: 2,
    paddingBottom: 30
  },
  registerStyles: {
    alignSelf: 'flex-start',
    paddingTop: 10,
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
