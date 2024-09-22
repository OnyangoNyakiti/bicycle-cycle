// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return (
        <FooterContainer>
            <Content>
                <Brand>BikeRent</Brand>
                <Links>
                    <LinkItem href="#">About Us</LinkItem>
                    <LinkItem href="#">Contact</LinkItem>
                    <LinkItem href="#">Privacy Policy</LinkItem>
                </Links>
                <SocialMedia>
                    <SocialLink href="#">Facebook</SocialLink>
                    <SocialLink href="#">Twitter</SocialLink>
                    <SocialLink href="#">Instagram</SocialLink>
                </SocialMedia>
            </Content>
            <Copyright>
                &copy; {new Date().getFullYear()} BikeRent. All rights reserved.
            </Copyright>
        </FooterContainer>
    );
};

export default Footer;

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 2rem 0;
  text-align: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const Brand = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1rem;
`;

const Links = styled.div`
  margin-bottom: 1rem;
`;

const LinkItem = styled.a`
  color: #fff;
  margin: 0 0.5rem;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const SocialMedia = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const SocialLink = styled.a`
  color: #fff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Copyright = styled.div`
  font-size: 0.9rem;
  color: #ccc;
`;
