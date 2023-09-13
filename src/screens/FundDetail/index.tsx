import React, {useEffect, useRef} from 'react';
import {ScrollView, View} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import Header from '#/components/Header';
import {FundDataType} from '#/@types/fund';
import {currencyFormat} from '#/helpers/currency';
import Text from '#/components/Text';
import Percentage from '#/components/Percentage';
import Title from '#/components/Title';
import {categoriesMockedData, fundMockedData} from '#/static/mocks';

import styles from './styles';
import DetailChart from './DetailChart';
import StatItem from './StatItem';
import Breakdown from './Breakdown';
import YourPortfolio from './YourPortfolio';
import PriceFilter from './PriceFilter';

type FundDetailProps = {
  route: RouteProp<{params: {data: FundDataType}}, 'params'>;
};

const FundDetail = ({route}: FundDetailProps): JSX.Element => {
  const data = route.params.data;
  const insets = useSafeAreaInsets();

  const scrollViewRef = useRef<any>(null);

  useEffect(() => {
    scrollViewRef?.current.scrollToEnd({animated: false});
  }, []);

  const style = styles(insets.top, insets.bottom);

  return (
    <ScrollView
      style={style.scroll}
      contentContainerStyle={style.scrollContent}
      showsVerticalScrollIndicator={false}>
      <Header title={data.title} subtitle={data.id} />

      <View style={style.balanceContainer}>
        <View style={style.balanceValuesContainer}>
          <Text size={24} weight={600}>
            {currencyFormat(data.balance)}
          </Text>
          <Text size={24} weight={600}>
            2022
          </Text>
        </View>

        <Percentage
          percentage={data.percentageGrowth}
          value={data.valueGrowth}
        />
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={style.chartScroll}
        ref={scrollViewRef}>
        <DetailChart data={data.latestPrices} />
      </ScrollView>

      <PriceFilter />

      <View style={style.statsWrapper}>
        <Title>{'Info & Stats'}</Title>

        <View style={style.statsContainer}>
          <View style={style.statsContainerRow}>
            <StatItem title="AUM" value={data.stats.aum} />
            <StatItem title="Issue Date" value={data.stats.issueDate} />
          </View>
          <View style={style.statsContainerRow}>
            <StatItem title="Vintage Range" value={data.stats.vintageRange} />
            <StatItem title="TER" value={data.stats.ter} />
          </View>
          <View style={style.statsContainerRow}>
            <StatItem title="Price at Close" value={data.stats.priceAtClose} />
            <StatItem title="Price at Open" value={data.stats.priceAtOpen} />
          </View>
        </View>
      </View>

      <View style={style.breakdownWrapper}>
        <Title>Fund Breakdown</Title>

        <Breakdown
          data={fundMockedData.filter(item => item.id !== data.id)}
          categories={categoriesMockedData}
        />
      </View>

      <YourPortfolio data={data} />
    </ScrollView>
  );
};

export default FundDetail;
