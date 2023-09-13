import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';

import Text from '#/components/Text';

import styles from './styles';

type YourPortfolioProps = {};

const PriceFilter = ({}: YourPortfolioProps): JSX.Element => {
  const data = ['1h', '1d', '1w', '1m', '1y', 'All'];

  const [selected, setSelected] = useState(data[0]);

  const onPress = (item: string) => {
    setSelected(item);
  };

  return (
    <View style={styles().pricesFilterContainer}>
      {data.map(item => (
        <TouchableOpacity
          key={item}
          style={styles(selected === item).pricesFilterItem}
          onPress={() => onPress(item)}
          activeOpacity={0.8}>
          <Text
            size={15}
            weight={500}
            color={selected === item ? 'primary' : 'text_secondary'}>
            {item}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default PriceFilter;
