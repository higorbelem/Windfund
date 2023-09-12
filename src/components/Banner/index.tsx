import React from 'react';
import {TouchableOpacity, View} from 'react-native';

import CarbonCreditsSvg from '#/assets/svgs/carbon-credits.svg';

import Text from '../Text';
import styles from './styles';

const Banner = (): JSX.Element => {
  return (
    <TouchableOpacity style={styles.wrapper} activeOpacity={0.8}>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text size={18} weight={600} color="bg">
            Learn more about carbon credits
          </Text>
          <Text size={14} weight={400} color="bg" style={styles.bottomText}>
            Check out our top tips!
          </Text>
        </View>

        <CarbonCreditsSvg width={100} />
      </View>
    </TouchableOpacity>
  );
};

export default Banner;
