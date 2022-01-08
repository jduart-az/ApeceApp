import React, { useEffect, useState } from 'react';
import { ScrollView, Pressable, Heading, VStack, Text, Box, Input, Stack, Fab, NativeBaseProvider, Center } from 'native-base';
//import Icon from 'react-native-vector-icons/FontAwesome';
import ModuleModal from './ModuleModal';
import ModuleActionSheet from './ModuleActionSheet';
import { DefaultModule, DefaultQuestion, IModule, IQuestion, ModuleContext } from './ContextInterfaces';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ModulesScreenProps, QuestionScreenRouteProp } from './ScreenNavigation';

// import images
export const welcomeAssets = require("../../assets/images/welcome.png");

function Answers() {
  const navigation = useNavigation<ModulesScreenProps>();
  const route = useRoute<QuestionScreenRouteProp>();
  const { moduleId } = route.params;

  const [question, setQuestion] = useState<IQuestion>(DefaultQuestion);
  const [questions, setQuestions] = useState<Array<IQuestion>>([]);



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
    <Center width={"100%"}>
      <VStack space={3} alignItems="center" width="100%">
        <Box mb={2} safeAreaTop={5}>
          <Text fontSize={"xs"}>({questions.length} perguntas disponíveis)</Text>
        </Box>
      </VStack>
      <Stack display="flex" flexDirection="row" width="95%" marginTop={3}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {questions.map((q: any, index: number) => {
            return (
              <Pressable key={index} >
                <Box marginBottom={2} width="100%" p={3} h={100} bg="primary.500" rounded="md" shadow={1}>{q.question}</Box>
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
