import {StyleSheet} from 'react-native';

import colors from '#/static/colors';
import fonts from '#/static/fonts';

export default StyleSheet.create({
  container: {},
  label: {marginBottom: 5},
  inputContainer: {
    backgroundColor: colors.gray,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    color: colors.text,
    fontFamily: fonts.sora['400'],
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  iconButton: {
    padding: 14,
  },
});
