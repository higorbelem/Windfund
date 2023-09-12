/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
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
  [key in FundTypes]: {
    icon: JSX.Element;
    title: string;
  };
};

const fundTypeData: fundTypeIconType = {
  wind: {
    icon: <Feather name="wind" color={colors.blue} size={20} />,
    title: 'Wind Fund',
  },
  solar: {
    icon: <Feather name="sun" color={colors.yellow} size={20} />,
    title: 'Solar Fund',
  },
  nature: {
    icon: <Ionicons name="leaf-outline" color={colors.green} size={20} />,
    title: 'Nature Fund',
  },
};

type FundItemType = {
  isFirst: boolean;
};

const FundItem = ({
  balance,
  latestBalances,
  percentageGrowth,
  type,
  isFirst,
}: FundDataType & FundItemType): JSX.Element => {
  const fundType = fundTypeData[type];

  return (
    <View style={[styles.container, {marginLeft: isFirst ? 0 : 20}]}>
      {fundType.icon}

      <Text size={14} weight={600} style={styles.text}>
        {fundType.title}
      </Text>

      <LineChart
        style={styles.chart}
        data={latestBalances}
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

        <Percentage value={percentageGrowth} />
      </View>
    </View>
  );
};

export default FundItem;
