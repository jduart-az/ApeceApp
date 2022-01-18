import React from 'react';
import Login from '../components/Login';
import Modules from '../components/Modules';
import AddQuestion from '../components/AddQuestion';
import AddAnswer from '../components/AddAnswer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './ScreenNavigation';
import { Link } from 'native-base';
import Questions from '../components/Questions';
import Answers from '../components/Answers';
import UserModules from '../components/user/UserModules';
import Quiz from '../components/user/Quiz';
import QuizIntro from '../components/user/QuizIntro';


const Stack = createNativeStackNavigator<RootStackParamList>();
const linkHeader = () => {
  console.log("teste");
  return (<>
    <Link fontSize={6}>Voltar</Link>
  </>);
}

const NavigationController = () => {
  return (
    <Stack.Navigator initialRouteName="UserModules">
      <Stack.Screen name="Modules" options={{ headerTitle: "Módulos" }} component={Modules} />
      <Stack.Screen name="AddQuestion" options={{ headerTitle: "Adicionar pergunta", headerBackTitle: "" }} component={AddQuestion} />
      <Stack.Screen name="Questions" options={{ headerTitle: "Lista perguntas", headerBackTitle: "" }} component={Questions} />
      <Stack.Screen name="Answers" options={{ headerTitle: "Lista de respostas", headerBackTitle: "" }} component={Answers} />
      <Stack.Screen name="AddAnswer" options={{ headerTitle: "Adicionar resposta", headerBackTitle: "", headerRight: linkHeader }} component={AddAnswer} />
      <Stack.Screen name="UserModules" options={{ headerTitle: "Módulos" }} component={UserModules} />
      <Stack.Screen name="Quiz" options={{ headerShown: false }} component={Quiz} />
      <Stack.Screen name="QuizIntro" options={{ headerShown: false }} component={QuizIntro} />
    </Stack.Navigator>
  );
};
export default NavigationController;