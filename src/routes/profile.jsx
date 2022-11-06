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
          <Flex direction="column">
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
            <Flex direction="column" align="flex-start" w="100%">
                <Text w="100%">Hello! Pls be my friends im lonely</Text>
                <Flex w="100%" direction="column" justify="flex-start">
                    <Flex align="center" direction="column">
                        <Text alignSelf="start">Interests</Text>
                        <Flex direction="row">
                            <Button>ants</Button>
                            <Button>eating</Button>
                            <Button>ur mom</Button>
                        </Flex>
                    </Flex>
                    <Flex align="center" direction="column">
                        <Text alignSelf="start">Skills</Text>
                        <Flex direction="row">
                            <Button>coding</Button>
                            <Button>harp</Button>
                            <Button>english</Button>
                        </Flex>
                    </Flex>
                    <Flex align="center" direction="column">
                        <Text alignSelf="start">To learn</Text>
                        <Flex direction="row">
                            <Button>piano</Button>
                            <Button>biology</Button>
                            <Button>art</Button>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
          </Flex>
        </ChakraProvider>
      </>
    );
  }