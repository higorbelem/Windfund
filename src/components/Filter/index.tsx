import React, {useState} from 'react';
import {ScrollView} from 'react-native';

import styles from './styles';
import FilterItem from './FilterItem';

type FilterItemType = {
  id: string;
  label: string;
};

type FilterProps = {
  initialItem: string;
  data: FilterItemType[];
  onChange: (id: string) => void;
};

const Filter = ({initialItem, data, onChange}: FilterProps): JSX.Element => {
  const [selectedItem, setSelectedItem] = useState<string>(initialItem);

  const onItemPressed = (item: FilterItemType) => {
    setSelectedItem(item.id);
    onChange(item.id);
  };

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.scroll}
      contentContainerStyle={styles.scrollContent}>
      {data.map((item, index) => (
        <FilterItem
          key={item.id}
          label={item.label}
          selected={selectedItem === item.id}
          onPress={() => onItemPressed(item)}
          isFirst={index === 0}
        />
      ))}
    </ScrollView>
  );
};

export default Filter;
