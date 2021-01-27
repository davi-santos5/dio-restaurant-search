import styled from 'styled-components';
import Slider from 'react-slick';

export const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

export const ContainerAside = styled.aside`
  background-color: ${(props) => props.theme.colors.background};
  width: 360px;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const Search = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;

  background-color: #fff;

  padding: 16px;
`;

export const Logo = styled.img`
  margin-bottom: 16px;
`;

export const Carousel = styled(Slider)`
  .slick-slide {
    margin-right: 30px;
  }
`;

export const CarouselTitle = styled.h1`
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.fonts.regular};
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  margin: 16px 0;
`;
