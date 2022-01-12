import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";



export type RootStackParamList = {
  // Admin
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

  // User
  UserModules: undefined;
  Quiz: {
    moduleId: string;
  }
  QuizIntro: {
    moduleId: string;
    moduleName: string;
    moduleDescription: string;
    modulesYoutubeId: string;
  }
};

// Admin
export type ModulesScreenProps = NativeStackNavigationProp<RootStackParamList, "Modules">;
export type QuestionsScreenProps = NativeStackNavigationProp<RootStackParamList, "Questions">;
export type AnswersScreenProps = NativeStackNavigationProp<RootStackParamList, "Answers">;
export type AddAnswerScreenProps = NativeStackNavigationProp<RootStackParamList, "AddAnswer">;
export type AddQuestionScreenProps = NativeStackNavigationProp<RootStackParamList, "AddQuestion">;

export type QuestionScreenRouteProp = RouteProp<RootStackParamList, "Questions">;
export type AnswerScreenRouteProp = RouteProp<RootStackParamList, "Answers">;
export type AddQuestionScreenRouteProp = RouteProp<RootStackParamList, "AddQuestion">;
export type AddAnswerScreenRouteProp = RouteProp<RootStackParamList, "AddAnswer">;

// User
export type UserModulesScreenProps = NativeStackNavigationProp<RootStackParamList, "UserModules">;
export type QuizScreenProps = NativeStackNavigationProp<RootStackParamList, "Quiz">;
export type QuizIntroScreenProps = NativeStackNavigationProp<RootStackParamList, "QuizIntro">;

export type QuizScreenRouteProp = RouteProp<RootStackParamList, "Quiz">;
export type QuizIntroScreenRouteProp = RouteProp<RootStackParamList, "QuizIntro">;
