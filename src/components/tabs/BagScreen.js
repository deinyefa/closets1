import React, { Component } from 'react';
import { Text, View } from 'react-native';

class BagScreen extends Component {
  render() {
    return (
      <View>
        <Text
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          Bag Screen!
        </Text>
      </View>
    );
  }
}

export { BagScreen };
