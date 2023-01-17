import React from 'react';
import Layout from '../components/Layout';
import { LogoLink } from '../components/Logo';
import { Button, ButtonLink } from '../components/Button';
import Content from '../components/Content';
import styled from 'styled-components';
import { IoMdArrowDropright } from "react-icons/io";

const LayoutCenter = (props) => {
  return (
    <Layout>
        <Content title={props.title} image={props.image}/>
        <Center>
          <Button>
            <Img src={props.vector}/> 
            {props.btnTitle}
          </Button>
          <Container>
          {
            props.links.map((link, i) => (
              <a key={i} href={link.link}>
                <ButtonLink>
                  <LogoLink src={link.logo}/>
                  {link.link}
                  <IoMdArrowDropright size={25} color="black"/>
                </ButtonLink>
              </a>
            ))
          }
          </Container>
        </Center>
    </Layout>

  )
}

const Center = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
`

const Img = styled.img`
  width: 9px;
  height: 22px;
  object-fit: cover;
`

const Container = styled.div`
  gap: 10px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default LayoutCenter;