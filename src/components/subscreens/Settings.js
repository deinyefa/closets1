import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { List, ListItem } from 'react-native-elements';

class Settings extends Component {
  render() {
    return (
      <ScrollView>
        <Text>Settings</Text>
        <List>
          <ListItem
            title="Change Password"
            onPress={() => console.log('Password Change')}
          />
          <ListItem
            title="Change Currency"
            onPress={() => console.log('Change Currency')}
          />
        </List>
        <Text>Info</Text>
        <List>
          <ListItem
            title="Shipping Info"
            onPress={() => console.log('shipping info')}
          />
          <ListItem
            title="Return Policy"
            onPress={() => console.log('return policy')}
          />
          <ListItem
            title="Privacy and Terms"
            onPress={() => console.log('privacy and terms')}
          />
        </List>
        <Text>More</Text>
        <List>
          <ListItem title="Rate App" onPress={() => console.log('rate app')} />
          <ListItem title="Feedback" onPress={() => console.log('feedback')} />
          <ListItem title="About" onPress={() => console.log('about us')} />
        </List>
        <List>
          <ListItem
            title="Sign Out"
            rightIcon={{ name: 'cancel' }}
            onPress={() => console.log('sign out')}
          />
          <Text>v.1.0.0</Text>
        </List>
      </ScrollView>
    );
  }
}

export default Settings;
