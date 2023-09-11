import React from 'react';
import {SafeAreaView, View} from 'react-native';

import Button from '#/components/Button';

import styles from './styles';

const Login = (): JSX.Element => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Button text="Login" />
      </View>
    </SafeAreaView>
  );
};

export default Login;
