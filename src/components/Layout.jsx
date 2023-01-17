import React from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import Header from './Header';

const Layout = ({children}) => {
  return (
    <Section>
      <Header/>
      <Flex>
        <Sidebar/>
        <Column>
          {children}
        </Column>
      </Flex>
    </Section>
  )
}

const Section = styled.section`
  max-width: 1920px;
  width: 100%;
  position: relative;
  height: 100vh;
  padding: 0 2rem;
`
const Flex = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
`

const Column = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`

export default Layout;