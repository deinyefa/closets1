import React from 'react';
import { Icon } from 'react-native-elements';
import { TabNavigator, TabBarBottom, StackNavigator } from 'react-navigation';
import {
  ExploreScreen,
  InspirationScreen,
  SellScreen,
  BagScreen,
  MyCloset
} from '../components/tabs';
import {
  Settings,
  ChangeCurrency,
  ChangePassword,
  Feedback,
  PrivacyTerms,
  ReturnPolicy,
  ShippingInfo,
  About,
  EditProfile
} from '../components/subscreens';

export const Tabs = TabNavigator(
  {
    Explore: { screen: ExploreScreen },
    Inspiration: { screen: InspirationScreen },
    Sell: { screen: SellScreen },
    Bag: { screen: BagScreen },
    MyCloset: { screen: MyCloset }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        let type;
        switch (routeName) {
          case 'Explore':
            iconName = 'home';
            type = 'feather';
            break;
          case 'Inspiration':
            iconName = 'search';
            type = 'feather';
            break;
          case 'Sell':
            iconName = 'plus';
            type = 'font-awesome';
            break;
          case 'Bag':
            iconName = 'bag';
            type = 'simple-line-icon';
            break;
          case 'MyCloset':
            iconName = 'user';
            type = 'feather';
            break;
        }
        return <Icon name={iconName} size={20} color={tintColor} type={type} />;
      }
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray'
    },
    animationEnabled: false,
    swipeEnabled: false
  }
);

export const SettingsStack = StackNavigator({
  Settings: {
    screen: Settings,
    navigationOptions: ({ navigation }) => ({
      title: 'Settings'
    })
  },
  ChangeCurrency: {
    screen: ChangeCurrency,
    navigationOptions: ({ navigation }) => ({
      title: 'Change Currency'
    })
  },
  ChangePassword: {
    screen: ChangePassword,
    navigationOptions: ({ navigation }) => ({
      title: 'Change Password'
    })
  },
  About: {
    screen: About,
    navigationOptions: ({ navigation }) => ({
      title: 'About'
    })
  },
  Feedback: {
    screen: Feedback,
    navigationOptions: ({ navigation }) => ({
      title: 'Feedback'
    })
  },
  PrivacyTerms: {
    screen: PrivacyTerms,
    navigationOptions: ({ navigation }) => ({
      title: 'Terms and Privacy'
    })
  },
  ReturnPolicy: {
    screen: ReturnPolicy,
    navigationOptions: ({ navigation }) => ({
      title: 'Return Policy'
    })
  },
  ShippingInfo: {
    screen: ShippingInfo,
    navigationOptions: ({ navigation }) => ({
      title: 'Shipping Info'
    })
  }
});

export const EditProfileStack = StackNavigator({
  EditProfile: {
    screen: EditProfile,
    navigationOptions: ({ navigation }) => ({
      title: 'Edit Profile'
    })
  }
});

export const Root = StackNavigator(
  {
    Tabs: { screen: Tabs },
    Settings: { screen: SettingsStack },
    EditProfile: { screen: EditProfileStack }
  },
  {
    mode: 'modal',
    headerMode: 'none'
  }
);
