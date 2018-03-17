import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

class ForgotPasswordForm extends Component {
  render() {
    return (
      <View style={styles.formContainerStyles}>
        <Text style={styles.appNameStyles}>App Name</Text>
        <View style={styles.titleContainerStyles}>
          <Text style={{ fontSize: 20 }}>FORGOT PASSWORD</Text>
          <Text style={{ textAlign: 'center', paddingTop: 5 }}>
            Confirm your identity to reset your password
          </Text>
        </View>
        <View style={styles.inputContainerStyles}>
          <TextInput placeholder="please enter your email address" />
        </View>

        <TouchableOpacity
          style={styles.buttonStyles}
          onPress={() => console.log('pressed ok!')}
        >
          <Text style={styles.textStyles}>OK</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('pressed cancel!')}>
          <Text style={{ fontSize: 18, marginTop: 15 }}>CANCEL</Text>
        </TouchableOpacity>
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
    // paddingBottom: 30
  },
  appNameStyles: {
    fontSize: 32,
    marginTop: 70,
    textAlign: 'center'
  },
  titleContainerStyles: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 70,
    marginTop: 50
  },
  inputContainerStyles: {
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    marginBottom: 50
  },
  textStyles: {
    alignSelf: 'center',
    color: '#EE6A60',
    fontSize: 16,
    fontWeight: '600',
    paddingVertical: 7,
    paddingHorizontal: 70
  },
  buttonStyles: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#EE6A60'
  }
};

export default ForgotPasswordForm;
