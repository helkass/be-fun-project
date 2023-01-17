import React from 'react';
import Layout from '../components/Layout';
import Content from '../components/Content';
import info from "../assets/info.png";
import styled from 'styled-components';
import { MdNavigation } from "react-icons/md";
import map from "../assets/map.png";
import { Button } from '../components/Button';

const Info = () => {
  return (
    <Layout>
        <Content title="Info" image={info}/>
        <Center>
            <Button margin="0 auto 20px auto" fs="18px"><MdNavigation color='#1A73E8' size={24}/>Your selected spot</Button>
            <Flex>
                <Image>
                    <img src={map}/>
                </Image>
                <About>
                    <p>About</p>
                    <List>Location :</List>
                    <List>Entry Free :</List>
                    <List>Timings :</List>
                </About>
            </Flex>
        </Center>
    </Layout>
  )
}

const Center = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
`

const Flex = styled.div`
    display: flex;
    gap: 10px;
    width: 80%;
    margin: auto;
    justify-content: space-evenly;
`

// const Button = styled.button`
//     display: flex;
//     font-size: 18px;
//     gap: 5px;
//     padding: 10px 16px 10px 10px;
//     border-radius: 5px;
//     box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.3);
//     align-items: center;
//     background: white;
//     margin: 0 auto 20px auto;
//     border: none;
//     cursor: pointer;
// `

const Image = styled.div`
    min-width: 70%;
    object-fit: contain;
    height: 200px;

    > img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
` 

const About = styled.div`
    width: 20%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px 20px ;
    text-align: center;
    box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.3);
    border-radius: 10px;

    > p {
        border-width: thin;
        position: relative;
        align-self: center;
        width: min-content;

        ::before {
            content: " ";
            position: absolute;
            display: block;
            bottom: 0;
            width: 70%;
            left: 50%;
            transform: translateX(-50%);
            border-bottom: 2px solid #1A73E8;

        }
    }
`
const List = styled.li`
    list-style: none;
    text-align: start;
`

export default Info