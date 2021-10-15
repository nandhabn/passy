import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import { TextInput } from 'react-native-gesture-handler';
import { screenNames } from '@utils/constants';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { MainTabBarIcon } from '@componets/tabBarIcon/TabBarIcon';
import { colors } from '@utils/colors';

export const MainBottomTabBar: React.FC<BottomTabBarProps> = props => {
  const { state, descriptors, navigation } = props;
  const [isSearchVisible, openCloseSearch] = useState(false);
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  useEffect(() => {
    const historyLen = state.history.length;
    if (!state.history[historyLen - 1].key.startsWith(screenNames.search)) {
      openCloseSearch(false);
    }
  }, [state.history]);

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  const closeSearch = () => {
    openCloseSearch(false);
    navigation.goBack();
  };

  // TODO - Add ANIMATION to the search bar
  return (
    <View style={styles.container}>
      {!isSearchVisible &&
        state.routes.map((route, index) => {
          const { options } = descriptors[route.key];

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
            if (route.name === screenNames.search) {
              openCloseSearch(true);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };
          return (
            <TouchableOpacity
              key={route.key}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.buttonContainer}>
              <MainTabBarIcon name={route.name} isFocused={isFocused} />
            </TouchableOpacity>
          );
        })}
      {isSearchVisible && (
        <View style={styles.searchBar}>
          <TextInput
            style={styles.searchInput}
            placeholder={'Search password'}
          />
          <TouchableOpacity style={styles.closeButton} onPress={closeSearch}>
            <AntIcon name="close" color={colors.beige} size={20} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  searchInput: { flex: 2, paddingLeft: 20 },
  searchBar: { flex: 1, flexDirection: 'row' },
  container: {
    flexDirection: 'row',
    backgroundColor: colors.wedding,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    paddingHorizontal: 20,
  },
  closeButton: {
    flex: 1,
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'monospace',
    backgroundColor: colors.wedding,
  },
  buttonContainer: {
    flex: 1,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: '900',
  },
});
