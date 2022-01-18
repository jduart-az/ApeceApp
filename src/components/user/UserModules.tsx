import React, { useEffect, useState } from 'react';
import { ScrollView, Pressable, VStack, Text, Box, Stack, Center, Spacer, HStack } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { UserModulesScreenProps } from '../../navigation/ScreenNavigation';
import { IModule } from './ContextInterfaces';

const UserModules = () => {

  const navigation = useNavigation<UserModulesScreenProps>();
  const [modules, setModules] = useState<Array<IModule>>([]);

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
    <Center width={"100%"}>
      <VStack space={3} alignItems="center" width="100%">
        <Box mb={2} safeAreaTop={5}>
          <Text fontSize={"xs"}>({modules.length} módulos disponíveis)</Text>
        </Box>
      </VStack>
      <Stack display="flex" flexDirection="row" width="95%" marginTop={3}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {modules.map((module: IModule, index: number) => {
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
  );
};
export default UserModules;
