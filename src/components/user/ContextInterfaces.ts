import { createContext } from 'react';

export const DefaultModule = {
  id: -1,
  title: "",
  description: "",
  enable: true,
  url: ""
}

export const DefaultQuestion = {
  "id": -1,
  "question": "",
  "enable": 1,
  "moduleId": -1
}

export const DefaultAnswer = {
  id: -1,
  answer: "",
  enable: true,
  correct: false,
  questionId: -1
}

export type IQuestion = typeof DefaultQuestion;
export type IModule = typeof DefaultModule;
export type IAnswer = typeof DefaultAnswer;

export interface QuestionProps {
  questions: IQuestion;
  setQuestions: (question: IQuestion) => void;
}

export interface AnswerProps {
  answer: IAnswer;
  setAnswer: (answer: IAnswer) => void;
}

export interface IUserModulesContext {
  modules?: IModule;
  setModules: (modules: IModule[]) => void;
  moduleId?: string;
  setModuleId?: (id: string) => void;
}

export const UserModuleContext = createContext<IUserModulesContext>({
  modules: DefaultModule,
  setModules: () => { },
  moduleId: "",
  setModuleId: () => { }
});