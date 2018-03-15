import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { updatePassword } from '../../actions';

import { Input, Button } from '../common';

class NewChangePassword extends Component {
  onUpdatePassword(text1, text2) {
    console.log(text1 + ' ' + text2);
  }

  render() {
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
          value={this.props.newPassword}
          onChangeText={text =>
            this.props.updatePassword({
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
          value={this.props.confirmPassword}
          onChangeText={text =>
            this.props.updatePassword({
              prop: 'confirmPassword',
              value: text
            })
          }
        />
        <Text style={styles.errorStyles}>{this.props.error}</Text>
        <Button
          onPress={() => {
            this.onUpdatePassword(
              this.props.newPassword,
              this.props.confirmPassword
            );
          }}
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
  }
};

mapStateToProps = state => {
  return {
    newPassword: state.auth.newPassword,
    confirmPassword: state.auth.confirmPassword,
    error: state.auth.error
  };
};

export const ChangePassword = connect(mapStateToProps, { updatePassword })(
  NewChangePassword
);
