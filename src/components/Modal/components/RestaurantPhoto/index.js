import React from 'react';
import styled from 'styled-components';

const Card = styled.img`
  width: 250px;
  height: 220px;
  border-radius: 6px;
  object-fit: cover;
  margin: 0;
`;

const RestaurantPhoto = ({ key, src, alt }) => {
  return <Card key={key} src={src} alt={alt} />;
};

export default RestaurantPhoto;
