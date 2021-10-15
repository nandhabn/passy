import { BaseViewProps } from '@utils/types';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { StyleSheet, useColorScheme, View } from 'react-native';

const useTheme = () => {
  const [styles, setStyles] = useState<any>({});
  const isDarkTheme = useColorScheme() !== 'dark';
  const darkTheme = StyleSheet.create({
    baseView: {
      backgroundColor: 'black',
      color: 'white',
      flex: 1,
      paddingBottom: 55,
    },
  });
  const lightTheme = StyleSheet.create({
    baseView: {
      backgroundColor: 'white',
      flex: 1,
      paddingBottom: 55,
      borderWidth: StyleSheet.hairlineWidth,
    },
  });

  useEffect(
    () => setStyles(isDarkTheme ? darkTheme : lightTheme),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isDarkTheme],
  );
  return styles;
};
export const BaseView: React.FC<BaseViewProps> = props => {
  const styles = useTheme();
  return <View style={styles.baseView}>{props.children}</View>;
};
