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
  background,
} from '@chakra-ui/react';
import {Link} from "react-router-dom";
import Profile from "../routes/profile"
import {theme} from "../theme"
import { LikeOutlined, EllipsisOutlined, MailOutlined } from '@ant-design/icons';
import { Avatar, Card, Skeleton, Switch } from 'antd';
import React, { useState } from 'react';
const { Meta } = Card;


const MatchedProfile = (props) => {

    // const [name, setName] = useState("");
    // const [description, setDescription] = useState("");
    return (
      <>
  
        <Card
          style={{
            width: 550,
            marginTop: 16,
            marginLeft: "auto",
            marginRight: "auto",
            background:"#72b01d"
          }}

          bodyStyle={
              {
                  color:"#72b01d",
                  background:"#e0f5c3"
              }
          }
          actions={[
            <MailOutlined 
            key="mail" />,
            <LikeOutlined key="like"/>,
            <EllipsisOutlined key="ellipsis" />,
          ]}
        >

            <Meta
            avatar={props.avatar}
            title={props.title}
            description={props.description}
          />
          
        </Card>

      </>
    );
  };
  export default MatchedProfile;