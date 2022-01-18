import React, { useEffect, useState } from 'react';
import { ScrollView, Pressable, Heading, VStack, Text, Box, Input, Stack, Fab, NativeBaseProvider, Center } from 'native-base';
//import Icon from 'react-native-vector-icons/FontAwesome';
import ModuleModal from './ModuleModal';
import ModuleActionSheet from './ModuleActionSheet';
import { DefaultAnswer, DefaultModule, DefaultQuestion, IAnswer, IModule, IQuestion, ModuleContext } from './ContextInterfaces';
import { useNavigation, useRoute } from '@react-navigation/native';
import { AnswerScreenRouteProp, AnswersScreenProps, ModulesScreenProps, QuestionScreenRouteProp } from '../navigation/ScreenNavigation';

// import images
export const welcomeAssets = require("../../assets/images/welcome.png");

function Answers() {
  const navigation = useNavigation<AnswersScreenProps>();
  const route = useRoute<AnswerScreenRouteProp>();
  const { questionId } = route.params;

  const [answer, setAnswer] = useState<IAnswer>(DefaultAnswer);
  const [answers, setAnswers] = useState<Array<IAnswer>>([]);



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
    <Center width={"100%"}>
      <VStack space={3} alignItems="center" width="100%">
        <Box mb={2} safeAreaTop={5}>
          <Text fontSize={"xs"}>({answers.length} respostas disponíveis)</Text>
        </Box>
      </VStack>
      <Stack display="flex" flexDirection="row" width="95%" marginTop={3}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {answers.map((a: any, index: number) => {
            return (
              <Pressable key={index} >
                <Box marginBottom={2} width="100%" p={3} h={100} bg={a.correct ? "green.400" : "red.400"} rounded="md" shadow={1}>{a.answer}</Box>
                <ModuleActionSheet />
              </Pressable>
            )
          })}
        </ScrollView>
      </Stack>
    </Center>
  );
};
export default Answers;
