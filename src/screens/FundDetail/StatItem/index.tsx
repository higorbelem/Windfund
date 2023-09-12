import React from 'react';
import {View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Text from '#/components/Text';
import colors from '#/static/colors';

import styles from './styles';

type StatItemProps = {
  title: string;
  value: string;
};

const StatItem = ({title, value}: StatItemProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text size={14} color="text_secondary">
          {title}
        </Text>
        <MaterialIcons
          name="info-outline"
          color={colors.text_secondary}
          size={14}
          style={styles.icon}
        />
      </View>
      <Text size={14} style={styles.text}>
        {value}
      </Text>
    </View>
  );
};

export default StatItem;
