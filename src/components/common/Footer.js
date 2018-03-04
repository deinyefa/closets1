/**
 * May add some icons next to the page labels
 * or completely remove them
 */

import React from 'react';
import { View, Text } from 'react-native';

const Footer = props => {
  return (
    <View style={styles.containerStyles}>
      <Text>Inspiration</Text>
      <Text>Expore</Text>
      <Text>Sell</Text>
      <Text>Bag</Text>
      <Text>My Closet</Text>
    </View>
  );
};

const styles = {
  containerStyles: {
    paddingTop: 20,
    paddingBottom: 20,
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    backgroundColor: '#BFBFBF'
  }
};

export { Footer };
