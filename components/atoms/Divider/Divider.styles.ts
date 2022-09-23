import {StyleSheet} from 'react-native';
import {Colors} from '../../../constants/colors';

export default StyleSheet.create({
  outerContainer: {
    borderWidth: 1,
    borderColor: Colors.grey,
    width: '100%',
    height: 1,
    borderRadius: 5,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerContainer: {
    borderWidth: 1,
    borderColor: Colors.grey,
    padding: 5,
    borderRadius: 5,
    position: 'absolute',
    backgroundColor: Colors.light,
  },
});
