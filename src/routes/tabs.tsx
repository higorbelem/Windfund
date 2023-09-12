/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Octicons from 'react-native-vector-icons/Octicons';
import Feather from 'react-native-vector-icons/Feather';

import screens from '#/static/screens';
import Home from '#/screens/Tabs/Home';
import Trade from '#/screens/Tabs/Trade';
import Portifolio from '#/screens/Tabs/Portifolio';
import colors from '#/static/colors';
import Text from '#/components/Text';
import {Platform} from 'react-native';

const Tab = createBottomTabNavigator();

const Label = ({children, focused}: any) => (
  <Text
    size={10}
    weight={focused ? 400 : 700}
    color={focused ? 'primary' : 'text'}>
    {children}
  </Text>
);

const Icon =
  (screen: 'home' | 'trade' | 'portifolio') =>
  ({color}: any) => {
    if (screen === 'home') {
      return (
        <Octicons
          name="home"
          color={color}
          size={22}
          style={Platform.OS === 'android' ? {marginTop: 15} : {marginTop: 8}}
        />
      );
    }
    if (screen === 'trade') {
      return (
        <Octicons
          name="arrow-switch"
          color={color}
          size={22}
          style={Platform.OS === 'android' ? {marginTop: 15} : {marginTop: 8}}
        />
      );
    }
    if (screen === 'portifolio') {
      return (
        <Feather
          name="pie-chart"
          color={color}
          size={22}
          style={Platform.OS === 'android' ? {marginTop: 15} : {marginTop: 8}}
        />
      );
    }
  };

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.text,
        tabBarStyle:
          Platform.OS === 'android'
            ? {height: 80, paddingBottom: 20}
            : {height: 90},
      }}>
      <Tab.Screen
        name={screens.home}
        component={Home}
        options={{
          tabBarLabel: Label,
          tabBarIcon: Icon('home'),
        }}
      />
      <Tab.Screen
        name={screens.trade}
        component={Trade}
        options={{
          tabBarLabel: Label,
          tabBarIcon: Icon('trade'),
        }}
      />
      <Tab.Screen
        name={screens.portifolio}
        component={Portifolio}
        options={{
          tabBarLabel: Label,
          tabBarIcon: Icon('portifolio'),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
