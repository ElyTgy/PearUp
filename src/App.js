import React from 'react';
import logo from "./images/logo.jpeg"
import {
  ChakraProvider,
  Box,
  Flex,
  Heading,
  Text,
  Link,
  Button,
  Image,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Flex h='calc(100vh)' w='calc(100vw)' flexDirection="column" justifyContent="center" alignItems="center">
        <Heading fontSize="60px">Pear Up!</Heading>
        <Image src={logo}/>
        <Button m={2} colorScheme='blue'>Log In</Button>
        <Button colorScheme='blue'>Sign Up</Button>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
