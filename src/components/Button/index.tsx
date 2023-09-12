/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StyleProp,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from 'react-native';

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
  solid_tertiary: {
    container: styles.containerSolidTertiary,
    text: styles.textSolidTertiary,
  },
  outlined: {
    container: styles.containerOutlined,
    text: styles.textOutlined,
  },
  underline: {
    container: styles.containerUnderline,
    text: styles.textUnderline,
  },
  link: {
    container: styles.containerLink,
    text: styles.textLink,
  },
};

type ButtonProps = {
  text: string;
  style?: StyleProp<ViewStyle>;
  variation?: keyof typeof ButtonVariations;
  onPress?: () => void;
  IconComponent?: JSX.Element;
};

const Button = ({
  text,
  style,
  variation = 'solid',
  onPress,
  IconComponent,
}: ButtonProps): JSX.Element => {
  const Touchable = (
    variation === 'link' || variation === 'underline'
      ? TouchableWithoutFeedback
      : TouchableOpacity
  ) as typeof TouchableOpacity;

  return (
    <Touchable
      style={[styles.container, ButtonVariations[variation].container, style]}
      onPress={onPress}
      activeOpacity={0.8}>
      <View
        style={[
          variation === 'link' || variation === 'underline'
            ? {marginTop: -2}
            : null,
          styles.textContainer,
        ]}>
        {IconComponent}

        <Text style={[styles.text, ButtonVariations[variation].text]}>
          {text}
        </Text>
      </View>
    </Touchable>
  );
};

export default Button;
