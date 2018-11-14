import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Feed from "./Feed";
import Detail from "./Detail";

export default createStackNavigator ({
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