import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import {
  loadForgotPasswordScreen,
  emailChanged,
  firbaseSendPasswordResetEmail
} from '../actions';

class ForgotPasswordForm extends Component {
  render() {
    const {
      email,
      statusMessage,
      error,
      loadForgotPasswordScreen,
      emailChanged,
      firbaseSendPasswordResetEmail
    } = this.props;
    return (
      <View style={styles.formContainerStyles}>
        <Text style={error ? styles.errorStyles : styles.statusStyles}>
          {error || statusMessage}
        </Text>

        <Text style={styles.appNameStyles}>App Name</Text>
        <View style={styles.titleContainerStyles}>
          <Text style={{ fontSize: 20 }}>FORGOT PASSWORD</Text>
          <Text style={{ textAlign: 'center', paddingTop: 5 }}>
            Confirm your identity to reset your password
          </Text>
        </View>

        <View style={styles.inputContainerStyles}>
          <TextInput
            placeholder="please enter your email address"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={email => emailChanged(email)}
            value={email}
          />
        </View>

        <TouchableOpacity
          style={styles.buttonStyles}
          onPress={() => firbaseSendPasswordResetEmail(email)}
        >
          <Text style={styles.textStyles}>OK</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={loadForgotPasswordScreen}>
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
    marginTop: 40,
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
  errorStyles: {
    fontSize: 16,
    color: 'red',
    paddingTop: 10
  },
  statusStyles: {
    fontSize: 16,
    color: 'green',
    paddingTop: 10
  },
  buttonStyles: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#EE6A60'
  }
};

mapStateToProps = state => {
  return {
    email: state.auth.email,
    statusMessage: state.auth.statusMessage,
    error: state.auth.error
  };
};

export default connect(mapStateToProps, {
  loadForgotPasswordScreen,
  emailChanged,
  firbaseSendPasswordResetEmail
})(ForgotPasswordForm);
