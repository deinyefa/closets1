import React, { Component } from 'react';
import { TouchableOpacity, Text, View, Alert } from 'react-native';

import { Button, Input } from './common';

class SignUpForm extends Component {
  state = { email: '', password: '' };

  render() {
    return (
      <View style={styles.formContainerStyles}>
        <TouchableOpacity
          onPress={() => this.setState({ registerToggle: 'false' })}
          style={styles.registerStyles}
        >
          <Text>Log In</Text>
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
          <Button onPress={() => this.signUpButton.bind(this)}>REGISTER</Button>
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
  }
};

export default SignUpForm;
