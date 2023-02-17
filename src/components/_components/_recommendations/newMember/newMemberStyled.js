import styled, { keyframes } from "styled-components";

export const NewMemberWrapper = styled.section`
  border-top: 1px solid ${(props) => props.theme.border.gray};
  border-bottom: 1px solid ${(props) => props.theme.border.gray};
  padding: 20px 0;
  margin: 1.8rem 0;
  background-color: white;

  @media (max-width: 600px) {
    margin: 0;
    border: none;
    padding: 20px 0;
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: nowrap;
  align-items: end;

  > span {
    color: ${(props) => props.theme.text.gray};
    font-size: 0.9rem;
  }

  @media (max-width: 600px) {
    justify-content: space-between;
    padding-right: 3%;
  }
`;

export const FlexWrapper = styled.div`
  display: flex;
  gap: 10;

  @media (max-width: 600px) {
    flex-direction: column;
    padding-left: 3%;
  }
`;

export const ClockWrapper = styled.div`
  display: flex;
  gap: 6px;
  flex-wrap: nowrap;
  align-items: center;
  color: red;

  @media (max-width: 600px) {
    gap: 0;
    background: ${(props) => props.theme.red};
    font-size: 0.845rem;
    border-radius: 10px;
    padding: 3px;
  }
`;

export const Clock = styled.span`
  width: 35px;
  height: 35px;
  border-radius: 7px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.red};
  color: white;
  position: relative;

  @media (max-width: 600px) {
    border-radius: 0;
    height: max-content;
    width: max-content;
    background-color: inherit;
    padding: 1px 3px;

    &:not(:last-child)::after {
      position: absolute;
      content: ":";
      z-index: 1;
      right: -2px;
      top: 0;
      transform: translateY(25%);
    }
  }
`;

export const MainContent = styled.div`
  display: flex;
  position: relative;
  overflow: hidden;
  border-radius: 15px;
  position: relative;
  align-items: center;
  /* z-index: -2; */
  height: 340px;
  margin: 1.4rem 0;

  @media (max-width: 600px) {
    min-height: 140px;
  }
`;

export const BannerWrapper = styled.div`
  position: absolute;
  background: linear-gradient(rgb(6, 166, 135), rgb(4, 120, 98));
  width: 25%;
  height: 100%;
  z-index: -1;
  border-radius: 15px;
  animation-duration: 0.4s;
  transition-delay: 0.8ms;
  transition-duration: 0.7ms;
  transition: all;
  transition-timing-function: ease;
  transform: ${(props) =>
    props.slideMove ? "translateX(0)" : "translateX(-100%)"};

  @media (max-width: 600px) {
    min-width: 100vw;
    height: calc(100% - 2rem);
    z-index: -1;
    border-radius: 0;
  }
`;

export const BannerImage = styled.img`
  position: absolute;
  object-fit: contain;
  height: 100%;
  left: 20px;
`;

export const SlidesWrapper = styled.div`
  display: flex;
  overflow: auto;
  gap: 15px;
  justify-content: end;
  flex-wrap: nowrap;
  position: absolute;
  scroll-behavior: smooth;
  transform: ${(props) =>
    props.slideMove ? "translateX(15%)" : "translateX(-15%)"};
  transition: all 0.3s ease;
  z-index: 30;
  padding: 10px 0;

  @media (max-width: 600px) {
    position: relative;
    z-index: 10;
    justify-items: start;
    transform: translateX(50%);
  }
`;

export const CardWrapper = styled.div`
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  background: white;
  position: relative;
  width: 180px;
  box-shadow: ${(props) => props.theme.shadow.sm};
  justify-content: space-between;

  > p {
    font-weight: 600;
    font-size: 1rem;
  }

  @media (max-width: 600px) {
    width: 150px;
    z-index: 30;
  }
`;
export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 7px;
`;

export const BarProcentance = styled.span`
  width: 100%;
  height: 2px;
  position: relative;
  border-radius: 15px;

  &::after {
    position: absolute;
    content: "";
    border-radius: 15px;
    background: ${(props) => props.theme.border.gray};
    width: 100%;
    height: 2px;
  }

  &::before {
    position: absolute;
    content: "";
    border-radius: 15px;
    background: ${(props) => props.theme.red};
    width: ${(props) => props.stockPercent};
    height: 2px;
  }
`;

export const StatusProduct = styled.span`
  color: ${(props) => props.theme.text.gray};
  font-weight: 700;
  font-size: 0.7rem;
`;
