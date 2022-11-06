import logo from "../images/profile.webp"
import {
  ChakraProvider,
  Box,
  Flex,
  Heading,
  Text,
  HStack,
  Link,
  Button,
  Image,
  theme,
} from '@chakra-ui/react';


export default function Profile() {
    return (
      <>
        <ChakraProvider theme={theme}>
          <Flex>
            <Flex direction="row" m={7}>
                <Image src={logo} borderRadius='full' w="30%"/>
                <Flex ml={5} w="100%" direction="column" justifyContent="center">
                    <Heading>Ellie Taghavi</Heading>
                    <HStack>
                        <Text>16</Text>
                        <Text>She/Her</Text>
                        <Text>Canada</Text>
                    </HStack>
                </Flex>
            </Flex>
            <Flex>
                <Text>Hello </Text>
            </Flex>
          </Flex>
        </ChakraProvider>
      </>
    );
  }