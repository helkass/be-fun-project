import React from 'react';
import image from "../assets/home.png";
import Layout from "../components/Layout";
import Content from '../components/Content';
import { FiSearch } from "react-icons/fi";
import styled from 'styled-components';
import Sidebar from '../components/Sidebar';

const Home = () => {
  return (
    <Layout>
        <Content title="Travel" image={image}/>
        <Center>
            <Search><FiSearch size={28}/><Input/></Search>
            <Sidebar direction="row" color="#4285F4"/>
        </Center>
    </Layout>
  )
}

const Center = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Search = styled.div`
    box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.3);
    border-radius: 20px;
    padding: 5px 7px;
    display: flex;
    align-items: center;
    width: 400px;
    margin: 0 auto;
`

const Input = styled.input`
    border: none;
    padding: 4px 6px;
    font-size: 1.3rem;

    :focus{
        outline: none;
    }
`

export default Home;