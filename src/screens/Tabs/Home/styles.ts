import {StyleSheet} from 'react-native';

import colors from '#/static/colors';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  separator: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: colors.gray,
    marginVertical: 20,
  },
});
