import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle sign-up logic here
    };

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Title>Create an Account</Title>
                <Input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <Input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <Input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                <SubmitButton type="submit">Sign Up</SubmitButton>
                <SwitchForm>
                    Already have an account? <Link to="/signin">Sign In</Link>
                </SwitchForm>
            </Form>
        </Container>
    );
};

export default SignUp;

const Container = styled.div`
  max-width: 400px;
  margin: 2rem auto;
  padding: 2rem;
  background: linear-gradient(135deg, #f5f5f5, #e0e0e0);
  border-radius: 10px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 1.5rem;
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

const SubmitButton = styled.button`
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

const SwitchForm = styled.p`
  text-align: center;
  margin-top: 1rem;
`;
