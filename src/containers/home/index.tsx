/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, Text, useColorScheme } from 'react-native';
import { BaseView } from '@componets/baseView/BaseView';
import { colors } from '@utils/colors';

export const HomeScreen = () => {
  const isDarkTheme = useColorScheme();

  return (
    <BaseView>
      <Text style={{ color: colors.wedding }}>Hello</Text>
    </BaseView>
  );
};

const styles = StyleSheet.create({});
