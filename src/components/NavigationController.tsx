import React from 'react';
import Login from './Login';
import Modules from './Modules';
import AddQuestion from './AddQuestion';
import AddAnswer from './AddAnswer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './ScreenNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { Link } from 'native-base';
import Questions from './Questions';


const Stack = createNativeStackNavigator<RootStackParamList>();
const linkHeader = () => {
  console.log("teste");
  return (<>
    <Link fontSize={6}>Voltar</Link>
  </>);
}

const NavigationController = () => {
  return (
    <Stack.Navigator initialRouteName="Modules">
      <Stack.Screen name="Modules" options={{ headerTitle: "Módulos" }} component={Modules} />
      <Stack.Screen name="AddQuestion" options={{ headerTitle: "Adicionar pergunta", headerBackTitle: "" }} component={AddQuestion} />
      <Stack.Screen name="Questions" options={{ headerTitle: "Lista perguntas", headerBackTitle: "" }} component={Questions} />
      <Stack.Screen name="AddAnswer" options={{ headerTitle: "Adicionar resposta", headerBackTitle: "", headerRight: linkHeader }} component={AddAnswer} />
    </Stack.Navigator>
  );
};
export default NavigationController;
