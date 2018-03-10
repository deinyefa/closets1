import React from 'react';
// import { Icon } from 'react-native-elements';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import {
  ExploreScreen,
  InspirationScreen,
  SellScreen,
  BagScreen,
  MyCloset
} from '../components/tabs';

export const Tabs = TabNavigator(
  {
    Explore: { screen: ExploreScreen },
    Inspiration: { screen: InspirationScreen },
    Sell: { screen: SellScreen },
    Bag: { screen: BagScreen },
    MyCloset: { screen: MyCloset }
  },
  // {
  //   navigationOptions: ({ navigation }) => ({
  //     tabBarIcon: ({ tintColor }) => {
  //       const { routeName } = navigation.state;
  //       let iconName;
  //       switch (routeName) {
  //         case 'Explore':
  //           iconName = 'md-home';
  //           break;
  //         case 'Inspiration':
  //           iconName = 'ios-search-outline';
  //           break;
  //         case 'Sell':
  //           iconName = 'ios-add-outline';
  //           break;
  //         case 'Bag':
  //           iconName = 'bag';
  //           break;
  //         case 'MyCloset':
  //           iconName = 'user';
  //           break;
  //       }
  //       return <Icon name={iconName} size={25} color={tintColor} />;
  //     }
  //   }),
  //   tabBarComponent: TabBarBottom,
  //   tabBarPosition: 'bottom',
  //   tabBarOptions: {
  //     activeTintColor: 'tomato',
  //     inactiveTintColor: 'gray'
  //   },
  //   animationEnabled: false,
  //   swipeEnabled: false
  // }
);
