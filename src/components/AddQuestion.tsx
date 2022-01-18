import React, { useEffect, useState } from 'react';
import { ScrollView, Pressable, Heading, VStack, Text, Box, Input, Stack, Fab, TextArea, Button, Center } from 'native-base';
//import Icon from 'react-native-vector-icons/FontAwesome';
import ModuleModal from './ModuleModal';
import ModuleActionSheet from './ModuleActionSheet';
import { DefaultModule, IModule, ModuleContext, QuestionProps } from './ContextInterfaces';
import { useNavigation, useRoute } from '@react-navigation/native';
import { AddQuestionScreenProps, AddQuestionScreenRouteProp } from '../navigation/ScreenNavigation';


const AddAnswer = () => {
  const navigation = useNavigation<AddQuestionScreenProps>();
  const route = useRoute<AddQuestionScreenRouteProp>();
  const { moduleId } = route.params;

  const [addQuestion, setAddQuestion] = useState({
    question: ""
  });

  const onSavePress = () => {
    navigation.navigate("Modules");
  }

  const onInputChangeQuestion = (question: string) => setAddQuestion({ ...addQuestion, question: question });

  const onNextButtonPress = () => {
    fetch("http://localhost:3001/question", {
      method: "post",
      headers: {
        "content-type": "application/json"
      },
      credentials: "include",
      body: JSON.stringify({
        moduleId: moduleId,
        question: addQuestion.question
      })
    }).then(res => {
      res.json().then(r => {
        navigation.navigate("AddAnswer", { questionId: r });
      });
    }).catch(err => {
      console.log(err);
    });
  }

  //const onAddModulePress = () => setShowModuleModal(true);

  return (
    <Center width={"100%"}>
      <VStack space={3} alignItems="center" width="100%">
        <Box display={"flex"} mb={2} safeAreaTop={5}>
          <Text textAlign="center" fontSize={"xs"}>módulo #...</Text>
        </Box>
        <Box display={"flex"} mt="25%" w="95%">
          <TextArea height={300} borderColor="emerald.400" placeholder="Pergunta" onChangeText={onInputChangeQuestion} />
          <Button mt={2} size="lg" w="100%" variant="subtle" colorScheme="teal" onPress={onNextButtonPress}>Próximo</Button>
        </Box>
      </VStack>
      <Fab
        marginBottom={3}
        borderRadius="full"
        colorScheme="emerald"
        placement="bottom-right"
        label="Câmara"
      // icon={
      //   <Icon size={30} name="camera" color={"#ffffff"} />
      // }
      />
      <Fab
        marginBottom={3}
        marginRight={20}
        borderRadius="full"
        colorScheme="emerald"
        placement="bottom-right"
        paddingLeft={5}
        paddingRight={5}
        label="Micro"
      // icon={
      //   <Icon size={30} name="microphone" color={"#ffffff"} />
      // }
      />
    </Center>
  );
};
export default AddAnswer;
