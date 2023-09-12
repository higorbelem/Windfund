import React from 'react';
import {TextStyle} from 'react-native';

import Text from '#/components/Text';

type InputProps = {
  children: string;
  style?: TextStyle;
};

const Title = ({children, style}: InputProps): JSX.Element => {
  return (
    <Text size={18} weight={600} color="text" style={style}>
      {children}
    </Text>
  );
};

export default Title;
