import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';

import Filter from '#/components/Filter';
import {FundCategories, FundDataType} from '#/@types/fund';

import styles from './styles';
import BreakdownItem from './BreakdownItem';

type BreakdownProps = {
  data: FundDataType[];
  categories: FundCategories[];
};

const Breakdown = ({data, categories}: BreakdownProps): JSX.Element => {
  const [selectedCategory, setSelectedCategory] = useState<string>(
    categories[0],
  );

  return (
    <View style={styles.container}>
      <Filter
        initialItem={categories[0]}
        data={categories.map(item => ({
          id: item,
          label: item,
        }))}
        onChange={id => setSelectedCategory(id)}
      />

      <ScrollView
        horizontal
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsHorizontalScrollIndicator={false}>
        {data
          .filter(item => item.category === selectedCategory)
          .map((item, index) => (
            <BreakdownItem
              key={item.id}
              {...item}
              isFirst={index === 0}
              onPress={() => {}}
            />
          ))}
      </ScrollView>
    </View>
  );
};

export default Breakdown;
