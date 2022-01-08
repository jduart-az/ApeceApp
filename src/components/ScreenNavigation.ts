import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";



export type RootStackParamList = {
  Modules: undefined;
  Questions: {
    moduleId: string;
  };
  Answers: {
    questionId: string;
  };
  AddQuestion: {
    moduleId: string;
  };
  AddAnswer: {
    questionId: string;
  };
};

export type AddQuestionScreenProps = NativeStackNavigationProp<RootStackParamList, "AddQuestion">;
export type ModulesScreenProps = NativeStackNavigationProp<RootStackParamList, "Modules">;
export type QuestionsScreenProps = NativeStackNavigationProp<RootStackParamList, "Questions">;
export type AnswersScreenProps = NativeStackNavigationProp<RootStackParamList, "Answers">;
export type AddAnswerScreenProps = NativeStackNavigationProp<RootStackParamList, "AddAnswer">;

export type QuestionScreenRouteProp = RouteProp<RootStackParamList, "Questions">;
export type AnswerScreenRouteProp = RouteProp<RootStackParamList, "Answers">;
export type AddQuestionScreenRouteProp = RouteProp<RootStackParamList, "AddQuestion">;
export type AddAnswerScreenRouteProp = RouteProp<RootStackParamList, "AddAnswer">;