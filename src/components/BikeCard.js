import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const BikeCard = ({ bike }) => {
    return (
        <Card>
            <Image src={require(`../images/${bike.image}`)} alt={bike.model} />
            <CardContent>
                <Model>{bike.model}</Model>
                <Price>{bike.price} / hour</Price>
                <Link to={`/payment/${bike.id}`}>
                    <Button>Rent Now</Button>
                </Link>
            </CardContent>
        </Card>
    );
};

export default BikeCard;

const Card = styled.div`
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s, box-shadow 0.3s;
    background: linear-gradient(135deg, #f5f5f5, #e0e0e0);
    position: relative;

    &:hover {
        transform: scale(1.05);
        box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
    }
`;

const Image = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
    transition: transform 0.3s;

    ${Card}:hover & {
        transform: scale(1.1);
    }
`;

const CardContent = styled.div`
    padding: 1rem;
    text-align: center;
`;

const Model = styled.h3`
    margin: 0;
    font-size: 1.6rem;
    color: #333;
    font-weight: bold;
`;

const Price = styled.p`
    margin: 0.5rem 0;
    color: #ff6347;
    font-size: 1.2rem;
`;

const Button = styled.button`
    background-color: #1e90ff;
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 30px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s, transform 0.3s;

    &:hover {
        background-color: #ff6347;
        transform: translateY(-2px);
    }
`;
