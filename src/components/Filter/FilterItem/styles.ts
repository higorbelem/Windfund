import {StyleSheet} from 'react-native';

import colors from '#/static/colors';

export default (selected: boolean, isFirst: boolean) =>
  StyleSheet.create({
    container: {
      marginLeft: isFirst ? 0 : 20,
      borderBottomWidth: selected ? 3 : 0,
      borderBottomColor: colors.primary,
      paddingVertical: 7,
    },
    text: {},
  });
