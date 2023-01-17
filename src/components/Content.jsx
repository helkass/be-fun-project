import React from 'react';
import BackgroundImage from './Background';
import styled from 'styled-components';

const Content = (props) => {
  return (
        <Center>
            <BackgroundImage image={props.image}/>
            <Title>{props.title}</Title>
        </Center>
  )
}

const Title = styled.span`
    font-size: 3rem;
`

const Center = styled.div`
    display: grid;
    transform: translateY(-1.8rem);
    z-index: -1;
    gap: 2.5rem;
    width: 100%;
    text-align: center;
`

export default Content