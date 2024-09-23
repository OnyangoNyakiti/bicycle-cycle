import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
    return (
        <Nav>
            <Logo><Link to="/">Cycle</Link></Logo>
            <Menu>
                <MenuItem><Link to="/">Home</Link></MenuItem>
                <MenuItem><Link to="/bikes">Bikes</Link></MenuItem>
                <MenuItem><Link to="/profile">Profile</Link></MenuItem>
                <MenuItem><Link to="/booking">Bookings</Link></MenuItem>
            </Menu>
            <Button><Link to="/contact">Contact Us</Link></Button>
        </Nav>
    );
};

export default Navbar;

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background: linear-gradient(135deg, #00c6ff, #0072ff);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const Logo = styled.h1`
    font-size: 1.5rem;
    font-weight: bold;
    color: white;
    transition: transform 0.3s ease;
    a {
        color: inherit;
        text-decoration: none;
    }
    &:hover {
        transform: scale(1.1);
    }
`;

const Menu = styled.ul`
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
`;

const MenuItem = styled.li`
    margin: 0 1.5rem;
    font-size: 1.1rem;
    a {
        color: white;
        text-decoration: none;
        position: relative;
        transition: color 0.3s ease;
        &::after {
            content: '';
            position: absolute;
            width: 0;
            height: 2px;
            background-color: #ff6347;
            left: 50%;
            bottom: -4px;
            transition: width 0.3s ease, left 0.3s ease;
        }
        &:hover {
            color: #ff6347;
            &::after {
                width: 100%;
                left: 0;
            }
        }
    }
`;

const Button = styled.div`
  background-color: #ff6347;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  a {
    color: white;
    text-decoration: none;
    font-weight: bold;
  }
  &:hover {
    background-color: #ff4500;
  }
  transition: background-color 0.3s ease;
`;
