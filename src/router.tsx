import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { screenNames } from '@utils/constants';
import { HomeScreen } from '@containers/home/index';
import { searchScreen } from '@containers/search';
import { LoginScreen } from '@containers/login';
import { MainBottomTabBar } from '@componets/tabBar/mainBottomTabBar';
import { CreatePassword } from '@containers/createPassword';

const TabNavigator = createBottomTabNavigator();
const StackNvigator = createStackNavigator();

export const Router = () => {
  const isLoggedIn = false;
  return !isLoggedIn ? <MainTabNavigator /> : <AuthStackNavigator />;
};

const MainTabNavigator = () => (
  <TabNavigator.Navigator tabBar={props => <MainBottomTabBar {...props} />}>
    <TabNavigator.Screen component={HomeScreen} name={screenNames.home} />
    <TabNavigator.Screen
      component={CreatePassword}
      name={screenNames.createPassword}
    />
    <TabNavigator.Screen component={searchScreen} name={screenNames.search} />
  </TabNavigator.Navigator>
);

const AuthStackNavigator = () => (
  <StackNvigator.Navigator
    initialRouteName={screenNames.login}
    headerMode={'none'}>
    <StackNvigator.Screen name={screenNames.login} component={LoginScreen} />
  </StackNvigator.Navigator>
);
