import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";



export type RootStackParamList = {
  Modules: undefined;
  AddQuestion: {
    moduleId: string;
  };
  AddAnswer: {
    questionId: string;
  };
};

export type AddQuestionScreenProps = NativeStackNavigationProp<RootStackParamList, "AddQuestion">;
export type ModulesScreenProps = NativeStackNavigationProp<RootStackParamList, "Modules">;
export type AddAnswerScreenProps = NativeStackNavigationProp<RootStackParamList, "AddAnswer">;

export type AddQuestionScreenRouteProp = RouteProp<RootStackParamList, "AddQuestion">;
export type AddAnswerScreenRouteProp = RouteProp<RootStackParamList, "AddAnswer">;