import logo from "../images/logo.png"
import {
  ChakraProvider,
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Image,
  theme,
} from '@chakra-ui/react';
import {Link} from "react-router-dom";
import Profile from "./profile"

export default function Landing() {
    return (
      <>
        <ChakraProvider theme={theme}>
          <Flex h='calc(100vh)' w='calc(100vw)' flexDirection="column" justifyContent="center" alignItems="center">
            <Heading fontSize="60px">Pear Up!</Heading>
            <Image w="75%" py={5} src={logo}/>
            <Button m={2} colorScheme='blue'>
              <Link to="/user/elytgy">Log In</Link>
            </Button>
            <Button to="user/elytgy" colorScheme='blue'>
              <Link to={Profile}>Sign Up</Link>
            </Button>
          </Flex>
        </ChakraProvider>
      </>
    );
  }
