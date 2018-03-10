import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

class MyCloset extends Component {
  render() {
    return (
      <View style={styles.closetContainer}>
        <View style={styles.headerContainer}>
          <View style={styles.imageContainer}>
            <Image />
            <Text>Display Name (handle)</Text>
            <Text>Headline (bio)</Text>
          </View>
          <View style={styles.infoContainer}>
            <View style={styles.statsContainer}>
              <View style={styles.statsText}>
                <Text>#</Text>
                <Text>posts</Text>
              </View>
              <View style={styles.statsText}>
                <Text>#</Text>
                <Text>followers</Text>
              </View>
              <View style={styles.statsText}>
                <Text>#</Text>
                <Text>following</Text>
              </View>
            </View>
            <View style={styles.businessContainer}>
              {/* will add icons to these with <Image /> */}
              <Text>Orders</Text>
              <Text>Offers</Text>
              <Text>Chat</Text>
            </View>
            <View style={styles.settingsContainer}>
              <View style={styles.editProfile}>
                {/* or follow/following */}
                <Text>Edit Profile</Text>
              </View>
              <Text style={styles.settingsButton}>Settings</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = {
  closetContainer: {},
  headerContainer: {
    flexDirection: 'row',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#d6d7da'
  },
  imageContainer: {
    flex: 2
  },
  infoContainer: {
    flex: 3,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'stretch'
  },
  statsText: {
    flexDirection: 'column'
  },
  businessContainer: {
    flexDirection: 'row',
    paddingTop: 10
  },
  settingsContainer: {
    flexDirection: 'row',
    paddingTop: 10
  },
  editProfile: {
    paddingLeft: 10,
    paddingRight: 10,
    // flex: 3,
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#d6d7da'
  },
  settingsButton: {
    // flex: 1,
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#d6d7da'
  }
};

export { MyCloset };

// logging user out.
/*
import firebase from 'firebase';
<Button onPress={() => firebase.auth().signOut()}></Button>
*/
