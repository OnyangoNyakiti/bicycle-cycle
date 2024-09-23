import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import BikeCard from '../components/BikeCard';

const Home = () => {
    const featuredBikes = [
        { id: 1, model: 'Mountain X1', price: '35ksh', image: 'bike1.jpg' },
        { id: 2, model: 'Roadster Z', price: '30ksh', image: 'bike2.jpg' },
        { id: 3, model: 'bmx Z', price: '40ksh', image: 'bike3.jpg' },
        { id: 4, model: 'Trek Dual Sport', price: '45ksh', image: 'bike4.jpg' },
        { id: 5, model: 'Trek 520', price: '50ksh', image: 'bike5.jpg' },
    ];

    return (
        <Container>
            <Hero>
                <HeroContent>
                    <HeroText>Explore Campus the Eco-Friendly Way!</HeroText>
                    <Subtitle>Rent a bike and discover the joy of cycling around campus.</Subtitle>
                    <CTAButton to="/signup">Start Riding</CTAButton>
                </HeroContent>
            </Hero>
            <Section>
                <SectionTitle>Featured Bikes</SectionTitle>
                <BikeList>
                    {featuredBikes.map((bike) => (
                        <BikeCard key={bike.id} bike={bike} />
                    ))}
                </BikeList>
            </Section>
        </Container>
    );
};

export default Home;

const fadeInDown = keyframes`
    from {
        opacity: 0;
        transform: translateY(-20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

const fadeInUp = keyframes`
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

const Container = styled.div`
    padding: 0;
    background: linear-gradient(135deg, #00c6ff, #0072ff);
`;

const Hero = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60vh;
    background-image: url('/src/images/hero-bg.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    color: white;
    text-align: center;
    overflow: hidden;

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.4); 
    }
`;

const HeroContent = styled.div`
    position: relative;
    z-index: 1;
`;

const HeroText = styled.h1`
    font-size: 3rem;
    font-weight: 700;
    color: #ffffff;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
    margin-bottom: 1rem;
    animation: ${fadeInDown} 1s ease-in-out;
`;

const Subtitle = styled.p`
    font-size: 1.5rem;
    font-weight: 300;
    margin-bottom: 2rem;
    animation: ${fadeInUp} 1s ease-in-out;
`;

const CTAButton = styled(Link)`
    display: inline-block;
    margin-top: 1.5rem;
    background-color: #1e90ff;
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 30px;
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: bold;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    transition: background-color 0.3s ease, transform 0.3s ease;

    &:hover {
        background-color: #38989a;
        transform: translateY(-3px);
    }
`;

const Section = styled.section`
    padding: 3rem 2rem;
    background-color: #f7f9fc;
    border-radius: 30px 30px 0 0;
    margin-top: 30px;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 2rem;
  color: #333;
`;

const BikeList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  padding: 0 1rem;
`;
