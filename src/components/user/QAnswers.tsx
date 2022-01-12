import React, { useContext, useEffect, useRef, useState } from 'react'
import { Text, View, Button, Center, Heading, Container, Box, ScrollView, Radio } from 'native-base';
import Swiper from 'react-native-swiper';
import { useNavigation, useRoute } from '@react-navigation/native';
import { QuizScreenProps, QuizScreenRouteProp } from '../ScreenNavigation';
import { AnswerProps, UserModuleContext } from './ContextInterfaces';
import { IAnswer } from './ContextInterfaces';

const QuizAnswers = (props: AnswerProps) => {

  const { questionId } = props;
  const [answers, setAnswers] = useState<Array<IAnswer>>([]);

  const [value, setValue] = useState("");
  console.log("Radio value: ", value);

  useEffect(() => {
    fetch(`http://localhost:3001/question/${questionId}/answers`, {
      method: "get",
      headers: { "content-type": "application/json" },
      credentials: "include"
    }).then(res => {
      res.json().then(r => setAnswers(r))
    });
  }, []);

  return (
    <Radio.Group
      name="question"
      value={value}
      onChange={(nextValue) => {
        setValue(nextValue)
      }}
    >{answers.map((a: IAnswer) => {
      return (
        <Box key={a.id} alignItems={"flex-start"} borderColor={"blue.400"} borderWidth={2} borderRadius={"2xl"} paddingX={3} paddingY={0} mb={2} w={"100%"}>
          <Radio colorScheme={"blue"} size={"lg"} value={String(a.id)} my={1}>
            <Text padding={2}>{a.answer}</Text>
          </Radio>
        </Box>
      );
    })}
    </Radio.Group>
  );
};
export default QuizAnswers;
