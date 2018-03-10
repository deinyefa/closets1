import React, { Component } from 'react';
import { Text, View } from 'react-native';

class InspirationScreen extends Component {
  render() {
    return (
      <View>
        <Text
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          Inspiration Screen!
        </Text>
      </View>
    );
  }
}

export { InspirationScreen };