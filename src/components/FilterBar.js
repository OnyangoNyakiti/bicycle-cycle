import React from 'react';
import styled from 'styled-components';

const FilterBar = ({ onFilterChange }) => {
    return (
        <FilterContainer>
            <FilterInput
                type="text"
                placeholder="Search Bikes..."
                onChange={(e) => onFilterChange(e.target.value)}
            />
            <FilterSelect onChange={(e) => onFilterChange(e.target.value)}>
                <option value="">All Types</option>
                <option value="mountain">Mountain</option>
                <option value="road">Road</option>
                <option value="hybrid">Hybrid</option>
            </FilterSelect>
        </FilterContainer>
    );
};

export default FilterBar;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 2rem 0;
    background: linear-gradient(135deg, #dcd9d9, #dcd9d9);
    padding: 1rem;
    border-radius: 20px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    max-width: 100%;
`;

const FilterInput = styled.input`
    width: 60%;
    padding: 0.75rem 1rem;
    border-radius: 30px;
    border: none;
    outline: none;
    background: linear-gradient(135deg, #ffffff, #e0e0e0);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    font-size: 1rem;
    color: #333;
    transition: box-shadow 0.3s ease, transform 0.3s ease;

    &:focus {
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        transform: translateY(-3px);
    }

    &::placeholder {
        color: #aaa;
    }
`;

const FilterSelect = styled.select`
    width: 35%;
    padding: 0.75rem 1rem;
    border-radius: 30px;
    border: none;
    outline: none;
    background: linear-gradient(135deg, #ffffff, #e0e0e0);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    font-size: 1rem;
    color: #333;
    transition: box-shadow 0.3s ease, transform 0.3s ease;

    &:hover {
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        transform: translateY(-3px);
    }
`;
