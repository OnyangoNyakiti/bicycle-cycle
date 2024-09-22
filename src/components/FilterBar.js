// src/components/FilterBar.js
import React from 'react';
import styled from 'styled-components';

const FilterBar = ({ onFilterChange }) => {
    return (
        <FilterContainer>
            <FilterInput type="text" placeholder="Search Bikes..." onChange={(e) => onFilterChange(e.target.value)} />
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
  margin: 2rem 0;
`;

const FilterInput = styled.input`
  width: 60%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const FilterSelect = styled.select`
  width: 30%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 5px;
`;
