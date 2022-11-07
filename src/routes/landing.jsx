import logo from "../images/logo.png"
import {
  ChakraProvider,
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Image,
} from '@chakra-ui/react';
import {Link} from "react-router-dom";
import Profile from "./profile"
import {theme} from "../theme"

import '@fontsource/inconsolata/400.css'
import '@fontsource/cabin/latin-700.css'

export default function Landing() {
    return (
      <>
        <ChakraProvider theme={theme}>
          <Box bg='#f5fab1'>
            <Flex h='calc(100vh)' w='calc(100vw)' flexDirection="column" justifyContent="center" alignItems="center">
              <Heading colorScheme='brand' fontSize="80px">Pear Up</Heading>
              <Image w="660px" mb="40px" py={5} src={logo}/>
              <Button w="300px" p={5} m={2} bg='brand.100' 
              _hover={{
              background: "brand.200",
              }}
              >
                <Link style={{color: 'black'}} to="/pear/elytgy">Log In</Link>
              </Button>
              <Button w="300px" p={5} to="pear/elytgy" bg='brand.100'
              _hover={{
                background: "brand.200",
                color: "black",
                }}>
                <Link style={{color: 'black'}} to={Profile}>Sign Up</Link>
              </Button>
            </Flex>
          </Box>
        </ChakraProvider>
      </>
    );
  }
