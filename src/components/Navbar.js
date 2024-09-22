// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
    return (
        <Nav>
            <Logo>BikeRent</Logo>
            <Menu>
                <MenuItem><Link to="/">Home</Link></MenuItem>
                <MenuItem><Link to="/bikes">Bikes</Link></MenuItem>
                <MenuItem><Link to="/profile">Profile</Link></MenuItem>
                <MenuItem><Link to="/booking">Bookings</Link></MenuItem>
            </Menu>
        </Nav>
    );
};

export default Navbar;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1e90ff;
  padding: 1rem 2rem;
`;

const Logo = styled.h1`
  color: white;
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;
`;

const MenuItem = styled.li`
  margin: 0 1rem;
  a {
    color: white;
    text-decoration: none;
    &:hover {
      color: #ff6347;
    }
  }
`;
