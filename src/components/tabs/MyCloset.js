import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

class MyCloset extends Component {
  render() {
    return (
      <View style={styles.closetContainer}>
        <View style={styles.headerContainer}>
          <View style={styles.imageContainer}>
            <Image
              source={require('../../assets/default-dp.png')}
              style={styles.profilePictureStyles}
            />
            <Text>Display Name (handle)</Text>
            <Text>Headline (bio)</Text>
          </View>
          <View style={styles.infoContainer}>
            <View style={styles.statsContainer}>
              <View style={styles.statsText}>
                <Text>#</Text>
                <Text style={{ fontSize: 13 }}>posts</Text>
              </View>
              <View style={styles.statsText}>
                <Text>#</Text>
                <Text style={{ fontSize: 13 }}>followers</Text>
              </View>
              <View style={styles.statsText}>
                <Text>#</Text>
                <Text style={{ fontSize: 13 }}>following</Text>
              </View>
            </View>
            <View style={styles.businessContainer}>
              {/* will add icons to these with <Image /> */}
              <TouchableOpacity>
                <Icon name="receipt" type="material-community" color="tomato" />
                <Text>Orders</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Icon
                  name="tags"
                  type="font-awesome"
                  color="tomato"
                  size={26}
                />
                <Text>Offers</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Icon name="chat" type="entypo" color="tomato" />
                <Text>Chat</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.settingsContainer}>
              {/* or follow/following */}
              <TouchableOpacity
                style={styles.editProfile}
                onPress={() => this.props.navigation.navigate('EditProfile')}
              >
                <Text style={styles.editButton}>Edit Profile</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.settingsButton}
                onPress={() => this.props.navigation.navigate('Settings')}
              >
                <Icon name="settings" type="feather" size={26} color="tomato" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Text>Closet STUFF</Text>
      </View>
    );
  }
}

const styles = {
  closetContainer: {},
  headerContainer: {
    flexDirection: 'row',
    paddingTop: 40,
    paddingBottom: 20,
    paddingLeft: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#d6d7da',
    backgroundColor: '#f1f2ee'
  },
  imageContainer: {
    flex: 2
  },
  profilePictureStyles: {
    borderRadius: 50,
    width: 100,
    height: 100
  },
  infoContainer: {
    flex: 3,
    paddingLeft: 20,
    paddingRight: 20
  },
  statsContainer: {
    flexDirection: 'row'
  },
  statsText: {
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center'
  },
  businessContainer: {
    flexDirection: 'row',
    paddingTop: 10,
    justifyContent: 'space-around'
  },
  settingsContainer: {
    flexDirection: 'row',
    paddingTop: 10
  },
  editProfile: {
    paddingLeft: 5,
    paddingRight: 5,
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'space-around',
    borderWidth: 1,
    borderColor: 'tomato',
    borderRadius: 5
  },
  editButton: {
    textAlign: 'center',
    paddingTop: 5,
    paddingBottom: 5
  },
  settingsButton: {
    alignSelf: 'center',
    paddingLeft: 5
  }
};

export { MyCloset };
