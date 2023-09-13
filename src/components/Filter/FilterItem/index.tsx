import React from 'react';
import {TouchableOpacity} from 'react-native';

import Text from '#/components/Text';

import styles from './styles';

type FilterItemProps = {
  label: string;
  selected: boolean;
  onPress: () => void;
  isFirst: boolean;
};

const FilterItem = ({
  label,
  selected,
  onPress,
  isFirst,
}: FilterItemProps): JSX.Element => {
  const style = styles(selected, isFirst);

  return (
    <TouchableOpacity
      style={style.container}
      onPress={onPress}
      activeOpacity={0.8}>
      <Text
        size={14}
        weight={600}
        color={selected ? 'text' : 'text_secondary'}
        style={style.text}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default FilterItem;
