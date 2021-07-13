import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Login} from '@containers/login';

const TabNavigator = createBottomTabNavigator();
export const Router = () => (
  <TabNavigator.Navigator>
    <TabNavigator.Screen />
  </TabNavigator.Navigator>
);
