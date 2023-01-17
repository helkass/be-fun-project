import React from 'react';
import styled from 'styled-components';
import logo from "../assets/logo.png";
import { Link } from 'react-router-dom';
import user from "../assets/user.png";

const Header = () => {
  return (
    <Head>
        <Link to="/">
            <img className='logo' src={logo}/>
        </Link>
        <Link to="/login">
            <Image src={user}/>
        </Link>
    </Head>
  )
}

const Head = styled.header`
    display: flex;
    z-index: 10;
    width: 100%;
    justify-content: space-between;
    padding: 10px 0;
    align-items: center;
`
const Image = styled.img`
    width: 3rem;
    height: 100%;
    object-fit: cover;
`

export default Header