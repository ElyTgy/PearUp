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
import {theme} from "../theme"

import { Select } from 'antd';
import React, { useState } from 'react';
import 'antd/dist/antd.css';
import Matched from "../routes/matched";

const categoryData = ['Language','Music','Creative','Academic', 'Wellness'];
const interestData = {
    Language: ['English', 'Mandarin', 'Korean', 'Japanese', 'French'],
    Music: ['piano', 'harps', 'violets','guitar'],
    Creative: ['UX Design', 'Web Development', 'Creative Writing'],
    Academic: ['Math', 'Statistic', 'Law'],
    Wellness: ['Yoga', 'Meditation', 'Breathing Exercises']
};

const SearchBar = () => {
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
        <Flex align="center" justify="center" paddingTop="70">
        <Image src={logo} borderRadius='full' w="3%"/>
        <Select
            defaultValue={categoryData[0]}
            style={{
            width: 200,
            backgroundColor: "#72b01d",
            textalign: Center
            }}
            onChange={handleCategoryChange}
            options={categoryData.map((c) => ({
            label: c,
            value: c,
            }))}
        />
        <Select
            style={{
            width: 200,
            backgroundColor: "#72b01d",
            textalign: Center
            }}
            value={interests}
            onChange={onInterestChange}
            options={category.map((interest) => ({
            label: interest,
            value: interest,
            }))}
        />
        <Button to="/matched" bg="brand.100">
            <Link to="/matched" >Matched</Link>
        </Button>
        </Flex>
        
    </ChakraProvider>
      
    </>
  );
};
export default SearchBar;
