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
import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  colors: {
    brand: {
      100: "#72b01d",
      200: "#ace55e",
      300: "#e0f5c3",
      400: "#c1e810",
      500: "#daf369",
      600: "#ebfab3",
      700: "#806443",
      800: "#0a210f",
      900: "#fcf2eb",
    },
  },
})
export default function Landing() {
    return (
      <>
        <ChakraProvider theme={theme}>
          <Flex h='calc(100vh)' w='calc(100vw)' flexDirection="column" justifyContent="center" alignItems="center">
            <Heading colorScheme='brand' fontSize="60px">Pear Up!</Heading>
            <Image w="75%" py={5} src={logo}/>
            <Button m={2} bg='brand.100'>
              <Link to="/user/elytgy">Log In</Link>
            </Button>
            <Button to="user/elytgy" bg='brand.100'>
              <Link to={Profile}>Sign Up</Link>
            </Button>
          </Flex>
        </ChakraProvider>
      </>
    );
  }
