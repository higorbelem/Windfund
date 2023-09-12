import {StyleSheet} from 'react-native';

import colors from '#/static/colors';
import fonts from '#/static/fonts';

type TextStyleProps = {
  size: number;
  lineHeight?: number;
  weight: keyof typeof fonts.sora;
  color: keyof typeof colors;
};

export default (props: TextStyleProps) =>
  StyleSheet.create({
    text: {
      color: colors[props.color],
      fontFamily: fonts.sora[props.weight],
      fontSize: props.size,
      lineHeight: props.lineHeight,
    },
  });
