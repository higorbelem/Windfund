import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Text from '#/components/Text';
import {currencyFormat} from '#/helpers/currency';
import colors from '#/static/colors';

import styles from './styles';

type HeaderProps = {
  balance: number;
};

const Header = ({balance}: HeaderProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.profileIconContainer} activeOpacity={0.8}>
        <AntDesign name="user" size={28} />
      </TouchableOpacity>

      <View style={styles.balanceContainer}>
        <TouchableOpacity style={styles.balanceButton} activeOpacity={0.8}>
          <Text>Account: {currencyFormat(balance)}</Text>
          <Entypo name="chevron-down" size={16} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity activeOpacity={0.8}>
        <MaterialCommunityIcons
          name="bell-outline"
          size={30}
          color={colors.text}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
