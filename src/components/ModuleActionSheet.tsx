
import React, { useContext, useState } from 'react';
import { Actionsheet } from 'native-base';
import { ModuleContext } from './ContextInterfaces';
import { useNavigation } from '@react-navigation/native';
import { ModulesScreenProps } from './ScreenNavigation';


function ModuleActionSheet() {
  const navigation = useNavigation<ModulesScreenProps>();
  const { showModuleActionSheet, setShowModuleActionSheet, moduleId } = useContext(ModuleContext);
  const [enable, setEnable] = useState(true);

  const onCloseActionSheet = () => setShowModuleActionSheet(false);
  const onAddQuestionPress = () => {
    setShowModuleActionSheet(false);
    navigation.navigate("AddQuestion", { moduleId: String(moduleId) });
  }

  const onEnablePress = () => {

  }


  return (
    <Actionsheet isOpen={showModuleActionSheet} onClose={onCloseActionSheet} >
      <Actionsheet.Content>
        <Actionsheet.Item onPress={onAddQuestionPress}>Adicionar pergunta</Actionsheet.Item>
        <Actionsheet.Item>Desativar módulo</Actionsheet.Item>
        <Actionsheet.Item _text={{ color: "red.400" }} onPress={onCloseActionSheet}>Cancelar</Actionsheet.Item>
      </Actionsheet.Content>
    </Actionsheet >
  );
};
export default ModuleActionSheet;
