import {StyleSheet} from 'react-native';

import colors from '#/static/colors';

export default StyleSheet.create({
  container: {
    width: 180,
    height: 180,
    alignItems: 'flex-start',
    padding: 15,
    borderWidth: 1,
    borderColor: colors.gray2,
    borderRadius: 4,
  },
  text: {
    marginTop: 8,
  },
  chart: {
    flex: 1,
    width: '70%',
  },
  valuesContainer: {
    flexDirection: 'row',
    width: '100%',
  },
  balance: {
    flex: 1,
  },
});
