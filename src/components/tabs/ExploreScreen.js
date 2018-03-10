import React, { Component } from 'react';
import { Text, View } from 'react-native';

class ExploreScreen extends Component {
  render() {
    return (
      <View>
        <Text
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          Explore Screen!
        </Text>
      </View>
    );
  }
}

export { ExploreScreen };
