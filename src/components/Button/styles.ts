import {StyleSheet} from 'react-native';

import colors from '#/static/colors';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 4,
  },
  text: {
    fontWeight: '500',
    fontSize: 16,
  },
  containerSolid: {
    backgroundColor: colors.primary,
  },
  textSolid: {
    color: colors.bg,
  },
  containerSolidSecondary: {
    backgroundColor: colors.green,
  },
  textSolidSecondary: {
    color: colors.bg,
  },
  containerOutlined: {
    borderColor: colors.text_tertiary,
    borderWidth: 2,
  },
  textOutlined: {
    color: colors.primary,
  },
});
