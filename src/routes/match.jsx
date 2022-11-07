import logo from "../images/logo.png"
import {
  ChakraProvider,
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Image,
  Center,
} from '@chakra-ui/react';
import {Link} from "react-router-dom";
import Profile from "./profile"
import {theme} from "../theme"
import SearchBar from "../components/searchBar";
// import { Select } from '@chakra-ui/react'

// export default function Profile() {
//     return (
//       <>
//         <ChakraProvider theme={theme}>
//           <Flex>
//             <Select placeholder='Select option'>
//             <option value='option1'>Languages</option>
//             <option value='option2'>Option 2</option>
//             <option value='option3'>Option 3</option>
//             </Select>
//             <Flex direction="row" m={7}>
//                 <Image src={logo} borderRadius='full' w="30%"/>
//                 <Flex ml={5} w="100%" direction="column" justifyContent="center">
//                     <Heading>Ellie Taghavi</Heading>
//                     <HStack>
//                         <Text>16</Text>
//                         <Text>She/Her</Text>
//                         <Text>Canada</Text>
//                     </HStack>
//                 </Flex>
//             </Flex>
//           </Flex>
//         </ChakraProvider>
//       </>
//     );
//   }

import { Select } from 'antd';
import React, { useState } from 'react';
import 'antd/dist/antd.css';
const categoryData = ['Language','Music','Creative','Academic', 'Wellness'];
const interestData = {
    Language: ['English', 'Mandarin', 'Korean', 'Japanese', 'French'],
    Music: ['piano', 'harps', 'violets','guitar'],
    Creative: ['UX Design', 'Web Development', 'Creative Writing'],
    Academic: ['Math', 'Statistic', 'Law'],
    Wellness: ['Yoga', 'Meditation', 'Breathing Exercises']
};

const Match = () => {
  const [category, setCategory] = useState(interestData[categoryData[0]]);
  const [interests, setInterest] = useState(interestData[categoryData[0]][0]);
  const handleCategoryChange = (value) => {
    setCategory(interestData[value]);
    setInterest(interestData[value][0]);
  };
  const onInterestChange = (value) => {
    setInterest(value);
  };
  return (
    <>
    <ChakraProvider theme={theme}>
        <Flex align="center" justify="center" paddingTop="50">
        <SearchBar />
        </Flex>
        
    </ChakraProvider>
      
    </>
  );
};
export default Match;
