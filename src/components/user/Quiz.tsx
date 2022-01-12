import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Text, View, Button, Center, Heading, Container, Box, ScrollView, Radio } from 'native-base';
import Swiper from 'react-native-swiper';
import { useNavigation, useRoute } from '@react-navigation/native';
import { QuizScreenProps, QuizScreenRouteProp } from '../ScreenNavigation';
import { QuestionProps, UserModuleContext } from './ContextInterfaces';
import QAnswers from './QAnswers';
import { IQuestion } from './ContextInterfaces';
import YoutubePlayer from 'react-native-youtube-iframe';
import { WebView } from 'react-native-webview';

const Quiz = () => {

  const navigation = useNavigation<QuizScreenProps>();
  const route = useRoute<QuizScreenRouteProp>();
  const { moduleId } = route.params;
  const swiper = useRef(null);

  const [questions, setQuestions] = useState<Array<IQuestion>>([]);;
  const [questionId, setQuestionId] = useState("");
  const [i, setI] = useState(0);

  const [value, setValue] = useState("");
  console.log("Radio value: ", value);




  const onPressNext = () => {
    //@ts-ignore
    swiper.current.scrollBy(i);
    setI(i + 1);
  }

  useEffect(() => {
    fetch(`http://localhost:3001/module/${moduleId}/questions`, {
      method: "get",
      headers: { "content-type": "application/json" },
      credentials: "include"
    }).then(res => {
      res.json().then(r => setQuestions(r))
    });
  }, []);

  return (
    <UserModuleContext.Provider value={{
      questionId
    }}>
      <Swiper scrollEnabled={false} ref={swiper} showsButtons={false} activeDotColor={'white'} index={i} loop={false}>
        {questions.map((q: any, index: number) => {
          return (
            <ScrollView key={index} w={"full"} h={"full"} backgroundColor={"blue.100"}>
              <Center>
                <Container safeAreaTop={20} mb={3}>
                  <Center>
                    <Heading mb={4}>Pergunta #{index + 1}</Heading>
                    <Text mb={"10"} textAlign={"center"}>{q.question}</Text>
                  </Center>
                </Container>
              </Center>
              <Center>
                <Container>
                  <QAnswers questionId={q.id} />
                </Container>
              </Center>
              <Center>
                <Button onPress={onPressNext} width={"75%"} mt={4}>Next</Button>
              </Center>
            </ScrollView >
          )
        })}
      </Swiper >
    </UserModuleContext.Provider>
  );
};
export default Quiz;
