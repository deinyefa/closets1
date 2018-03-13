import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { List, ListItem } from 'react-native-elements';

class Settings extends Component {
  render() {
    return (
      <ScrollView>
        <Text style={styles.sectionLabelStyles}>SETTINGS</Text>
        <List>
          <ListItem
            title="Change Currency"
            onPress={() => this.props.navigation.navigate('ChangeCurrency')}
          />
          <ListItem
            title="Change Password"
            onPress={() => this.props.navigation.navigate('ChangePassword')}
          />
        </List>
        <Text style={styles.sectionLabelStyles}>INFO</Text>
        <List>
          <ListItem
            title="Shipping Info"
            onPress={() => this.props.navigation.navigate('ShippingInfo')}
          />
          <ListItem
            title="Return Policy"
            onPress={() => this.props.navigation.navigate('ReturnPolicy')}
          />
          <ListItem
            title="Privacy and Terms"
            onPress={() => this.props.navigation.navigate('PrivacyTerms')}
          />
        </List>
        <Text style={styles.sectionLabelStyles}>MORE</Text>
        <List>
          <ListItem title="Rate App" onPress={() => console.log('rate app')} />
          <ListItem
            title="Feedback"
            onPress={() => this.props.navigation.navigate('Feedback')}
          />
          <ListItem
            title="About"
            onPress={() => this.props.navigation.navigate('About')}
          />
        </List>
        <List>
          <View style={styles.signOutContainerStyles}>
            <Text
              style={styles.signOutStyles}
              onPress={() => console.log('sign out')}
            >
              SIGN OUT
            </Text>
          </View>
          <Text
            style={{ fontSize: 14, alignSelf: 'center', paddingBottom: 40 }}
          >
            v1.0.0
          </Text>
        </List>
      </ScrollView>
    );
  }
}

const styles = {
  sectionLabelStyles: {
    color: 'tomato',
    paddingTop: 20,
    paddingLeft: 10,
    fontSize: 13
  },
  signOutContainerStyles: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#7f7f7f'
  },
  signOutStyles: {
    fontSize: 22,
    color: '#ee6a60',
    fontWeight: 'bold',
    paddingTop: 10,
    paddingBottom: 10
  }
};

export { Settings };