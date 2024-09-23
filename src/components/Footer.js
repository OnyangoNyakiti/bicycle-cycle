import React from 'react';
import styled from 'styled-components';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'; // Import icons from react-icons

const Footer = () => {
    return (
        <FooterContainer>
            <Content>
                <Brand>Cycle</Brand>
                <Links>
                    <LinkItem href="#">About Us</LinkItem>
                    <LinkItem href="#">Contact</LinkItem>
                    <LinkItem href="#">Privacy Policy</LinkItem>
                </Links>
                <SocialMedia>
                    <SocialLink href="#">
                        <FaFacebookF />
                    </SocialLink>
                    <SocialLink href="#">
                        <FaTwitter />
                    </SocialLink>
                    <SocialLink href="#">
                        <FaInstagram />
                    </SocialLink>
                </SocialMedia>
            </Content>
            <Copyright>
                &copy; {new Date().getFullYear()} Cycle. All rights reserved.
            </Copyright>
        </FooterContainer>
    );
};

export default Footer;

const FooterContainer = styled.footer`
    background: linear-gradient(135deg, #0072ff, #00c6ff);
    color: #fff;
    padding: 1rem 1rem;
    text-align: center;
    position: relative;
    overflow: hidden;
    box-shadow: 0 -4px 15px rgba(0, 0, 0, 0.1);
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
`;

const Brand = styled.h2`
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 2px;
    background: linear-gradient(135deg, #ffffff, #e0e0e0);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

const Links = styled.div`
    display: flex;
    gap: 1.5rem;
    margin-bottom: 2rem;
`;

const LinkItem = styled.a`
    color: #fff;
    font-size: 1rem;
    text-decoration: none;
    transition: color 0.3s ease;
    &:hover {
        color: #ffd700;
    }
`;

const SocialMedia = styled.div`
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    margin-bottom: 2rem;
`;

const SocialLink = styled.a`
    color: #fff;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.2);
    transition: background 0.3s ease, transform 0.3s ease;

    &:hover {
        background: rgba(255, 255, 255, 0.4);
        transform: translateY(-3px);
    }
`;

const Copyright = styled.div`
    font-size: 0.9rem;
    color: #ddd;
    margin-top: 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    padding-top: 1rem;
`;
