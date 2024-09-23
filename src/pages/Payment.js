import React, { useState } from 'react';
import styled from 'styled-components';
import { useParams, Link } from 'react-router-dom';

const Payment = () => {
    const { id } = useParams(); // Get bike ID from URL
    const [amount, setAmount] = useState('');

    const handlePayment = (e) => {
        e.preventDefault();
        // Implement payment logic here
        console.log(`Processing payment of ${amount} for bike ID: ${id}`);
    };

    return (
        <Container>
            <Title>Payment for Bike ID: {id}</Title>
            <Form onSubmit={handlePayment}>
                <Input
                    type="text"
                    placeholder="Enter Amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                />
                <Button type="submit">Proceed to Pay</Button>
            </Form>
            <MobileMoneyButton>
                <Link to={`/mobile-money/${id}`}>
                    <Button>Pay via Mobile Money</Button>
                </Link>
            </MobileMoneyButton>
        </Container>
    );
};

export default Payment;

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

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    margin-bottom: 1rem;
    padding: 0.75rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 1rem;
    transition: border-color 0.3s;

    &:focus {
        border-color: #1e90ff;
    }
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
        background-color: #328283;
    }
`;

const MobileMoneyButton = styled.div`
    text-align: center;
    margin-top: 1rem;
`;
