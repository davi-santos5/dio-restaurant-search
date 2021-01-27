/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import ReactStars from 'react-rating-stars-component';

import Portal from './Portal';

import { Skeleton } from '../../components';

import RestaurantPhoto from './components/RestaurantPhoto';
import { Overlay, Dialog, Title, Content, Carousel } from './styles';

const Modal = ({ open, onClose, restaurant }) => {
  useEffect(() => {
    function onEsc(e) {
      if (e.keyCode === 27) onClose();
    }

    window.addEventListener('keydown', onEsc);

    return () => {
      window.removeEventListener('keydown', onEsc);
    };
  }, [onClose]);

  if (!open) return null;

  function onOverlayClick() {
    onClose();
  }

  function onDialogClick(e) {
    e.stopPropagation();
  }

  const sliderSettings = {
    dots: false,
    infinite: true,
    autoplay: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  return (
    <Portal>
      <Overlay onClick={onOverlayClick}>
        <Dialog onClick={onDialogClick}>
          {restaurant ? (
            <>
              <Title>{restaurant?.name}</Title>

              <ReactStars
                count={5}
                isHalf
                value={restaurant.rating}
                edit={false}
                activeColor="#e7711c"
              />

              <Content>{restaurant?.formatted_phone_number}</Content>
              <Content>{restaurant?.formatted_address}</Content>
              <Content>
                {restaurant?.opening_hours?.open_now
                  ? 'Aberto agora :D'
                  : 'Fechado neste momento :('}
              </Content>
              <Carousel {...sliderSettings}>
                {restaurant.photos.map((photo) => {
                  return (
                    <RestaurantPhoto
                      key={photo.html_attributions[0]}
                      src={photo.getUrl()}
                      alt={restaurant.name}
                    />
                  );
                })}
              </Carousel>
            </>
          ) : (
            <>
              <Skeleton width="20px" height="30px" />
              <Skeleton width="30px" height="20px" />
              <Skeleton width="30px" height="20px" />
              <Skeleton width="30px" height="20px" />
              <Skeleton width="30px" height="20px" />
              <Carousel {...sliderSettings}>
                <Skeleton width="250px" height="220px" />
                <Skeleton width="250px" height="220px" />
                <Skeleton width="250px" height="220px" />
              </Carousel>
            </>
          )}
        </Dialog>
      </Overlay>
    </Portal>
  );
};

export default Modal;
