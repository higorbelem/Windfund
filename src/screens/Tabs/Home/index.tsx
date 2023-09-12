import React from 'react';
import {SafeAreaView, View} from 'react-native';

import {fundMockedData} from '#/static/mocks';
import Banner from '#/components/Banner';

import Portifolio from './Portifolio';
import Header from './Header';
import styles from './styles';
import Funds from './Funds';

const Home = (): JSX.Element => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Header balance={1457.23} />

        <Portifolio balance={1245.23} percentageGrowth={31.82} />

        <View style={styles.separator} />

        <Funds data={fundMockedData} />

        <Banner />
      </View>
    </SafeAreaView>
  );
};

export default Home;
