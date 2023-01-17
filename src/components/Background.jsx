import React from 'react';
import styled from 'styled-components';

const BackgroundImage = ({image}) => {
  return (
    <Container>
        <Image src={image}/>
    </Container>
  )
}

const Container = styled.div`
    position: relative;
    width: 100%;
`

const Image = styled.img`
    object-fit: cover;
    height: 230px;
    max-width: 1430px;
`

export default BackgroundImage