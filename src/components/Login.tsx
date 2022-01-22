
import React, { useContext, useEffect, useState } from 'react';
import { HStack, Center, Heading, NativeBaseProvider, VStack, Image, Box, Input, Button } from 'native-base';
import { Alert } from "react-native"
import { DefaultUser, IUser, StateLoginContext } from './ContextInterfaces';
import { AuthScreenProps } from '../navigation/ScreenNavigation';
import { useNavigation } from '@react-navigation/native';

export const welcomeAssets = require("../../assets/images/welcome.png");


function Login() {
  const navigation = useNavigation<AuthScreenProps>();
  const [puser, setPuser] = useState("");
  const [ppass, setPpass] = useState("");
  const [infoUser, setInfoUser] = useState("");
  const [resStatus, setResStatus] = useState(0);
  const { loggedIn, setLoggedIn, user, setUser } = useContext(StateLoginContext);


  const onInputChangeUser = (email: string) => {
    setPuser(email);
  };

  const onInputChangePassword = (password: string) => {
    setPpass(password);
  };

  const onButtonPress = () => {
    fetch("http://localhost:3001/users/authenticate", {
      method: "post",
      headers: {
        "content-type": "application/json"
      },
      credentials: "include",
      body: JSON.stringify({
        email: puser,
        password: ppass
      })
    }).then(res => {
      res.json().then(r => {
        if (r.login) {
          setUser(r.user);
          setLoggedIn(r.login);
          setInfoUser(r.message);
          setResStatus(res.status);
        } else {
          setInfoUser(r.message);
        }
      }) //true
    }).catch(err => {
      console.log(err);
    });
  }

  useEffect(() => {
    if (loggedIn) user.is_admin ? navigation.navigate("Modules") : navigation.navigate("UserModules");
  }, [loggedIn]);


  return (
    <>
      <Box backgroundColor="emerald.100" alignItems="center" width="100%" height="30%" zIndex={2}>
        <Image source={welcomeAssets} alt="#" size="350" />
      </Box>
      <Center backgroundColor="emerald.50" height="70%" width="100%" zIndex={1}>
        <VStack space={7} alignItems="center">
          <Heading size="xl">e-APECE LOGIN</Heading>
          <HStack space={2} alignItems="center">
            <Input autoFocus={true} w={{ base: "75%", md: "25%" }} variant="underlined" onChangeText={onInputChangeUser} placeholder="Username" />
          </HStack>
          <HStack space={2} alignItems="center">
            <Input w={{ base: "75%", md: "25%" }} variant="underlined" onChangeText={onInputChangePassword} placeholder="Password" secureTextEntry={true} />
          </HStack>
          <Button size="lg" w="300" variant="subtle" colorScheme="teal" onPress={onButtonPress}> login</Button>
        </VStack>
      </Center>
    </>
  );
};
export default Login;
