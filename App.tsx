/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */


import React, { useState } from 'react';
import { Center, NativeBaseProvider } from 'native-base';
import NavigationController from './src/navigation/NavigationController';
import { NavigationContainer } from '@react-navigation/native';
import Quiz from './src/components/user/Quiz';
import { DefaultUser, IUser, StateLoginContext } from './src/components/ContextInterfaces';

const App = () => {

  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState<IUser>(DefaultUser);

  return (
    // <NativeBaseProvider>
    //   <Quiz />
    // </NativeBaseProvider>
    <StateLoginContext.Provider value={{ loggedIn, setLoggedIn, user, setUser }}>
      <NavigationContainer>
        <NativeBaseProvider>
          <NavigationController />
        </NativeBaseProvider>
      </NavigationContainer>
    </StateLoginContext.Provider>
  );
};
export default App;
