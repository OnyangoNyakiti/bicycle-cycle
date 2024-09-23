import React from 'react';
import styled, { keyframes } from 'styled-components';

const bookings = [
    {
        id: 1,
        model: 'Mountain X1',
        duration: '2 hours',
        price: '$10',
        date: '2024-09-22',
    },
];

const BookingSummary = () => {
    return (
        <Container>
            <Title>Your Bookings</Title>
            {bookings.length > 0 ? (
                bookings.map((booking) => (
                    <BookingCard key={booking.id}>
                        <Model>{booking.model}</Model>
                        <Details>
                            <Detail><strong>Duration:</strong> {booking.duration}</Detail>
                            <Detail><strong>Price:</strong> {booking.price}</Detail>
                            <Detail><strong>Date:</strong> {booking.date}</Detail>
                        </Details>
                    </BookingCard>
                ))
            ) : (
                <Message>No bookings found. Start renting a bike today!</Message>
            )}
        </Container>
    );
};

export default BookingSummary;

const fadeIn = keyframes`
    from {
        opacity: 0;
        transform: translateY(10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

const Container = styled.div`
    padding: 2rem;
    max-width: 800px;
    margin: 2rem auto;
    background: linear-gradient(135deg, #00c6ff, #0072ff);
    border-radius: 20px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    color: white;
`;

const Title = styled.h2`
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 2rem;
    animation: ${fadeIn} 1s ease-in-out;
`;

const BookingCard = styled.div`
    background: linear-gradient(135deg, #ffffff, #f7f9fc);
    border-radius: 15px;
    padding: 1.5rem;
    margin-bottom: 1.5rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    animation: ${fadeIn} 0.5s ease-in-out;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    color: #333;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
    }
`;

const Model = styled.h3`
    font-size: 1.8rem;
    margin-bottom: 1rem;
    color: #0072ff;
`;

const Details = styled.div`
    font-size: 1rem;
    color: #555;
    line-height: 1.5;
`;

const Detail = styled.p`
    margin: 0.5rem 0;
`;

const Message = styled.p`
  text-align: center;
  font-size: 1.3rem;
  color: #f7f9fc;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 1rem;
  border-radius: 10px;
  animation: ${fadeIn} 1s ease-in-out;
`;
