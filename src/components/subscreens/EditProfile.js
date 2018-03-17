import React, { Component } from 'react';
import { ScrollView, Text, View, Button, Image, TextInput } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel
} from 'react-native-simple-radio-button';

import { Input } from '../common';

let radio_props = [
  { label: 'Female', value: 'female' },
  { label: 'Male', value: 'male' },
  { label: 'Prefer not to say', value: 'n/s' }
];

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
        <View style={styles.informationStyles}>
          <Text style={{ color: 'gray', fontSize: 11, marginBottom: 20 }}>
            Private Information
          </Text>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.labelStyles}>Email</Text>
            <TextInput style={styles.inputStyles} />
          </View>
          <View
            style={{
              flexDirection: 'row',
              paddingTop: 20
            }}
          >
            <Text>Gender</Text>
            <RadioForm
              accessible={true}
              radio_props={radio_props}
              initial={0}
              formHorizontal={false}
              labelHorizontal={true}
              buttonColor={'#E35D91'}
              animation={true}
              onPress={value => console.log(value + ' has been selected')}
              style={{ borderLeftWidth: 2, borderLeftColor: '#000' }}
              buttonWrapStyle={{ marginLeft: 20 }}
            />
          </View>
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
    flex: 1
  }
};

export { EditProfile };
