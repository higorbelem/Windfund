import {StyleSheet} from 'react-native';

import colors from '#/static/colors';

export default (isFirst: boolean) =>
  StyleSheet.create({
    container: {
      width: 230,
      height: 300,
      marginLeft: isFirst ? 0 : 20,
      borderRadius: 4,
      overflow: 'hidden',
    },
    image: {
      width: 230,
      height: 100,
    },
    textContainer: {
      flex: 1,
      borderWidth: 1,
      borderTopWidth: 0,
      borderColor: colors.gray2,
      borderBottomLeftRadius: 4,
      borderBottomRightRadius: 4,
      padding: 15,
    },
    description: {
      flex: 1,
      marginTop: 10,
    },
    button: {
      marginTop: 10,
    },
  });
