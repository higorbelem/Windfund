import React from 'react';
import {View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {currencyFormat} from '#/helpers/currency';

import styles from './styles';
import Text from '../Text';

type TextProps = {
  percentage: number;
  value?: number;
};

const Percentage = ({percentage, value}: TextProps): JSX.Element => {
  const style = styles(percentage);
  return (
    <View style={style.percentageContainer}>
      <MaterialCommunityIcons
        name={percentage >= 0 ? 'arrow-top-right' : 'arrow-bottom-right'}
        style={style.percentageIcon}
      />
      <Text style={style.percentageText}>{Math.abs(percentage)}%</Text>

      {!!value && (
        <Text style={style.valueText}>{`(${currencyFormat(value)})`}</Text>
      )}
    </View>
  );
};

export default Percentage;
