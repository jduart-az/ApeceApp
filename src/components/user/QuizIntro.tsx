import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Text, View, Button, Center, Heading, Container, Box, ScrollView, Radio } from 'native-base';
import Swiper from 'react-native-swiper';
import { useNavigation, useRoute } from '@react-navigation/native';
import { QuizIntroScreenProps, QuizIntroScreenRouteProp, QuizScreenProps, QuizScreenRouteProp } from '../ScreenNavigation';
import { QuestionProps, UserModuleContext } from './ContextInterfaces';
import QAnswers from './QAnswers';
import { IQuestion } from './ContextInterfaces';
import YoutubePlayer from 'react-native-youtube-iframe';
import { WebView } from 'react-native-webview';

const QuizIntro = () => {

  const navigation = useNavigation<QuizIntroScreenProps>();
  const route = useRoute<QuizIntroScreenRouteProp>();
  const { moduleId, moduleName, moduleDescription, modulesYoutubeId } = route.params;

  const onStartPress = () => {
    navigation.navigate("Quiz", { moduleId: moduleId });
  }



  return (
    <ScrollView w={"full"} h={"full"} backgroundColor={"blue.100"}>
      <Box safeAreaTop={20}>
        <Heading textAlign="center" mb="10">
          {moduleName}
        </Heading>
        <Center>
          <Text fontSize={"lg"} textAlign={"center"} paddingX={"4"} marginBottom={"8"}>{moduleDescription}</Text>
          <YoutubePlayer
            play={true}
            height={400}
            width={400}
            initialPlayerParams={{ controls: false, loop: true }}
            videoId={modulesYoutubeId}
            webViewProps={{ pointerEvents: "none" }}
          />
          <Button w={"90%"} onPress={onStartPress}>Iniciar</Button>

        </Center>
      </Box>
    </ScrollView >
  );
};
export default QuizIntro;
