import styled from "styled-components";

export const ButtonCarousel = styled.button`
  border-radius: 100%;
  padding: 10px;
  background: white;
  color: ${(props) => props.theme.text.gray};
  box-shadow: ${(props) => props.theme.shadow.sm};
  align-items: center;
  cursor: pointer;
  transition: all 0.7s ease-in-out;
  justify-content: center;
`;

export const ButtonWrapperBack = styled.div`
  display: ${(props) => (props.eventMouse ? "none" : "flex")};
  position: absolute;
  left: -15px;
  top: 40%;
  z-index: 99;
  cursor: pointer;

  &:hover {
    display: flex;
  }
`;

export const ButtonWrapperForward = styled.div`
  display: ${(props) => (props.eventMouse ? "none" : "flex")};
  position: absolute;
  right: -15px;
  z-index: 99;
  top: 40%;
  cursor: pointer;
  &:hover {
    display: flex;
  }
`;
