/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import {LineChart} from 'react-native-svg-charts';
import * as shape from 'd3-shape';

import {FundDataType, FundTypes} from '#/@types/fund';
import colors from '#/static/colors';
import Text from '#/components/Text';
import {currencyFormat} from '#/helpers/currency';
import Percentage from '#/components/Percentage';
import {getValueColor} from '#/helpers/color';

import styles from './styles';

type fundTypeIconType = {
  [key in FundTypes]: JSX.Element;
};

const fundTypeData: fundTypeIconType = {
  wind: <Feather name="wind" color={colors.blue} size={20} />,
  solar: <Feather name="sun" color={colors.yellow} size={20} />,
  nature: <Ionicons name="leaf-outline" color={colors.green} size={20} />,
  tech: <Octicons name="gear" color={colors.blue} size={20} />,
};

type FundItemType = {
  isFirst: boolean;
  onPress?: () => void;
};

const FundItem = ({
  title,
  balance,
  latestPrices,
  percentageGrowth,
  type,
  isFirst,
  onPress,
}: FundDataType & FundItemType): JSX.Element => {
  const fundType = fundTypeData[type];

  return (
    <TouchableOpacity
      style={[styles.container, {marginLeft: isFirst ? 0 : 20}]}
      onPress={onPress}
      activeOpacity={0.8}>
      {fundType}

      <Text size={14} weight={600} style={styles.text}>
        {title}
      </Text>

      <LineChart
        style={styles.chart}
        data={latestPrices.slice(-10).map(item => item.value)}
        contentInset={{top: 20, bottom: 20}}
        curve={shape.curveNatural}
        svg={{
          strokeWidth: 3,
          stroke: getValueColor(percentageGrowth),
        }}
      />

      <View style={styles.valuesContainer}>
        <Text size={16} style={styles.balance}>
          {currencyFormat(balance)}
        </Text>

        <Percentage percentage={percentageGrowth} />
      </View>
    </TouchableOpacity>
  );
};

export default FundItem;
