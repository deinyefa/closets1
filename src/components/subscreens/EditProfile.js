import React, { Component } from 'react';
import { ScrollView, Text, View, Button, Image, TextInput } from 'react-native';
import { List, ListItem } from 'react-native-elements';

import { Input } from '../common';

class EditProfile extends Component {
  static navigationOptions = {
    headerLeft: (
      <Button
        onPress={() => console.log('pressed save!')}
        title="Save"
        color="#000"
      />
    ),
    headerRight: (
      <Button
        onPress={() => console.log('pressed cancel!')}
        title="Cancel"
        color="#000"
      />
    )
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.profilePictureContainerStyles}>
          <Image
            source={require('../../assets/default-dp.png')}
            style={styles.profilePictureStyles}
          />
          <Text
            style={{ color: 'blue', fontSize: 13, marginTop: 10 }}
            onPress={() => console.log('change profile pic')}
          >
            Change Profile Picture
          </Text>
        </View>
        <View style={styles.informationStyles}>
          <Text style={{ color: 'gray', fontSize: 11, marginBottom: 20 }}>
            General Information
          </Text>
          <View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.labelStyles}>Name</Text>
              <TextInput style={styles.inputStyles} />
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.labelStyles}>Username</Text>
              <TextInput style={styles.inputStyles} />
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.labelStyles}>Bio</Text>
              <TextInput style={styles.inputStyles} />
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.labelStyles}>Location</Text>
              <TextInput style={styles.inputStyles} />
            </View>
          </View>
        </View>
        <View style={styles.informationStyles}>
          <Text style={{ color: 'gray', fontSize: 11, marginBottom: 20 }}>
            Private Information
          </Text>
          <Input label="Email" />
          <Input label="Gender" />
        </View>
      </View>
    );
  }
}

styles = {
  profilePictureContainerStyles: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'lightgrey',
    backgroundColor: '#eeecec'
  },
  profilePictureStyles: {
    borderRadius: 80,
    width: 150,
    height: 150
  },
  informationStyles: {
    borderBottomWidth: 2,
    borderBottomColor: 'lightgrey',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20
  },
  inputStyles: {
    height: 30,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    flex: 3
  },
  labelStyles: {
    fontSize: 13,
    flex: 1,
    marginBottom: -5
  }
};

export { EditProfile };
