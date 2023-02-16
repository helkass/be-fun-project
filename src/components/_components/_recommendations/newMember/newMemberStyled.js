import styled, { keyframes } from "styled-components";

export const NewMemberWrapper = styled.section`
  border-top: 1px solid ${(props) => props.theme.border.gray};
  border-bottom: 1px solid ${(props) => props.theme.border.gray};
  padding: 20px 0;
  margin: 1.8rem 0;
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
`;

export const ClockWrapper = styled.div`
  display: flex;
  gap: 6px;
  flex-wrap: nowrap;
  align-items: center;
  color: red;
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
`;

const displayOpacity = keyframes`
    0% {opacity: 1}
    20% {opacity: 0.8;}
    40% {opacity: 0.6;}
    60% {opacity: 0.4;}
    80% {opacity: 0.2;}
    100% {opacity: 0;};
`;

export const BannerWrapper = styled.div`
  position: absolute;
  background: linear-gradient(rgb(6, 166, 135), rgb(4, 120, 98));
  width: 25%;
  height: 100%;
  z-index: -1;
  border-radius: 15px;
  /* animation-name: ${displayOpacity}; */
  animation-duration: 0.4s;
  transition-delay: 0.8ms;
  transition-duration: 0.7ms;
  transition: all;
  transition-timing-function: ease;
  transform: ${(props) =>
    props.slideMove ? "translateX(0)" : "translateX(-100%)"};
`;

export const BannerImage = styled.img`
  position: absolute;
  object-fit: contain;
  height: 100%;
  left: 20px;
`;

export const SlidesWrapper = styled.div`
  display: flex;
  overflow: hidden;
  gap: 15px;
  justify-content: end;
  flex-wrap: nowrap;
  position: absolute;
  transform: ${(props) =>
    props.slideMove ? "translateX(15%)" : "translateX(-15%)"};
  transition: all 0.3s ease;
  z-index: 30;
  padding: 10px 0;
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
