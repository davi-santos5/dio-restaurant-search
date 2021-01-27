import styled from 'styled-components';
import Slider from 'react-slick';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  background-color: rgba(78, 89, 131, 0.5);
  backdrop-filter: blur(5px);

  z-index: 999;
`;

export const Dialog = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-height: calc(100% - 144px);
  width: 500px;
  padding: 24px;
  background-color: #fff;
  box-shadow: 0px 0px 32px rgba(78, 89, 131, 0.2);
  border-radius: 8px;
`;

export const Title = styled.h2`
  margin-bottom: 10px;
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: 24px;
  font-weight: bold;
  line-height: 29px;
`;

export const Content = styled.p`
  margin-bottom: 10px;
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: 16px;
  font-weight: normal;
  line-height: 19px;
`;

export const Carousel = styled(Slider)`
  .slick-slide {
    margin-right: 10px;
  }
`;
