import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"
import { MdOutlineExplore, MdOutlineInfo, MdHotel, MdOutlineFastfood } from "react-icons/md";
import { AiFillCar } from "react-icons/ai";

const Sidebar = ({direction, color}) => {
  return (
    <Nav direction={direction}>
        <Link to="/explore">
            <Item>
                <MdOutlineExplore color={color} size={30}/>
            </Item>
        </Link>
        <Link to="/info">
            <Item>
                <MdOutlineInfo color={color} size={30}/>
            </Item>
        </Link>
        <Link to="/cab">
            <Item>
                <AiFillCar color={color} size={30}/>
            </Item>
        </Link>
        <Link to="/hotel">
            <Item>
                <MdHotel color={color} size={30}/>
            </Item>
        </Link>
        <Link to="/food">
            <Item>
                <MdOutlineFastfood color={color} size={30}/>
            </Item>
        </Link>
    </Nav>
  )
}

const Nav = styled.nav`
    display: flex;
    flex-direction: ${props => props.direction || "column"};
    gap: 2rem;
    margin-top: 30px;
`

const Item = styled.li`
    list-style: none;
    display: flex;
    align-items: center;
    border-radius: 100%;
    color: "inherit";
    padding: 10px;
    :hover{
        background-color: #f2f6fc;
    }
`

export default Sidebar