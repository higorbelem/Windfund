import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import Modal from './src/components/Modal';
import Routes from './src/routes';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Routes />
      <Modal.Component />
    </NavigationContainer>
  );
}

export default App;
