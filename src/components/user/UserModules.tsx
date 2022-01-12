import React, { useEffect, useState } from 'react';
import { ScrollView, Pressable, Heading, VStack, Text, Box, Input, Stack, Fab, NativeBaseProvider, Center, Spacer, HStack } from 'native-base';
import { UserModuleContext, IModule } from './ContextInterfaces';
import { useNavigation } from '@react-navigation/native';
import { UserModulesScreenProps } from '../ScreenNavigation';


const UserModules = () => {

  const navigation = useNavigation<UserModulesScreenProps>();
  const [searchModule, setSearchModule] = useState("");
  const [modules, setModules] = useState<Array<IModule>>([]);
  const [moduleId, setModuleId] = useState("");

  const onModulePress = (moduleId: string, moduleName: string, moduleDescription: string, modulesYoutubeId: string) => {
    return () => {
      navigation.navigate("QuizIntro", {
        moduleId: String(moduleId),
        moduleName: moduleName,
        moduleDescription: moduleDescription,
        modulesYoutubeId: modulesYoutubeId
      });
    }
  }
  const onSearchModule = (search: string) => setSearchModule(search);

  const filteredModules = modules.filter(module => {
    return module.title.toLowerCase().indexOf(searchModule.toLowerCase()) !== -1
  })


  useEffect(() => {
    fetch("http://localhost:3001/modules", {
      method: "get",
      headers: { "content-type": "application/json" },
      credentials: "include"
    }).then(res => {
      res.json().then(r => setModules(r))
    });
  }, []);

  return (
    <UserModuleContext.Provider value={{
      moduleId,
      setModules
    }}>
      <Center width={"100%"}>
        <VStack space={3} alignItems="center" width="100%">
          <Box mb={2} safeAreaTop={5}>
            <Text fontSize={"xs"}>({modules.length} módulos disponíveis)</Text>
          </Box>
          <Input
            placeholder="Pesquisar módulo"
            width="95%"
            height={10}
            bg="gray.100"
            borderRadius="10"
            placeholderTextColor="gray.500"
            borderWidth="0"
            onChangeText={onSearchModule}
          />
        </VStack>
        <Stack display="flex" flexDirection="row" width="95%" marginTop={3}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {filteredModules.map((module: any, index: number) => {
              return (
                <Pressable key={index} onPress={onModulePress(module.id, module.title, module.description, module.url)}>
                  <Box marginBottom={2} width="100%" p={3} h={100} bg="primary.500" rounded="md" shadow={1}>
                    <HStack alignItems={"flex-start"}>
                      <Text fontWeight="medium" fontSize={20}>{module.title}</Text>
                      <Spacer />
                      <Text fontWeight="bold" fontSize={20}>#{index + 1}</Text>
                    </HStack>
                    <Text>{module.description}</Text>
                  </Box>
                </Pressable>
              )
            })}
          </ScrollView>
        </Stack>
      </Center>
    </UserModuleContext.Provider >
  );
};
export default UserModules;
