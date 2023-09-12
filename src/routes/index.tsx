import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import colors from '#/static/colors';
import screens from '#/static/screens';
import Login from '#/screens/Onboarding/Login';
import Register from '#/screens/Onboarding/Register';
import FundDetail from '#/screens/FundDetail';

import Tabs from './tabs';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: colors.bg,
        },
      }}>
      <Stack.Screen name={screens.login} component={Login} />
      <Stack.Screen name={screens.register} component={Register} />
      <Stack.Screen name={screens.tab} component={Tabs} />
      <Stack.Screen name={screens.fundDetail} component={FundDetail} />
    </Stack.Navigator>
  );
};

export default Routes;
