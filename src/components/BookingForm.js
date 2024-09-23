import React, { useState } from 'react';
import styled from 'styled-components';

const BookingForm = ({ bike }) => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [duration, setDuration] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Booking: ${bike.model}, Date: ${date}, Time: ${time}, Duration: ${duration}`);
        alert('Booking confirmed!');
    };

    return (
        <FormContainer onSubmit={handleSubmit}>
            <Title>Book {bike.model}</Title>
            <Label>Date</Label>
            <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />

            <Label>Time</Label>
            <Input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />

            <Label>Duration (hours)</Label>
            <Input type="number" min="1" value={duration} onChange={(e) => setDuration(e.target.value)} required />

            <SubmitButton type="submit">Confirm Booking</SubmitButton>
        </FormContainer>
    );
};

export default BookingForm;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: #f9f9f9;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h3`
  margin-bottom: 1rem;
  font-size: 1.5rem;
`;

const Label = styled.label`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  padding: 0.75rem;
  border-radius: 5px;
  border: 1px solid #ddd;
  font-size: 1rem;
`;

const SubmitButton = styled.button`
  background-color: #1e90ff;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 1rem;
  font-size: 1rem;
  &:hover {
    background-color: #1c86e0;
  }
`;
