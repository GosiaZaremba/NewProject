/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import { View, StyleSheet } from 'react-native';
import { Colors } from './constants/colors';
import { LoginScreen, RegisterScreen } from './components/screens';
import StorybookUIRoot from './storybook';

const App = () => {
    return (
        <View style={styles.outerContainer}>
            {/* <RegisterScreen /> */}
            <LoginScreen />
        </View>
    );
};

// export default App;

export default StorybookUIRoot;

const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
        backgroundColor: Colors.light,
    },
});
// import StorybookUIRoot from './.storybook/Storybook';
// export { StorybookUIRoot as default };
