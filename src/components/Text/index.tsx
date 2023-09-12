import React from 'react';
import {StyleProp, Text as T, TextStyle} from 'react-native';

import fonts from '#/static/fonts';
import colors from '#/static/colors';

import styles from './styles';

type TextProps = {
  children: any;
  size?: number;
  lineHeight?: number;
  weight?: keyof typeof fonts.sora;
  color?: keyof typeof colors;
  style?: StyleProp<TextStyle>;
};

const Text = ({
  children,
  size = 16,
  weight = 400,
  color = 'text',
  lineHeight,
  style,
}: TextProps): JSX.Element => {
  return (
    <T style={[styles({weight, size, color, lineHeight}).text, style]}>
      {children}
    </T>
  );
};

export default Text;
