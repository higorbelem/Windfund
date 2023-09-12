import React, {useEffect, useRef} from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import {RouteProp} from '@react-navigation/native';

import Header from '#/components/Header';
import {FundDataType} from '#/@types/fund';
import {currencyFormat} from '#/helpers/currency';
import Text from '#/components/Text';
import Percentage from '#/components/Percentage';
import Title from '#/components/Title';

import styles from './styles';
import DetailChart from './DetailChart';
import StatItem from './StatItem';

type FundDetailProps = {
  route: RouteProp<{params: {data: FundDataType}}, 'params'>;
};

const FundDetail = ({route}: FundDetailProps): JSX.Element => {
  const data = route.params.data;

  const scrollViewRef = useRef<any>(null);

  useEffect(() => {
    scrollViewRef?.current.scrollToEnd({animated: false});
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Header title={data.title} subtitle={data.id} />

        <View style={styles.balanceContainer}>
          <View style={styles.balanceValuesContainer}>
            <Text size={24} weight={600}>
              {currencyFormat(18.23)}
            </Text>
            <Text size={24} weight={600}>
              2022
            </Text>
          </View>

          <Percentage value={3.51} />
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.chartScroll}
          ref={scrollViewRef}>
          <DetailChart data={data.latestBalances} />
        </ScrollView>

        <View style={styles.statsWrapper}>
          <Title>{'Info & Stats'}</Title>

          <View style={styles.statsContainer}>
            <View style={styles.statsContainerRow}>
              <StatItem title="AUM" value="$430.88m" />
              <StatItem title="Issue Date" value="18/04/2022" />
            </View>
            <View style={styles.statsContainerRow}>
              <StatItem title="Vintage Range" value="2019 – 2022" />
              <StatItem title="TER" value="0.15%" />
            </View>
            <View style={styles.statsContainerRow}>
              <StatItem title="Price at Close" value="$17.68" />
              <StatItem title="Price at Open" value="$17.74" />
            </View>
          </View>
        </View>

        <View style={styles.breakdownWrapper}>
          <Title>Fund Breakdown</Title>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FundDetail;
