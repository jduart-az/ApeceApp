import { createContext } from 'react';

export const DefaultModule = [{
  "id": -1,
  "title": "",
  "description": "",
  "enable": true
}]

export const DefaultQuestion = [{
  "id": -1,
  "question": "",
  "enable": true
}]

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

export interface ModulesContextInterface {
  modules?: IModule;
  setModules: (modulea: IModule) => void;
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