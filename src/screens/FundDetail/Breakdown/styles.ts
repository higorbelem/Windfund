import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    marginTop: 10,
  },
  scroll: {
    width,
    flexGrow: 0,
    marginLeft: -20,
    marginTop: 20,
  },
  scrollContent: {
    paddingHorizontal: 20,
  },
});
