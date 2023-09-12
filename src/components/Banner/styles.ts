import {StyleSheet} from 'react-native';

import colors from '#/static/colors';

export default StyleSheet.create({
  wrapper: {
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 30,
  },
  container: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 20,
  },
  textContainer: {
    flex: 1,
  },
  bottomText: {
    marginTop: 10,
  },
});
