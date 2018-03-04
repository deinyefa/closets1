import React from 'react';
import { View, Text } from 'react-native';

const Header = props => {
  return (
    <View style={styles.containerStyles}>
      <Text>{this.props.pageTitle}</Text>
    </View>
  );
};

const styles = {
  containerStyles: {
    fontSize: 18,
    paddingTop: 20,
    paddingBottom: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export { Header };
