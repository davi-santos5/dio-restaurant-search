import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';

import { setRestaurant, setRestaurants } from '../../redux/modules/restaurants';

export const MapContainer = (props) => {
  const dispatch = useDispatch();
  const [map, setMap] = useState(null);
  const { google, query, placeId } = props;
  const { restaurants } = useSelector((state) => state.restaurants);

  useEffect(() => {
    if (query) searchByQuery(query);
  }, [query]);

  useEffect(() => {
    if (placeId) getRestaurantDetails(placeId);
  }, [placeId]);

  function getRestaurantDetails() {
    const service = new google.maps.places.PlacesService(map);
    dispatch(setRestaurant(null));

    const request = {
      placeId,
      fields: [
        'name',
        'opening_hours',
        'formatted_address',
        'formatted_phone_number',
        'rating',
        'photos',
      ],
    };

    service.getDetails(request, (place, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        dispatch(setRestaurant(place));
      }
    });
  }

  function searchByQuery(query) {
    const service = new google.maps.places.PlacesService(map);
    dispatch(setRestaurants([]));

    const request = {
      location: map.center,
      radius: '2000',
      type: ['restaurant'],
      query,
    };

    service.textSearch(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        dispatch(setRestaurants(results));
      }
    });
  }

  function searchNearby(map, center) {
    const service = new google.maps.places.PlacesService(map);
    dispatch(setRestaurants([]));

    const request = {
      location: center,
      radius: '20000',
      type: ['restaurant'],
    };

    service.nearbySearch(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        dispatch(setRestaurants(results));
      }
    });
  }

  function onMapReady(_, map) {
    setMap(map);
    searchNearby(map, map.center);
  }

  const mapStyle = {
    width: 'calc(100% - 360px)',
    height: '100%',
  };

  return (
    <Map
      containerStyle={mapStyle}
      google={google}
      centerAroundCurrentLocation
      onReady={onMapReady}
      onRecenter={onMapReady}
      {...props}>
      {restaurants.map((restaurant) => (
        <Marker
          key={restaurant.place_id}
          name={restaurant.name}
          position={{
            lat: restaurant.geometry.location.lat(),
            lng: restaurant.geometry.location.lng(),
          }}
        />
      ))}
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  language: 'pt-BR',
})(MapContainer);
