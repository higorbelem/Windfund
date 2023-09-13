import React from 'react';
import {View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import Text from '#/components/Text';
import colors from '#/static/colors';
import Title from '#/components/Title';
import {currencyFormat} from '#/helpers/currency';
import Percentage from '#/components/Percentage';
import Button from '#/components/Button';
import {FundDataType} from '#/@types/fund';

import styles from './styles';

type YourPortfolioProps = {
  data: FundDataType;
};

const YourPortfolio = ({data}: YourPortfolioProps): JSX.Element => {
  const getDays = () => {
    const a = new Date(Date.parse(data.creditLastPurchace));
    const b = new Date(Date.now());

    const _MS_PER_DAY = 1000 * 60 * 60 * 24;
    const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

    return Math.floor((utc2 - utc1) / _MS_PER_DAY);
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Feather name="pie-chart" color={colors.text} size={22} />

        <Title style={styles.title}>Your Portifolio</Title>
      </View>

      <View style={styles.valuesContainer}>
        <View style={styles.valuesTopContainer}>
          <Text size={24} weight={600}>
            {data.credits} credits
          </Text>
          <Text size={24} weight={600}>
            {currencyFormat(data.creditValue)}
          </Text>
        </View>
        <View style={styles.valuesBottomContainer}>
          <Percentage percentage={data.creditPercentageGrowth} />
          <Text size={14} color="text_secondary">
            {`Last purchase ${getDays()}d ago`}
          </Text>
        </View>
      </View>

      <View style={styles.buttonsContainer}>
        <Button text="Sell" variation="outlined" style={styles.buttonSell} />
        <Button
          text="Retire credits"
          variation="solid_secondary"
          style={styles.buttonCredit}
        />
      </View>

      <Text size={11} color="text_secondary" style={styles.warnText}>
        {`You’ve previously retired ${data.creditsRetired} credits of this asset`}
      </Text>

      <View style={styles.bottomTextContainer}>
        <Text size={14} color="text_secondary">
          {
            'Please note that prices are for reference only and may vary at the time of excecuting a buy or sell order.\n\nThe information provided is not investment advice, and should not be used as a recommendation to buy or sell assets.'
          }
        </Text>
      </View>

      <Button text="Buy" style={styles.buyButton} />
    </View>
  );
};

export default YourPortfolio;
