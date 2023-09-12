import React from 'react';
import {SafeAreaView, View} from 'react-native';

import Text from '#/components/Text';

import styles from './styles';

const Trade = (): JSX.Element => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Trade</Text>
      </View>
    </SafeAreaView>
  );
};

export default Trade;
