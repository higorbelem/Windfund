import {Dimensions, StyleSheet} from 'react-native';

import colors from '#/static/colors';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  back: {
    width,
    height,
    backgroundColor: '#0000003A',
  },
  modal: {
    position: 'absolute',
    backgroundColor: colors.bg,
    width: '80%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  text: {
    marginTop: 10,
  },
});
