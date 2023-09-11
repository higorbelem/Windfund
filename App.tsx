import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import Routes from '#/routes';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}

export default App;
