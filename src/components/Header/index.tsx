import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

import colors from '#/static/colors';

import styles from './styles';
import Text from '../Text';

type HeaderProps = {
  title?: string;
  subtitle?: string;
};

const Header = ({title, subtitle}: HeaderProps): JSX.Element => {
  const navigation = useNavigation();

  const onPress = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      {navigation.canGoBack() && (
        <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
          <Ionicons name="arrow-back" color={colors.text} size={26} />
        </TouchableOpacity>
      )}

      <View style={styles.textContainer}>
        <Text size={17} weight={600}>
          {title}
        </Text>
        <Text size={14} weight={400} color="text_secondary">
          {subtitle}
        </Text>
      </View>
    </View>
  );
};

export default Header;
