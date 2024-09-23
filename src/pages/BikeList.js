import React, { useState } from 'react';
import styled from 'styled-components';
import FilterBar from '../components/FilterBar';
import BikeCard from '../components/BikeCard';

const BikeList = () => {
    const [filter, setFilter] = useState('');
    const bikes = [
        { id: 1, model: 'Mountain X1', type: 'mountain', price: '$5', image: 'bike1.jpg' },
        { id: 2, model: 'Roadster Z', type: 'road', price: '$4', image: 'bike2.jpg' },
    ];

    const filteredBikes = bikes.filter(bike => bike.model.toLowerCase().includes(filter.toLowerCase()) || bike.type.includes(filter));

    return (
        <Container>
            <FilterBar onFilterChange={setFilter} />
            <BikeGrid>
                {filteredBikes.map(bike => (
                    <BikeCard key={bike.id} bike={bike} />
                ))}
            </BikeGrid>
        </Container>
    );
};

export default BikeList;

const Container = styled.div`
  padding: 2rem;
`;

const BikeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
`;
