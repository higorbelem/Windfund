import {StyleSheet} from 'react-native';

import colors from '#/static/colors';

export default (disabled?: boolean) =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 16,
      paddingHorizontal: 20,
      borderRadius: 4,
      opacity: disabled ? 0.5 : 1,
    },
    textContainer: {
      marginTop: -2,
      flexDirection: 'row',
      alignItems: 'center',
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
    containerSolidTertiary: {
      backgroundColor: colors.primary + '16',
      paddingVertical: 5,
      paddingHorizontal: 10,
    },
    textSolidTertiary: {
      color: colors.primary,
      fontSize: 12,
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
