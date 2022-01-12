import React, { useRef, useState } from 'react'
import { Text, View, Button, Center, Heading, Container, Box, ScrollView, Radio } from 'native-base';
import Swiper from 'react-native-swiper';

const Quiz = () => {

  const swiper = useRef(null);
  const [value, setValue] = useState("");

  console.log("Radio value: ", value);

  const onPressNext = () => {
    //@ts-ignore
    swiper.current.scrollBy(1);
  }

  return (
    <Swiper scrollEnabled={false} ref={swiper} showsButtons={false} activeDotColor={'white'} loop={false}>
      <ScrollView w={"full"} h={"full"} backgroundColor={"blue.100"}>
        <Center>
          <Container safeAreaTop={20} mb={3}>
            <Center>
              <Heading mb={4}>Pergunta #1</Heading>
              <Text mb={"10"} textAlign={"center"}>As complicações associadas à pele perístoma são mais frequentes:</Text>
            </Center>
          </Container>
        </Center>
        <Center>
          <Container>
            <Radio.Group
              name="question"
              value={value}
              onChange={(nextValue) => {
                setValue(nextValue)
              }}
            >
              <Box alignItems={"flex-start"} borderColor={"blue.400"} borderWidth={2} borderRadius={"2xl"} paddingX={3} paddingY={0} mb={2} w={"100%"}>
                <Radio colorScheme={"blue"} size={"lg"} value="1" my={1}>
                  <Text padding={2}>Nas ostomias respiratórias.</Text>
                </Radio>
              </Box>
              <Box alignItems={"flex-start"} borderColor={"blue.400"} borderWidth={2} borderRadius={"2xl"} paddingX={3} paddingY={0} mb={2} w={"100%"}>
                <Radio colorScheme={"blue"} size={"lg"} value="2" my={1}>
                  <Text padding={2}>Nas colostomias.</Text>
                </Radio>
              </Box>
              <Box alignItems={"flex-start"} borderColor={"blue.400"} borderWidth={2} borderRadius={"2xl"} paddingX={3} paddingY={0} mb={2} w={"100%"}>
                <Radio colorScheme={"blue"} size={"lg"} value="3" my={1}>
                  <Text padding={2}>Nas ostomias em que o efluente é líquido.</Text>
                </Radio>
              </Box>
              <Box alignItems={"flex-start"} borderColor={"blue.400"} borderWidth={2} borderRadius={"2xl"} paddingX={3} paddingY={0} mb={2} w={"100%"}>
                <Radio colorScheme={"blue"} size={"lg"} value="4" my={1}>
                  <Text padding={2}>Nas ostomias de alimentação.</Text>
                </Radio>
              </Box>
            </Radio.Group>
          </Container>
        </Center>
        <Center>
          <Button onPress={onPressNext} width={"75%"} mt={4}>Next</Button>
        </Center>
      </ScrollView >



      <View>
        <Text>Beautiful</Text>
      </View>
      <View>
        <Text>And simple</Text>
      </View>
    </Swiper >
  );
};
export default Quiz;
