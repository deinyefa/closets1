import React, { Component } from 'react';
import { Alert, View, Text, TextInput, TouchableOpacity } from 'react-native';

import { Button, Input, CardSection } from './common';

const SignInForm = ({ signUpButton, registerToggle, forgotPassword }) => {
  return (
    <View style={styles.formContainerStyles}>
      <TouchableOpacity
        onPress={(registerToggle = 'true')}
        style={styles.registerStyles}
      >
        <Text>Register</Text>
      </TouchableOpacity>

      <View style={styles.formStyles}>
        <Text style={styles.appNameStyles}>App Name</Text>
        <View>
          <Input placeholder="email@example.com" label="email" />
          <Input placeholder="password" label="password" />
        </View>
        <Button onPress={signUpButton}>SIGN IN</Button>
        <TouchableOpacity
          onPress={forgotPassword}
          style={styles.forgotPasswordStyles}
        >
          <Text>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = {
  formContainerStyles: {
    flex: 1,
    alignItems: 'center',
    borderColor: '#EE6A60',
    borderWidth: 3,
    borderRadius: 2,
    backgroundColor: 'rgba(255, 255, 255, 0.9)'
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
