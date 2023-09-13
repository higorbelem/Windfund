import React from 'react';
import {Image, View} from 'react-native';

import {FundDataType} from '#/@types/fund';
import Text from '#/components/Text';
import Button from '#/components/Button';

import styles from './styles';

type BreakdownItemProps = {
  isFirst: boolean;
  onPress: () => void;
};

const BreakdownItem = ({
  title,
  description,
  cover,
  isFirst,
}: FundDataType & BreakdownItemProps): JSX.Element => {
  const style = styles(isFirst);

  return (
    <View style={style.container}>
      <Image source={cover} resizeMode="cover" style={style.image} />

      <View style={style.textContainer}>
        <Text>{title}</Text>
        <Text size={14} weight={400} style={style.description}>
          {description}
        </Text>

        <View style={style.button}>
          <Button text="Read more" variation="underline" />
        </View>
      </View>
    </View>
  );
};

export default BreakdownItem;
