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
  textContainer: {
    marginTop: -2,
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
  containerLink: {
    paddingVertical: 0,
    paddingHorizontal: 0,
  },
  textLink: {
    color: colors.text,
    fontSize: 12,
  },
  containerUnderline: {
    paddingVertical: 0,
    paddingHorizontal: 0,
  },
  textUnderline: {
    color: colors.text,
    textDecorationLine: 'underline',
    fontSize: 12,
  },
});
