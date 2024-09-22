// src/pages/BikeDetails.js
import React from 'react';
import styled from 'styled-components';
// import { useParams } from 'react-router-dom';

const BikeDetails = () => {
    // const { id } = useParams();
    const bike = {
        id: 1,
        model: 'Mountain X1',
        type: 'mountain',
        price: '$5',
        image: '/images/bike1.jpg',
        description: 'A high-quality mountain bike for all terrains.',
        // Add more bike data as needed
    };

    return (
        <Container>
            <Image src={require(`../images/${bike.image}`)} alt={bike.model}/>
            <Content>
                <Title>{bike.model}</Title>
                <Description>{bike.description}</Description>
                <Price>{bike.price} / hour</Price>
                <Button>Rent Now</Button>
            </Content>
        </Container>
    );
};

export default BikeDetails;

const Container = styled.div`
  display: flex;
  gap: 2rem;
  padding: 2rem;
`;

const Image = styled.img`
  width: 50%;
  border-radius: 10px;
`;

const Content = styled.div`
  flex: 1;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin: 0;
`;

const Description = styled.p`
  margin: 1rem 0;
`;

const Price = styled.p`
  color: #ff6347;
  font-size: 1.5rem;
`;

const Button = styled.button`
  background-color: #1e90ff;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #ff6347;
  }
`;
