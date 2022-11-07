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
import MatchedProfile from "../components/matchedProfile";

import { Avatar, Card, Skeleton, Switch } from 'antd';
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


const Matched = (props) => {
    // const [name, setName] = useState("");
    // const [description, setDescription] = useState("");
  return (
    <>
    <ChakraProvider theme={theme}>
        <Flex align="center" justify="center" paddingTop="30">
        <SearchBar />
        </Flex>
        <div style={{width: '100%'}}>
        <MatchedProfile 
            avatar={<Avatar src="https://joeschmoe.io/api/v1/Peter"/>}
            title="Alice"
            description="My main skill set is Korean, the violets, law, and breathing exercises"
            />
            <MatchedProfile 
            avatar={<Avatar src="https://joeschmoe.io/api/v1/Bob"/>}
            title="Helen"
            description="My main skill set is English, the harps, web development and French"
            />
            <MatchedProfile 
            avatar={<Avatar src="https://joeschmoe.io/api/v1/Iona"/>}
            title="Steven"
            description="My main skill set is yoga, piano, Mandarin, and the guitar"
            />
             <MatchedProfile 
            avatar={<Avatar src="https://joeschmoe.io/api/v1/Mike"/>}
            title="Lily"
            description="My main skill set is UX Design, Japanese, and Statistic"
            />
             <MatchedProfile 
            avatar={<Avatar src="https://joeschmoe.io/api/v1/Nick"/>}
            title="Nick"
            description="My main skill set is Math, Creative Writing, and Meditation"
            />
        </div>
        
    </ChakraProvider>
      
    </>
  );
};
export default Matched;
