import React from 'react';
import {View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';
import Text from '../Text';

type TextProps = {
  value: number;
};

const Percentage = ({value}: TextProps): JSX.Element => {
  const style = styles(value);
  return (
    <View style={style.percentageContainer}>
      <MaterialCommunityIcons
        name={value >= 0 ? 'arrow-top-right' : 'arrow-bottom-right'}
        style={style.percentageIcon}
      />
      <Text style={style.percentageText}>{Math.abs(value)}%</Text>
    </View>
  );
};

export default Percentage;
