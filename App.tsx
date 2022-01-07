/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */


import React from 'react';
import { Center, NativeBaseProvider } from 'native-base';
import NavigationController from './src/components/NavigationController';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <NavigationController />
      </NativeBaseProvider>
    </NavigationContainer>
  );
};
export default App;
