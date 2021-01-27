import React, { useState } from 'react';
import ReactStars from 'react-rating-stars-component';

import { Restaurant, RestaurantInfo, Title, Address, RestaurantPhoto } from './styles';

import restaurantFake from '../../assets/restaurante-fake.png';
import { Skeleton } from '../../components';

const RestaurantCard = ({ restaurant, onClick }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Restaurant onClick={onClick}>
      <RestaurantInfo>
        <Title>{restaurant.name}</Title>
        <ReactStars count={5} isHalf value={restaurant.rating} edit={false} activeColor="#e7711c" />
        <Address>{restaurant.vicinity || restaurant.formatted_address}</Address>
      </RestaurantInfo>
      <RestaurantPhoto
        src={restaurant.photos ? restaurant.photos[0].getUrl() : restaurantFake}
        alt={restaurant.name}
        onLoad={() => {
          setImageLoaded(true);
        }}
        imageLoaded={imageLoaded}
      />
      {!imageLoaded && <Skeleton width="100px" height="100px" />}
    </Restaurant>
  );
};

export default RestaurantCard;
