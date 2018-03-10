import React from 'react';
import { TabNavigator } from 'react-navigation';
import {
  ExploreScreen,
  InspirationScreen,
  SellScreen,
  BagScreen,
  MyCloset
} from '../components/tabs';

export const Tabs = TabNavigator({
  Explore: {
    screen: ExploreScreen,
  },
  Inspiration: {
    screen: InspirationScreen
  },
  Sell: {
    screen: SellScreen
  },
  Bag: {
    screen: BagScreen
  },
  MyCloset: {
    screen: MyCloset
  }
});
