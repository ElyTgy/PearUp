import logo from "../images/logo.png"
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


export default function Profile() {
    return (
      <>
        <ChakraProvider theme={theme}>
          <Text>hi!</Text>
        </ChakraProvider>
      </>
    );
  }