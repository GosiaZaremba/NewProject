/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, StyleSheet} from 'react-native';

import {Colors} from './constants/colors';
import {LoginScreen} from './screens/LoginScreen';

const App = () => {
  return (
    <View style={styles.outerContainer}>
      <LoginScreen />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: Colors.one,
  },
});
