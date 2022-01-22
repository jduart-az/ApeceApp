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

export const DefaultUser = {
  id: -1,
  name: "",
  email: "",
  password: "",
  enable: true,
  is_admin: false
}

export type IQuestion = typeof DefaultQuestion;
export type IModule = typeof DefaultModule;
export type IAnswer = typeof DefaultAnswer;
export type IUser = typeof DefaultUser;

export interface QuestionProps {
  questions: IQuestion;
  setQuestions: (question: IQuestion) => void;
}

export interface AnswerProps {
  answer: IAnswer;
  setAnswer: (answer: IAnswer) => void;
}

export interface LoginAPIProps {
  user: IUser;
  setUser: (u: IUser) => void;
  loggedIn: boolean;
  setLoggedIn: (lg: boolean) => void;
  infoUser: string;
  setInfoUser: (info: string) => void;
}

export interface IStateLoginContext {
  user: IUser;
  setUser: (u: IUser) => void;
  loggedIn: boolean;
  setLoggedIn: (lu: boolean) => void;
}

export const StateLoginContext = createContext<IStateLoginContext>({
  user: DefaultUser,
  setUser: () => { },
  loggedIn: false,
  setLoggedIn: () => { }
});

export interface ModulesContextInterface {
  modules?: IModule;
  setModules: (modules: IModule[]) => void;
  showModuleModal: boolean;
  setShowModuleModal: (s: boolean) => void;
  showModuleActionSheet: boolean;
  moduleId?: string;
  setModuleId?: (id: string) => void;
  setShowModuleActionSheet: (m: boolean) => void;
}

export const ModuleContext = createContext<ModulesContextInterface>({
  modules: DefaultModule,
  setModules: () => { },
  showModuleModal: false,
  setShowModuleModal: () => { },
  showModuleActionSheet: false,
  moduleId: "",
  setModuleId: () => { },
  setShowModuleActionSheet: () => { }
});