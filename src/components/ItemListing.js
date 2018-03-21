import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Icon } from 'react-native-elements';

class ItemListing extends Component {
  static navigationOptions = {
    headerTitle: <ItemListing />,
    headerLeft: (
      <Icon
        name="share"
        onPress={() => console.log('Delete or share')}
        type="material-community"
        color="#d6d7da"
      />
    )
  };
  render() {
    return (
      <View>
        <View style={styles.headerContainer}>
          <View style={styles.imageContainer}>
            <Image
              source={require('../../assets/default-dp.png')}
              style={styles.profilePictureStyles}
            />
            <Text>Display Name (handle)</Text>
            <Text>Headline (bio)</Text>
          </View>
          <View>
            <Text>[name]</Text>
            <Text>updated [...]</Text>
          </View>
          <View style={styles.statsContainerStyles}>
            <View style={styles.statsStyles}>
              <Icon
                name="heart-o"
                type="font-awesome"
                color="grey"
                onPress={() => console.log('pressed like')}
              />
              <Text>#</Text>
            </View>
            <View style={styles.statsStyles}>
              <Icon
                name="comment-o"
                type="font-awesome"
                color="grey"
                onPress={() => console.log('pressed comment')}
              />
              <Text>#</Text>
            </View>
          </View>
        </View>
        <View style={styles.listingImageContainer}>
          <Image
            source={require('http://placekitten.com/200/300')}
            style={styles.listingImageStyles}
            resizeMethod="contain"
          />
        </View>
        <View style={styles.listingDetailsContainer}>
          <View>
            <Text>[listing name]</Text>
            <Text>[listing description]</Text>
            <Text>[sale price][value] | Size: [#]</Text>
          </View>
          <View>
            <View>
              <Text>[sale price][value]</Text>
            </View>
            <View>
              <TouchableOpacity>
                <Text>OFFERS : ADD TO BAG</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = {
  profilePictureStyles: {
    width: 50,
    height: 50
  },
  statsContainerStyles: {
    flexDirection: 'row'
  },
  listingImageStyles: {
    flex: 1,
    width: undefined,
    height: undefined
  }
};

export default ItemListing;
