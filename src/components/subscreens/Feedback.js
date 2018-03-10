import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { List, ListItem } from 'react-native-elements';

import { Input, Button } from '../common';

const Feedback = () => {
  return (
    <View>
      <Input placeholder="The email that we can contact you" />
      <ScrollView>
        <Input placeholder="What do you think of our all and what can we further improve" />
      </ScrollView>
      <Button onPress={() => console.log('Submit feedback')}>Submit</Button>
    </View>
  );
};

export default Feedback;
