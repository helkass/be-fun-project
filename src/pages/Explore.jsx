import React from 'react'
import styled from 'styled-components'
import Content from '../components/Content'
import Layout from '../components/Layout';
import { MdLocationOn } from "react-icons/md"
import image from "../assets/explore.png";
import { BsFillTreeFill } from "react-icons/bs";
import { Button } from "../components/Button";

const Explore = () => {
  return (
    <Layout>
        <Content image={image} title="Explore"/>
        <Flex>
            <Button><Bullet/>Your location</Button>
            <Button><MdLocationOn size={25} color="#4285F4"/>Nearest spot</Button>
        </Flex>
        <Grid>
            <List><span>1 kms</span> Write nearest picnic spot <BsFillTreeFill color='#0F9D58'/></List>
            <List><span>1 kms</span> Write nearest picnic spot <BsFillTreeFill color='#0F9D58'/></List>
            <List><span>1 kms</span> Write nearest picnic spot <BsFillTreeFill color='#0F9D58'/></List>
            <List><span>1 kms</span> Write nearest picnic spot <BsFillTreeFill color='#0F9D58'/></List>
        </Grid>
    </Layout>
  )
}

const Flex = styled.div`
    display: flex;
    margin: 0 auto;
    width: 90%;
    justify-content: center;
    gap: 10px;
`

const Bullet = styled.span`
    border: 2px solid #4285F4 ;
    border-radius: 100%;
    width: 10px;
    height: 10px;

`

const Grid = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    justify-content: center;
    margin-top: 20px;
    gap: 10px;
    width: 100%;
`

const List = styled.li`
    display: flex;
    box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.3);
    padding: 7px 10px;
    align-items: center;
    justify-content: flex-end;
    border-radius: 5px;
    gap: 10px;
    min-width: 300px;
    font-size: 16px;
    justify-content: space-between;

`

export default Explore;