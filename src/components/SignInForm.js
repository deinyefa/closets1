import React, { Component } from 'react';
import { Alert, View, Text, TextInput, TouchableOpacity } from 'react-native';

import { Button, Input } from './common';

class SignInForm extends Component {
  // const { formContainerStyles, registerStyles, appNameStyles  } = styles;
  forgotPassword() {
    return Alert.alert('user forgot password');
  }
  signUpButton() {
    return Alert.alert('user submitted form');
  }
  registerForm() {
    return Alert.alert('user wants to register');
  }

  render() {
    return (
      <View style={styles.formContainerStyles}>
        <TouchableOpacity onPress={this.registerForm} style={styles.registerStyles}>
          <Text>Register</Text>
        </TouchableOpacity>
        
        <View style={styles.formStyles}>
          <Text style={styles.appNameStyles}>App Name</Text>
          <View>
            <Input placeholder="email@example.com" label="email" />
            <Input placeholder="password" label="password" />
          </View>
          <Button onPress={this.signUpButton}>SIGN IN</Button>
          <TouchableOpacity onPress={this.forgotPassword} style={styles.forgotPasswordStyles}>
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
    borderColor: '#000',
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
