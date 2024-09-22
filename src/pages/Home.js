// src/pages/Home.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import BikeCard from '../components/BikeCard';

const Home = () => {
    const featuredBikes = [
        { id: 1, model: 'Mountain X1', price: '$5', image: 'bike1.jpg' },
        { id: 2, model: 'Roadster Z', price: '$4', image: 'bike2.jpg' },
        // Add more bikes as needed
    ];

    return (
        <Container>
            <Hero>
                <HeroText>Explore Campus the Eco-Friendly Way!</HeroText>
                <CTAButton to="/bikes">Start Riding</CTAButton>
            </Hero>
            <SectionTitle>Featured Bikes</SectionTitle>
            <BikeList>
                {featuredBikes.map((bike) => (
                    <BikeCard key={bike.id} bike={bike} />
                ))}
            </BikeList>
        </Container>
    );
};

export default Home;

const Container = styled.div`
  padding: 0 2rem;
`;

const Hero = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50vh;
  background-image: url('/src/images/hero-bg.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  ////color: white;
`;

const HeroText = styled.h1`
  font-size: 2.5rem;
`;

const CTAButton = styled(Link)`
  margin-top: 2rem;
  background-color: #ff6347;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
  text-decoration: none;
  &:hover {
    background-color: #1e90ff;
  }
`;

const SectionTitle = styled.h2`
  margin: 2rem 0;
`;

const BikeList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
    padding: 1rem;
`;
