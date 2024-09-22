// src/pages/Profile.js
import React from 'react';
import styled from 'styled-components';
import BookingSummary from './BookingSummary'; // Import the BookingSummary component

const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    membership: 'Premium',
};

const Profile = () => {
    return (
        <Container>
            <ProfileCard>
                <Avatar src="https://via.placeholder.com/100" alt="User Avatar" />
                <Info>
                    <Name>{user.name}</Name>
                    <Email>{user.email}</Email>
                    <Membership>{user.membership} Member</Membership>
                </Info>
            </ProfileCard>
            <BookingSummary /> {/* Display the booking summary in the profile */}
        </Container>
    );
};

export default Profile;

const Container = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: 2rem auto;
`;

const ProfileCard = styled.div`
  display: flex;
  align-items: center;
  background-color: #f5f5f5;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
`;

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 1.5rem;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.h2`
  font-size: 1.5rem;
  margin: 0;
`;

const Email = styled.p`
  font-size: 1rem;
  color: #555;
  margin: 0.5rem 0;
`;

const Membership = styled.span`
  font-size: 0.9rem;
  color: #1e90ff;
  background-color: #e6f7ff;
  padding: 0.3rem 0.6rem;
  border-radius: 5px;
  margin-top: 0.5rem;
  width: fit-content;
`;
