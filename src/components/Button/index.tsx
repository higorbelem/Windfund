import React from 'react';
import {TouchableOpacity} from 'react-native';

import Text from '../Text';
import styles from './styles';

const ButtonVariations = {
  solid: {
    container: styles.containerSolid,
    text: styles.textSolid,
  },
  solid_secondary: {
    container: styles.containerSolidSecondary,
    text: styles.textSolidSecondary,
  },
  outlined: {
    container: styles.containerOutlined,
    text: styles.textOutlined,
  },
};

type ButtonProps = {
  text: string;
  variation?: keyof typeof ButtonVariations;
  onPress?: () => void;
};

const Button = ({
  text,
  variation = 'solid',
  onPress,
}: ButtonProps): JSX.Element => {
  return (
    <TouchableOpacity
      style={[styles.container, ButtonVariations[variation].container]}
      onPress={onPress}
      activeOpacity={0.8}>
      <Text style={[styles.text, ButtonVariations[variation].text]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
