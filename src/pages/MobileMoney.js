import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

const MobileMoney = () => {
    const { id } = useParams(); // Get bike ID from URL

    const handleMobileMoneyPayment = () => {
        // Implement mobile money payment logic here
        console.log(`Processing mobile money payment for bike ID: ${id}`);
    };

    return (
        <Container>
            <Title>Pay via Mobile Money</Title>
            <Instructions>
                To complete your payment for bike ID: {id}, please follow the instructions below:
                <ol>
                    <li>Open your mobile money app.</li>
                    <li>Enter the payment number: +123456789</li>
                    <li>Input the amount you wish to pay.</li>
                    <li>Confirm the payment.</li>
                </ol>
            </Instructions>
            <Button onClick={handleMobileMoneyPayment}>Confirm Payment</Button>
        </Container>
    );
};

export default MobileMoney;

// Styled Components
const Container = styled.div`
    max-width: 500px;
    margin: 2rem auto;
    padding: 2rem;
    background: linear-gradient(135deg, #f5f5f5, #e0e0e0);
    border-radius: 10px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h2`
    text-align: center;
    margin-bottom: 1.5rem;
`;

const Instructions = styled.p`
    margin-bottom: 1rem;
`;

const Button = styled.button`
    background-color: #1e90ff;
    color: white;
    border: none;
    padding: 0.75rem;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s;

    &:hover {
        background-color: #ff6347;
    }
`;
