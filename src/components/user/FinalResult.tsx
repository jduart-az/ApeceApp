
import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Box, Button, Center, Heading, Text, View } from 'native-base';
import { ImageBackground } from 'react-native';
import { ResultScreenProps, ResultScreenRouteProp } from '../../navigation/ScreenNavigation';

export const sucessImg = require("../../../assets/images/sucess.png");
export const insucessImg = require("../../../assets/images/insucess.png");

const FinalResult = () => {
  const navigation = useNavigation<ResultScreenProps>();
  const route = useRoute<ResultScreenRouteProp>();
  const { finalResult, errorAnswersCount, totalQuestions } = route.params;

  const onHomePress = () => {
    navigation.navigate("UserModules");
  }
  return (
    <View w={"full"} h={"full"} backgroundColor={finalResult ? "green.300" : "red.300"}>
      <ImageBackground source={finalResult ? sucessImg : insucessImg} resizeMode="center" style={{ flex: 1, justifyContent: "center" }}>
        <Box safeAreaTop={20} position="relative">
          <Center>
            <Heading textAlign="center" mb="10">Resultado</Heading>
            <Text>{Math.round(((totalQuestions - errorAnswersCount) / totalQuestions) * 100)}%</Text>
            <Text fontSize={"lg"} textAlign={"center"} paddingX={"4"} marginBottom={"8"}>{finalResult ? "Módulo concluído com sucesso!" : "Módulo não foi concluído!"}</Text>
            <Button w={"90%"} onPress={onHomePress}>Ver módulos</Button>
          </Center>
        </Box>
      </ImageBackground>
    </View >
  );

};

export default FinalResult;