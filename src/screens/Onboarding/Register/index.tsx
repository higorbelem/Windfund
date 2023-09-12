import React, {useState} from 'react';
import {SafeAreaView, TouchableOpacity, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {NavigationProp, ParamListBase} from '@react-navigation/native';

import Button from '#/components/Button';
import Input from '#/components/Input';
import Text from '#/components/Text';
import colors from '#/static/colors';

import styles from './styles';
import screens from '#/static/screens';
import Title from '#/components/Title';
import Header from '#/components/Header';

type RegisterProps = {
  navigation: NavigationProp<ParamListBase>;
};

const Register = ({navigation}: RegisterProps): JSX.Element => {
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Header />

        <Title style={styles.title}>Create your account</Title>

        <Input
          label="First Name"
          placeholder="First Name"
          style={styles.input}
        />
        <Input label="Last Name" placeholder="Last Name" style={styles.input} />
        <Input label="Email" placeholder="Email" style={styles.input} />
        <Input
          label="Password"
          placeholder="Minimum 8 characters"
          style={styles.input}
          password
        />

        <View style={styles.checkboxContainer}>
          <TouchableOpacity style={styles.checkboxButton} activeOpacity={0.8}>
            <MaterialCommunityIcons
              name={agreeToTerms ? 'checkbox-marked' : 'checkbox-blank-outline'}
              size={28}
              color={agreeToTerms ? colors.text : colors.text_tertiary}
              onPress={() => setAgreeToTerms(prev => !prev)}
            />
          </TouchableOpacity>

          <Text color="text_secondary" size={12} lineHeight={18}>
            I am over 18 years of age and I have read and agree to the{' '}
            <Button text="Terms of Service" variation="link" /> and{' '}
            <Button text="Privacy policy" variation="link" />.
          </Text>
        </View>

        <Button text="Create account" style={styles.button} />

        <View style={styles.bottomTextContainer}>
          <Text size={12} color="text_secondary">
            Already have an account?{'  '}
          </Text>
          <Button
            text="Log in Here"
            variation="underline"
            onPress={() => navigation.navigate(screens.login)}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Register;
