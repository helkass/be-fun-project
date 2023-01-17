import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import { FaGoogle } from "react-icons/fa";
import { ImFacebook } from "react-icons/im";
import login from "../assets/login.png";

const Login = () => {
  return (
    <Layout>
        <Flex>
            <Right>
                <Title>LOGIN</Title>
                <Input color="#1A73E8" type="text" placeholder="Enter your full name"/>
                <Input color="#0F9D58" type="email" placeholder="Enter your email account"/>
                <Input color="#F4B400" type="text" placeholder="Create an user name"/>
                <Input color="#DB4437" type="password" placeholder="Enter strong password"/>
                
                <Flex gap="20px" marginTop="30px">
                    <ButtonAuth><FaGoogle size={30}/></ButtonAuth>
                    <ButtonAuth buttonColor="#4285F4"><ImFacebook size={30}/></ButtonAuth>
                </Flex>
                <ButtonAuth width="300px" borderRadius="20px">Login with Google</ButtonAuth>
                <ButtonAuth width="300px" borderRadius="20px" buttonColor="#4285F4">Login with Facebook</ButtonAuth>
            </Right>
            <Left>
                <Image src={login}/>
            </Left>
        </Flex>
    </Layout>
  )
}
const Title = styled.h3`
    border-radius: 30px;
    padding: 7px 12px;
    box-shadow: -4px 4px 20px 0px rgba(0, 0, 0, 0.3);
`

const Flex = styled.div`
    display: flex;
    margin-top: ${props => props.marginTop};
    width: 100%;
    gap: ${props => props.gap || "10px"};
    justify-content: center;
`

const Right = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 40%;
    position: relative;
`

const Image = styled.img`
    width: 520px;
    top: 0;
    right: 10px;
    height: 520px;
    object-fit: cover;
    position: absolute;
`

const Left = styled.div`
    width: 50%;
    height: max-content;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Input = styled.input`
    padding: 5px 7px;
    border: none;
    border-bottom-style: dashed;
    width: 90%;
    font-size: 1.1rem;
    color: ${props => props.color};
    border-color: ${props => props.color};
    :focus{
        outline: none;
    }

    ::placeholder{
        font-size: 16px;
        color: ${props => props.color};
        opacity: 0.7;
    }
`

const ButtonAuth = styled.button`
    border-radius: ${props => props.borderRadius || "100%"};
    background-color: ${props => props.buttonColor || "#DB4437"};
    color: white;
    width: ${props => props.width || "45px"};
    padding: 8px;
    height: 45px;
    letter-spacing: 1px;
    text-decoration: underline;
    align-items: center;
    border: none;
    text-align: center;
    cursor: pointer;
    font-size: 1.1rem;
`

export default Login