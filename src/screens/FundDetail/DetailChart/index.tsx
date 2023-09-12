import React from 'react';
import {LineChart} from 'react-native-svg-charts';
import {G, Text as SvgText} from 'react-native-svg';

import {FundBalance} from '#/@types/fund';
import colors from '#/static/colors';
import {currencyFormat} from '#/helpers/currency';

import styles from './styles';

const SIZE_PER_ITEM = 50;
const GAP_DATES = 5;

type DetailChartProps = {
  data: FundBalance[];
};

const Date = ({date, position}: {date: string; position: number}) => {
  return (
    <SvgText
      y={200}
      x={position}
      fill={colors.text}
      fontSize={12}
      fontFamily="Sora-Regular">
      {date}
    </SvgText>
  );
};

const Value = ({y, value, position}: any) => (
  <G x={position} y={y(value)}>
    <SvgText
      x={30}
      y={10}
      alignmentBaseline={'middle'}
      textAnchor={'middle'}
      fill={colors.text_secondary}
      fontSize={12}
      fontFamily="Sora-Regular">
      {currencyFormat(value)}
    </SvgText>
  </G>
);

const DetailChart = ({data}: DetailChartProps): JSX.Element => {
  const size = data.length * SIZE_PER_ITEM;

  return (
    <LineChart
      style={styles(size).chart}
      data={data.map(item => item.value)}
      contentInset={{top: 20, bottom: 20}}
      svg={{
        strokeWidth: 3,
        stroke: colors.green,
      }}>
      {/* {data
        .filter((_, index) => index % GAP_DATES === 0)
        .map((item, index) => (
          <Date
            key={`${index}`}
            date={item.date}
            position={50 * index * GAP_DATES}
          />
        ))} */}

      {data
        .filter((_, index) => index % GAP_DATES === 0)
        .map((item, index) => (
          <Value
            key={`${index}`}
            value={item.value}
            position={50 * index * GAP_DATES}
          />
        ))}
    </LineChart>
  );
};

export default DetailChart;
