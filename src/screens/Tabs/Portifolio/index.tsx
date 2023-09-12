import React from 'react';
import {SafeAreaView, View} from 'react-native';

import Text from '#/components/Text';

import styles from './styles';

const Portifolio = (): JSX.Element => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Portifolio</Text>
      </View>
    </SafeAreaView>
  );
};

export default Portifolio;
