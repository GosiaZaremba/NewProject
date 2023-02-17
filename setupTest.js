import '@testing-library/jest-native/extend-expect';
import 'react-native-gesture-handler/jestSetup';
import '@testing-library/jest-dom/extend-expect';

jest.mock('react-native-reanimated', () => {
    const Reanimated = require('react-native-reanimated/mock');

    Reanimated.default.call = () => {};

    return Reanimated;
});

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
