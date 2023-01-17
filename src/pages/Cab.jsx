import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import Content from '../components/Content';
import cab from "../assets/cab.png";
import styled from 'styled-components';
import { MdNavigation, MdDateRange } from "react-icons/md";
import { IoMdArrowDropright } from "react-icons/io";
import { Button, ButtonLink } from '../components/Button';
import { LogoLink } from '../components/Logo';
import { links } from '../constants/cabs';

const Cab = () => {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const dates = new Date();

    let day = days[dates.getDay()]
    let date = dates.getDate();
    let time = dates.getHours() + ":" + dates.getMinutes();
  return (
    <Layout>
        <Content title="Cab" image={cab}/>
        <Center>
            <Flex>
                <Button margin="0 auto 20px auto"><MdNavigation color='#1A73E8' size={25}/>Your selected spot</Button>
                <Button margin="0 auto 20px auto"><MdDateRange color='#1A73E8' size={25}/>{day}</Button>
                <Button margin="0 auto 20px auto">{date}</Button>
                <Button margin="0 auto 20px auto">{time}</Button>
            </Flex>
        <Right>
            {links.map((link, i) => (
            <a key={i} href={link.link}>
                <ButtonLink>
                    <LogoLink src={link.logo}/>
                    {link.link}
                    <IoMdArrowDropright size={25} color="black"/>
                </ButtonLink>
            </a>
            ))
            }
        </Right>
        </Center>
    </Layout>
  )
}

const Center = styled.div`
    justify-content: center;
    width: 100%;
`
const Flex = styled.div`
    display: flex;
    justify-content: space-around;
    width: 50%;
    margin: 0 auto;
`

const Right = styled.div`
    width: max-content;
    margin-left: 18%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 20px;
`

export default Cab