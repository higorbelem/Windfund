import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import screens from '#/static/screens';
import Home from '#/screens/Tabs/Home';
import Trade from '#/screens/Tabs/Trade';
import Portifolio from '#/screens/Tabs/Portifolio';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={screens.home} component={Home} />
      <Tab.Screen name={screens.trade} component={Trade} />
      <Tab.Screen name={screens.portifolio} component={Portifolio} />
    </Tab.Navigator>
  );
};

export default Tabs;
