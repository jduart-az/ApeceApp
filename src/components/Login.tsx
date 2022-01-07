
import React, { useState } from 'react';
import { HStack, Center, Heading, NativeBaseProvider, VStack, Image, Box, Input, Button } from 'native-base';
import { Alert } from "react-native"

export const welcomeAssets = require("../../assets/images/welcome.png");


function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onInputChangeUser = (text: string) => {
    setUsername(text)
  };

  const onInputChangePassword = (text: string) => {
    setPassword(text)
  };

  const onButtonPress = () => {
    fetch("http://localhost:3001/users/authenticate", {
      method: "post",
      headers: {
        "content-type": "application/json"
      },
      credentials: "include",
      body: JSON.stringify({
        email: username,
        password: password
      })
    }).then(res => {
      res.json().then(r => Alert.alert(
        "Mensagem",
        r.message,
        [
          { text: "Cancelar" },
          { text: "Ok" }
        ]
      ))
    }).catch(err => {
      console.log(err);
    })
  }

  return (
    <>
      <Box backgroundColor="emerald.100" alignItems="center" width="100%" height="30%" zIndex={2}>
        <Image source={welcomeAssets} alt="#" size="350" />
      </Box>
      <Center backgroundColor="emerald.50" height="70%" width="100%" zIndex={1}>
        <VStack space={7} alignItems="center">
          <Heading size="xl">e-APECE LOGIN</Heading>
          <HStack space={2} alignItems="center">
            <Input value={username} autoFocus={true} w={{ base: "75%", md: "25%" }} variant="underlined" onChangeText={onInputChangeUser} placeholder="Username" />
          </HStack>
          <HStack space={2} alignItems="center">
            <Input value={password} w={{ base: "75%", md: "25%" }} variant="underlined" onChangeText={onInputChangePassword} placeholder="Password" secureTextEntry={true} />
          </HStack>
          <Button size="lg" w="300" variant="subtle" colorScheme="teal" onPress={onButtonPress}>login</Button>
        </VStack>
      </Center>
    </>
  );
};
export default Login;
