import styled from 'styled-components';

export const Restaurant = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin-top: 5px;
  padding: 16px;
  background-color: #fff;
  border-left: 5px solid transparent;

  :hover {
    background-color: ${(props) => props.theme.colors.background};
    border-color: ${(props) => props.theme.colors.primary};
  }
`;

export const RestaurantInfo = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 195px;
`;

export const Title = styled.h2`
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.text};
  font-size: 24px;
  font-weight: bold;
  line-height: 29px;
  margin-bottom: 10px;
`;

export const Address = styled.p`
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.text};
  font-size: 16px;
  line-height: 19px;
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const RestaurantPhoto = styled.img`
  display: ${({ imageLoaded }) => (imageLoaded ? 'block' : 'none')};
  width: 100px;
  height: 100px;
  border-radius: 6px;
  object-fit: cover;
`;
