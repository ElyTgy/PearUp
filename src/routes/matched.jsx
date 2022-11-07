import logo from "../images/logo.png"
import background from "../images/background.png"
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
import MatchedProfile from "../components/matchedProfile";

import { Avatar, Card, Skeleton, Switch } from 'antd';
import { Select } from 'antd';
import React, { useState } from 'react';
import 'antd/dist/antd.css';
import SearchBar2 from "../components/searchBar2";
const categoryData = ['Language','Music','Creative','Academic', 'Wellness'];
const interestData = {
    Language: ['English', 'Mandarin', 'Korean', 'Japanese', 'French'],
    Music: ['piano', 'harps', 'violin','guitar'],
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
    <img src={background} alt="" style={{
            position: 'absolute',
            width:"100%",
            height:"100%",
            pointerEvents: "none"
        }} />
        <Flex bg='#fcf2eb' align="center" justify="center" paddingTop="30" paddingBottom="50">
        <SearchBar2 />
        </Flex>
        <div style={{
            width: '100%',
            color:'#fcf2eb',
            backgroundColor:'#fcf2eb',
            background:'#fcf2eb'
            }}>
        <MatchedProfile 
            paddingTop="50"
            avatar={<Avatar src="https://joeschmoe.io/api/v1/Peter"/>}
            title="Alice"
            description="My main skill set is Korean, the violin, law, and breathing exercises"
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
