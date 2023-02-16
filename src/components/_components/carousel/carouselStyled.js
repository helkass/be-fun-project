import styled from "styled-components";

export const CarouselWrapper = styled.div`
  overflow-x: hidden;
  width: 100%;
  margin-top: 1rem;
  position: relative;
  border-radius: 15px;
  transition: all 0.5s ease-in;
`;

export const ImageCarousel = styled.img`
  object-fit: cover;
  width: 100%;
  height: 300px;
  transition: all 0.5s ease-in;
  transition-delay: 0.5ms;
  border-radius: 15px;
`;

export const ButtonCarousel = styled.button`
  border-radius: 100%;
  padding: 10px;
  background: white;
  color: ${(props) => props.theme.text.gray};
  box-shadow: ${(props) => props.theme.shadow.sm};
  align-items: center;
  cursor: pointer;
  display: ${(props) => (props.eventMouse && "none") || "flex"};
  transition: all 0.7s ease-in-out;
  justify-content: center;
`;

export const ButtonWrapperBack = styled.div`
  position: absolute;
  left: -15px;
  top: 40%;
`;

export const ButtonWrapperForward = styled.div`
  position: absolute;
  right: -15px;
  top: 40%;
`;
