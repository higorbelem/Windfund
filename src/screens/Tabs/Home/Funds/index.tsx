import React from 'react';
import {ScrollView, View} from 'react-native';

import Title from '#/components/Title';
import {FundDataType} from '#/@types/fund';

import FundItem from './FundItem';
import styles from './styles';

type FundsProps = {
  data: FundDataType[];
  onPress: (fund: FundDataType) => void;
};

const Funds = ({data, onPress}: FundsProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <Title style={styles.title}>Funds</Title>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}>
        {data.map((item, index) => (
          <FundItem
            key={item.id}
            id={item.id}
            title={item.title}
            balance={item.balance}
            latestPrices={item.latestPrices}
            percentageGrowth={item.percentageGrowth}
            type={item.type}
            isFirst={index === 0}
            onPress={() => onPress(item)}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default Funds;
