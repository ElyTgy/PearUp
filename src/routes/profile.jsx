import logo from "../images/profile.png"
import {
  ChakraProvider,
  Box,
  Flex,
  Heading,
  Text,
  HStack,
  Button,
  Image,
} from '@chakra-ui/react';

import {theme} from "../theme"
import '@fontsource/inconsolata/600.css'
import '@fontsource/cabin/latin-700.css'
import {Link} from "react-router-dom";
import Match from "../routes/match"

const bio = "Hi, I am Ellie who is in the Senior year of High School. I am preparing for my college application and I want to take on more learning experiences. I love music and I am currently the president of girls in STEM at my school. I am excited to get peared up to learn more about college level calculus."

export default function Profile() {
    return (
      <>
        <ChakraProvider theme={theme}>
          <Flex direction="column">
            <Flex height="350px" direction="row" pt={7} px={7} bgGradient="linear-gradient(90deg, rgba(195,255,113,1) 6%, rgba(224,245,195,1) 50%, rgba(235,250,179,1) 90%);">
                <Image ml={10}src={logo} borderRadius='full' h="300px"/>
                <Flex ml={70} w="100%" direction="column" justifyContent="center">
                    <Heading fontSize="3xl">Ellie Taghavi</Heading>
                    <HStack fontSize='lg'>
                        <Text>16  • </Text>
                        <Text>She/Her • </Text>
                        <Text>Canada</Text>
                    </HStack>
                </Flex>
            </Flex>
            <Flex  py={10} px={20} h='calc(100vh)' bg="#FCF2EB" direction="column" align="center">
                <Text maxW="1000px" fontSize='md' bg="#f5fab1" p={8} w="100%" >{bio}</Text>
                <Flex maxW="1000px" bg="#f5fab1" pb={5} px={10} mt={8} w="100%" direction="column" justify="flex-start">
                    <Flex align="center" direction="column">
                        <Heading pt={5} fontSize="2xl" alignSelf="start">Interests</Heading>
                        <Flex direction="row" w="90%" justify="space-evenly">
                            <Button p={5} m={2} bg='brand.100' _hover={{background: "brand.200",}}>
                            ants
                            </Button>
                            <Button p={5} m={2} bg='brand.100' _hover={{background: "brand.200",}}>
                            eating
                            </Button>
                            <Button p={5} m={2} bg='brand.100' _hover={{background: "brand.200",}}>
                            ur mom
                            </Button>
                        </Flex>
                    </Flex>
                    <Flex align="center" direction="column">
                        <Heading pt={5} fontSize="2xl" alignSelf="start">Skills</Heading>
                        <Flex direction="row" w="90%" justify="space-evenly">
                            <Button p={5} m={2} bg='brand.100' _hover={{background: "brand.200",}}>
                            coding
                            </Button>
                            <Button p={5} m={2} bg='brand.100' _hover={{background: "brand.200",}}>
                            harp
                            </Button>
                            <Button p={5} m={2} bg='brand.100' _hover={{background: "brand.200",}}>
                            english
                            </Button>
                        </Flex>
                    </Flex>
                    <Flex align="center" direction="column">
                        <Heading pt={5} fontSize="2xl" alignSelf="start">To learn</Heading>
                        <Flex direction="row" w="90%" justify="space-evenly">
                            <Button p={5} m={2} bg='brand.100' _hover={{background: "brand.200",}}>
                            piano
                            </Button>
                            <Button p={5} m={2} bg='brand.100' _hover={{background: "brand.200",}}>
                            biology
                            </Button>
                            <Button p={5} m={2} bg='brand.100' _hover={{background: "brand.200",}}>
                            art
                            </Button>
                        </Flex>
                    </Flex>
                </Flex>
                <Button w="300px" p={5} mt={20} bg='brand.100' _hover={{background: "brand.200",}}>
                    <Link style={{color: 'black'}} to={Match}>Log In</Link>
                </Button>
            </Flex>
          </Flex>
        </ChakraProvider>
      </>
    );
  }
