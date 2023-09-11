import React from 'react';
import {StyleProp, Text as T, TextStyle} from 'react-native';

import styles from './styles';

type TextProps = {
  children: string;
  style?: StyleProp<TextStyle>;
};

const Text = ({children, style}: TextProps): JSX.Element => {
  return <T style={[styles.text, style]}>{children}</T>;
};

export default Text;
