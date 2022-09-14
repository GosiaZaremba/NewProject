/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, StyleSheet} from 'react-native';
import {LoginTemplate} from './components/templates/LoginTemplate/LoginTemplate';
import {Colors} from './constants/colors';

const App = () => {
  return (
    <View style={styles.outerContainer}>
      <LoginTemplate></LoginTemplate>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: Colors.one,
  },
});
