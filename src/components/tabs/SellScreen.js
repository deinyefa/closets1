import React, { Component } from 'react';
import { Text, View } from 'react-native';

class SellScreen extends Component {
  render() {
    return (
      <View>
        <Text
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          Sell Screen!
        </Text>
      </View>
    );
  }
}

export { SellScreen };
