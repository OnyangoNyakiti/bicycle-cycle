import React from 'react';
import styled from 'styled-components';

const bookings = [
    {
        id: 1,
        model: 'Mountain X1',
        duration: '2 hours',
        price: '$10',
        date: '2024-09-22',
    },
    // Add more booking data as needed
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

const Container = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: 2rem auto;
`;

const Title = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
`;

const BookingCard = styled.div`
  background-color: #f5f5f5;
  border-radius: 10px;
  padding: 1.5rem;
  margin-bottom: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Model = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const Details = styled.div`
  font-size: 1rem;
  color: #555;
`;

const Detail = styled.p`
  margin: 0.5rem 0;
`;

const Message = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: #777;
`;
