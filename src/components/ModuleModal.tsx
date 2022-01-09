
import React, { useContext, useState } from 'react';
import { Button, Modal, Input, Box, Text, TextArea } from 'native-base';
import { ModuleContext, IModule, DefaultModule } from './ContextInterfaces';


function ModuleModal() {
  const { setModules, showModuleModal, setShowModuleModal } = useContext(ModuleContext);
  const [addModule, setAddModule] = useState({
    id: -1,
    title: "",
    description: "",
    url: ""
  });

  const onCloseModal = () => setShowModuleModal(false);
  const onInputChangeTitle = (title: string) => setAddModule({ ...addModule, title: title });
  const onInputChangeDescription = (description: string) => setAddModule({ ...addModule, description: description });
  const onInputChangeURL = (url: string) => setAddModule({ ...addModule, url: url });

  const onSavePress = () => {
    fetch("http://localhost:3001/modules", {
      method: "post",
      headers: {
        "content-type": "application/json"
      },
      credentials: "include",
      body: JSON.stringify({
        title: addModule.title,
        description: addModule.description,
        url: addModule.url
      })
    }).then(res => {
      res.json().then(r => setModules(r))
    }),
      setShowModuleModal(false);
  }

  return (
    <Modal isOpen={showModuleModal} onClose={onCloseModal} size={"xl"}>
      <Modal.Content maxH="500">
        <Modal.CloseButton />
        <Modal.Header>{""}</Modal.Header>
        <Modal.Body>
          <Box>
            <Text>Título</Text>
            <Input variant="underlined" onChangeText={onInputChangeTitle} />
          </Box>
          <Box mt="3">
            <Text>Descrição</Text>
            <TextArea variant="underlined" onChangeText={onInputChangeDescription} />
          </Box>
          <Box mt="3">
            <Text>URL do vídeo de apresentação</Text>
            <Input variant="underlined" onChangeText={onInputChangeURL} />
          </Box>
        </Modal.Body>
        <Modal.Footer>
          <Button.Group space={2}>
            <Button size="lg" w="100%" variant="subtle" colorScheme="teal" onPress={onSavePress}>Guardar</Button>
          </Button.Group>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
};
export default ModuleModal;
