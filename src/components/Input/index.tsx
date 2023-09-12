import React, {useState} from 'react';
import {
  StyleProp,
  TextInput,
  TextStyle,
  TouchableOpacity,
  View,
} from 'react-native';
import FeatherIcons from 'react-native-vector-icons/Feather';

import Text from '#/components/Text';
import colors from '#/static/colors';

import styles from './styles';

type InputProps = {
  label?: string;
  placeholder?: string;
  style?: StyleProp<TextStyle>;
  onChangeText?: (text: string) => void;
  password?: boolean;
};

const Input = ({
  label,
  style,
  onChangeText,
  password,
  placeholder,
}: InputProps): JSX.Element => {
  const [secureText, setSecureText] = useState(password);

  return (
    <View style={[styles.container, style]}>
      {!!label && (
        <Text
          style={styles.label}
          size={11}
          weight={500}
          color="text_secondary">
          {label}
        </Text>
      )}

      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={onChangeText}
          secureTextEntry={password && secureText}
          placeholder={placeholder}
          placeholderTextColor={colors.text_secondary}
          style={styles.input}
        />

        {password && (
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.iconButton}
            onPress={() => setSecureText(prev => !prev)}>
            <FeatherIcons
              name={password && secureText ? 'eye' : 'eye-off'}
              size={20}
              color={colors.text_secondary}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Input;
