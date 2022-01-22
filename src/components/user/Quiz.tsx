import React, { useEffect, useRef, useState } from 'react';
import { Text, Button, Center, Heading, Container, ScrollView } from 'native-base';
import { useNavigation, useRoute } from '@react-navigation/native';
import Swiper from 'react-native-swiper';
import { QuizScreenProps, QuizScreenRouteProp } from '../../navigation/ScreenNavigation';
import { IQuestion, IResult, QuizContext } from './ContextInterfaces';
import QAnswers from './QAnswers';

const Quiz = () => {

  const navigation = useNavigation<QuizScreenProps>();
  const route = useRoute<QuizScreenRouteProp>();
  const { moduleId } = route.params;
  const swiper = useRef(null);

  const [questions, setQuestions] = useState<Array<IQuestion>>([]);;
  const [results, setResults] = useState<Array<IResult>>([]);
  const [pageCount, setPageCount] = useState(0);
  const [selectedQuestion, setSelectedQuestion] = useState("");

  const onPressNext = (questionId: string) => {
    return () => {
      //@ts-ignore
      swiper.current.scrollBy(pageCount);
      results.push({ question_id: questionId, answer_id: selectedQuestion });

      if (!(pageCount + 1 === questions.length)) {
        setPageCount(pageCount + 1);
        setSelectedQuestion("");
      } else {
        fetch("http://localhost:3001/results", {
          method: "POST",
          headers: { "content-type": "application/json" },
          credentials: "include",
          body: JSON.stringify({
            userId: 1, //TODO: When loggin get the user id
            moduleId: moduleId,
            results: results
          })
        }).then(res => {
          res.json().then(r => {
            navigation.navigate("FinalResult", { finalResult: r.finalResult, errorAnswersCount: r.errorAnswersCount, totalQuestions: r.totalQuestions })
          })
        });
        //
      }
    }
  }

  useEffect(() => {
    const getQuestion = async () => {
      await fetch(`http://localhost:3001/module/${moduleId}/questions`, {
        method: "get",
        headers: { "content-type": "application/json" },
        credentials: "include"
      }).then(res => {
        res.json().then(r => setQuestions(r))
      });
    }
    getQuestion();
  }, []);

  return (
    <QuizContext.Provider value={{ selectedQuestion, setSelectedQuestion }}>
      <Swiper scrollEnabled={false} ref={swiper} showsButtons={false} activeDotColor={'white'} index={pageCount} loop={false}>
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
                <Button onPress={onPressNext(q.id)} width={"75%"} mt={4} isDisabled={selectedQuestion ? false : true}>{pageCount + 1 === questions.length ? "Terminar" : "Próxima"}</Button>
              </Center>
            </ScrollView >
          )
        })}
      </Swiper >
    </QuizContext.Provider>
  );
};
export default Quiz;
