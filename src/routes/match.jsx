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
import SearchBar from "../components/searchBar1";
import { Select } from 'antd';
import React, { useState } from 'react';
import 'antd/dist/antd.css';
import SearchBar1 from "../components/searchBar1";
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

    <ChakraProvider bg="#fcf2eb" theme={theme}>
        <Box bg="#fcf2eb">
            <Flex bg="#fcf2eb" align="center" justify="center" paddingTop="350" paddingBottom="700">
            <SearchBar1 />
            </Flex>
        </Box>

        
    </ChakraProvider>

      
    </>
  );
};
export default Match;
