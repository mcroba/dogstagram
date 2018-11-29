import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Feed from "./Feed";
import Detail from "./Detail";

const AppNavigator = createStackNavigator ({
  Home: {
    screen: Feed,
    navigationOptions: {
      title: "Dogstagram"
    }
  },
  Detail: {
    screen: Detail,
    navigationOptions: {
      title: "Detail"
    }
  }
});

export default createAppContainer(AppNavigator);