import React from 'react';
import {
  TouchableOpacity,
  Input,
  Button,
  Text,
  View,
  Switch
} from 'react-native';

const SignUpForm = ({ registerToggle, signUpButton }) => {
  return (
    <View style={styles.formContainerStyles}>
      <TouchableOpacity
        onPress={(registerToggle = 'false')}
        style={styles.registerStyles}
      >
        <Text>Log In</Text>
      </TouchableOpacity>

      <View style={styles.formStyles}>
        <Text style={styles.appNameStyles}>App Name</Text>
        <View>
          <Input placeholder="email@example.com" label="email" />
          <Input placeholder="password" label="password" />
        </View>
        <Button onPress={signUpButton}>REGISTER</Button>
        {/* <TouchableOpacity
          onPress={this.forgotPassword}
          style={styles.forgotPasswordStyles}
        > */}
        <Switch>Forgot Password?</Switch>
        {/* </TouchableOpacity> */}
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

export default SignUpForm;
