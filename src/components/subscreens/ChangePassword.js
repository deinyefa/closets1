import React from 'react';
import { View, Text } from 'react-native';

import { Input, Button } from '../common';

const ChangePassword = () => {
  return (
    <View>
      <Text>Update your password</Text>
      <Input label="Old" placeholder="Your old password" />
      <Input label="New" placeholder="New password" />
      <Input label="Confirm" placeholder="Confirm password" />
      <Button onPress={() => console.log('submit form')}>Submit</Button>
    </View>
  );
};

export { ChangePassword };
