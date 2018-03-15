import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { updatePassword, firebasePasswordUpdate } from '../../actions';

import { Input, Button } from '../common';

class NewChangePassword extends Component {
  render() {
    const {
      newPassword,
      confirmPassword,
      error,
      successMessage,
      updatePassword,
      firebasePasswordUpdate
    } = this.props;
    return (
      <View
        style={{
          flex: 1,
          paddingLeft: 20,
          paddingRight: 20
        }}
      >
        <Text style={styles.headerStyles}>Update Your Password</Text>
        <Input
          style={styles.inputFieldStyles}
          label="New"
          placeholder="New password"
          secureTextEntry
          value={newPassword}
          onChangeText={text =>
            updatePassword({
              prop: 'newPassword',
              value: text
            })
          }
        />
        <Input
          style={styles.inputFieldStyles}
          label="Confirm"
          placeholder="Confirm password"
          secureTextEntry
          value={confirmPassword}
          onChangeText={text =>
            updatePassword({
              prop: 'confirmPassword',
              value: text
            })
          }
        />
        <Text style={error ? styles.errorStyles : styles.successStyles}>
          {error || successMessage}
        </Text>
        <Button
          onPress={() =>
            firebasePasswordUpdate({
              newPassword,
              confirmPassword
            })
          }
        >
          RESET MY PASSWORD
        </Button>
      </View>
    );
  }
}

const styles = {
  headerStyles: {
    alignSelf: 'center',
    fontSize: 20,
    paddingBottom: 20,
    paddingTop: 20
  },
  inputFieldStyles: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da'
  },
  errorStyles: {
    fontSize: 18,
    alignSelf: 'center',
    color: 'red'
  },
  successStyles: {
    fontSize: 18,
    alignSelf: 'center',
    color: 'green'
  }
};

mapStateToProps = state => {
  return {
    newPassword: state.auth.newPassword,
    confirmPassword: state.auth.confirmPassword,
    error: state.auth.error,
    successMessage: state.auth.successMessage
  };
};

export const ChangePassword = connect(mapStateToProps, {
  updatePassword,
  firebasePasswordUpdate
})(NewChangePassword);
