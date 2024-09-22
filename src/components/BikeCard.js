// src/components/BikeCard.js
import React from 'react';
import styled from 'styled-components';

const BikeCard = ({ bike }) => {
    return (
        <Card>
            <Image src={require(`../images/${bike.image}`)} alt={bike.model}/>
            <CardContent>
                <Model>{bike.model}</Model>
                <Price>{bike.price} / hour</Price>
                <Button>Rent Now</Button>
            </CardContent>
        </Card>
    );
};

export default BikeCard;

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.05);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 1rem;
  text-align: center;
`;

const Model = styled.h3`
  margin: 0;
  font-size: 1.5rem;
  color: #333;
`;

const Price = styled.p`
  margin: 0.5rem 0;
  color: #ff6347;
`;

const Button = styled.button`
  background-color: #1e90ff;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #ff6347;
  }
`;
