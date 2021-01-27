import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import { ImageCard, RestaurantCard, Modal, Map, Loader } from '../../components';
import { Wrapper, ContainerAside, Search, Logo, Carousel, CarouselTitle } from './styles';

import logo from '../../assets/logo.svg';
import restaurantFake from '../../assets/restaurante-fake.png';

const Home = () => {
  const [inputValue, setInputValue] = useState('');
  const [query, setQuery] = useState(null);
  const [placeId, setPlaceId] = useState(null);
  const [modalShow, setModalShow] = useState(false);
  const { restaurants, restaurantSelected } = useSelector((state) => state.restaurants);

  const sliderSettings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
  };

  const handleInputChange = (event) => setInputValue(event.target.value);
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') setQuery(inputValue);
  };
  const handleOpenDetailsModal = (placeId) => {
    setPlaceId(placeId);
    setModalShow(true);
  };

  return (
    <Wrapper>
      <ContainerAside>
        <Search>
          <Logo src={logo} alt="logo restaurant finder" />

          <TextField
            label="Pesquisar Restaurantes"
            outlined
            trailingIcon={<MaterialIcon role="button" icon="search" />}>
            <Input value={inputValue} onKeyPress={handleKeyPress} onChange={handleInputChange} />
          </TextField>
          {restaurants.length > 0 ? (
            <>
              <CarouselTitle>Na sua área</CarouselTitle>
              <Carousel {...sliderSettings}>
                {restaurants.map((restaurant) => (
                  <ImageCard
                    key={restaurant.place_id}
                    photo={restaurant.photos ? restaurant.photos[0].getUrl() : restaurantFake}
                    title={restaurant.name}
                  />
                ))}
              </Carousel>
            </>
          ) : (
            <Loader />
          )}
        </Search>
        {restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.place_id}
            onClick={() => handleOpenDetailsModal(restaurant.place_id)}
            restaurant={restaurant}
          />
        ))}
      </ContainerAside>

      <Map query={query} placeId={placeId} />
      <Modal
        open={modalShow}
        onClose={() => setModalShow(!modalShow)}
        restaurant={restaurantSelected}
      />
    </Wrapper>
  );
};

export default Home;
