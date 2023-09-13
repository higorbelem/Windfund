import {StyleSheet} from 'react-native';

import colors from '#/static/colors';

export default (selected?: boolean) =>
  StyleSheet.create({
    pricesFilterContainer: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    pricesFilterItem: {
      width: 35,
      height: 35,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: selected ? colors.primary + '16' : 'transparent',
      borderRadius: 4,
    },
  });
