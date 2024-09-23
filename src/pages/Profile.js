import React, { useState } from 'react';
import styled from 'styled-components';
import BookingSummary from './BookingSummary'; // Import the BookingSummary component

const user = {
    name: 'Malcolm Onyango',
    email: 'onyangomalcolm@gmail.com',
    membership: 'Free',
};

const Profile = () => {
    const [profileImage, setProfileImage] = useState('https://via.placeholder.com/100');

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <Container>
            <ProfileCard>
                <AvatarContainer>
                    <Avatar src={profileImage} alt="User Avatar" />
                    <UploadButton>
                        <input type="file" accept="image/*" onChange={handleImageUpload} />
                        <UploadLabel>Upload Photo</UploadLabel>
                    </UploadButton>
                </AvatarContainer>
                <Info>
                    <Name>{user.name}</Name>
                    <Email>{user.email}</Email>
                    <Membership>{user.membership} Member</Membership>
                </Info>
            </ProfileCard>
            <BookingSummary />
        </Container>
    );
};

export default Profile;

const Container = styled.div`
    padding: 2rem;
    max-width: 800px;
    margin: 2rem auto;
    background: linear-gradient(135deg, #00c6ff, #0072ff);
    border-radius: 20px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    color: white;
`;

const ProfileCard = styled.div`
    display: flex;
    align-items: center;
    background: linear-gradient(135deg, #ffffff, #f7f9fc);
    border-radius: 20px;
    padding: 2rem;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    margin-bottom: 2rem;
    color: #333;
    overflow: hidden;
    position: relative;
`;

const AvatarContainer = styled.div`
    position: relative;
    width: 120px;
    height: 120px;
    margin-right: 1.5rem;
    border-radius: 50%;
    overflow: hidden;
    border: 4px solid #0072ff;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
`;

const Avatar = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const UploadButton = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.5);
    text-align: center;
    opacity: 0;
    cursor: pointer;
    transition: opacity 0.3s ease;

    input {
        display: none;
    }

    &:hover {
        opacity: 1;
    }
`;

const UploadLabel = styled.label`
    font-size: 0.9rem;
    color: white;
    padding: 0.5rem;
    display: block;
`;

const Info = styled.div`
    display: flex;
    flex-direction: column;
`;

const Name = styled.h2`
  font-size: 1.8rem;
  margin: 0;
  color: #0072ff;
`;

const Email = styled.p`
  font-size: 1rem;
  color: #555;
  margin: 0.5rem 0;
`;

const Membership = styled.span`
  font-size: 0.9rem;
  color: #ffffff;
  background-color: #1e90ff;
  padding: 0.3rem 0.6rem;
  border-radius: 5px;
  margin-top: 0.5rem;
  width: fit-content;
  box-shadow: 0 2px 8px rgba(30, 144, 255, 0.3);
`;
