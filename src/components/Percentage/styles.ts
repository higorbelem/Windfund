import {StyleSheet} from 'react-native';

import {getValueColor} from '#/helpers/color';

export default (value: number) =>
  StyleSheet.create({
    percentageContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: 5,
    },
    percentageIcon: {
      color: getValueColor(value),
    },
    percentageText: {
      color: getValueColor(value),
    },
    valueText: {
      color: getValueColor(value),
      marginLeft: 5,
    },
  });
