/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import Text from '#/components/Text';
import {currencyFormat} from '#/helpers/currency';
import Button from '#/components/Button';
import colors from '#/static/colors';
import Percentage from '#/components/Percentage';

import styles from './styles';

type PortifolioProps = {
  balance: number;
  percentageGrowth: number;
};

const Portifolio = ({
  balance,
  percentageGrowth,
}: PortifolioProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text size={12} style={styles.title}>
        Portifolio
      </Text>

      <View style={styles.bottomContainer}>
        <View style={styles.valuesContainer}>
          <Text size={24} weight={600}>
            {currencyFormat(balance)}
          </Text>

          <Percentage percentage={percentageGrowth} />
        </View>

        <Button
          text="Earn Rewards"
          variation="solid_tertiary"
          IconComponent={
            <FontAwesome5
              name="coins"
              color={colors.primary}
              size={14}
              style={{marginRight: 5}}
            />
          }
        />
      </View>
    </View>
  );
};

export default Portifolio;
