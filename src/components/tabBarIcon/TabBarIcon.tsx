import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import { TabBarIconProps } from '@utils/types';
import { colors } from '@utils/colors';
import { screenProps } from '@utils/constants';

export const MainTabBarIcon: React.FC<TabBarIconProps> = props => {
  const name: string = screenProps.tabBarIconName[props.name];
  return (
    <Icon
      name={name}
      color={props.isFocused ? colors.green : colors.vintage}
      size={20}
    />
  );
};
