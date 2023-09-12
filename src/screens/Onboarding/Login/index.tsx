import React, {useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import {NavigationProp, ParamListBase} from '@react-navigation/native';

import Button from '#/components/Button';
import Input from '#/components/Input';
import Text from '#/components/Text';
import screens from '#/static/screens';
import Title from '#/components/Title';
import Header from '#/components/Header';

import styles from './styles';

type FiledTypes = 'email' | 'password';

type FormType = {[key in FiledTypes]: string};

type LoginProps = {
  navigation: NavigationProp<ParamListBase>;
};

const Login = ({navigation}: LoginProps): JSX.Element => {
  const [form, setForm] = useState<FormType>({
    email: '',
    password: '',
  });

  const onTextChange = (field: FiledTypes) => (text: string) => {
    setForm(prev => ({...prev, [field]: text}));
  };

  const validateFields = () => {
    if (form.email && form.password && form.password.length >= 8) {
      return true;
    }
    return false;
  };

  const onLogin = () => {
    navigation.navigate(screens.tab);
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Header />

        <Title style={styles.title}>Login</Title>

        <Input
          label="E-mail"
          placeholder="E-mail"
          style={styles.input}
          onChangeText={onTextChange('email')}
        />
        <Input
          label="Password"
          placeholder="Minimum 8 characters"
          style={styles.input}
          password
          onChangeText={onTextChange('password')}
        />

        <Button
          text="Login"
          style={styles.button}
          onPress={onLogin}
          disabled={!validateFields()}
        />

        <View style={styles.bottomTextContainer}>
          <Text size={12} color="text_secondary">
            Don't have an account?{'  '}
          </Text>
          <Button
            text="Sign up here"
            variation="underline"
            onPress={() => navigation.navigate(screens.register)}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
