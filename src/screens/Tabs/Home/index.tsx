import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {NavigationProp, ParamListBase} from '@react-navigation/native';

import {fundMockedData} from '#/static/mocks';
import Banner from '#/components/Banner';
import {FundDataType} from '#/@types/fund';
import screens from '#/static/screens';

import Portifolio from './Portifolio';
import Header from './Header';
import styles from './styles';
import Funds from './Funds';

type HomeProps = {
  navigation: NavigationProp<ParamListBase>;
};

const Home = ({navigation}: HomeProps): JSX.Element => {
  const onFundPress = (fund: FundDataType) => {
    navigation.navigate(screens.fundDetail, {data: fund});
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Header balance={1457.23} />

        <Portifolio balance={1245.23} percentageGrowth={31.82} />

        <View style={styles.separator} />

        <Funds data={fundMockedData} onPress={onFundPress} />

        <Banner />
      </View>
    </SafeAreaView>
  );
};

export default Home;
