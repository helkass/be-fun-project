import styled from "styled-components";

export const HeaderWrapper = styled.header`
  width: 100%;
  z-index: 999;
  background: white;
  position: fixed;
  top: 0;
  padding-bottom: 0.5rem;
  box-shadow: ${(props) => props.shadowEffect || props.theme.shadow.sm};

  @media (max-width: 600px) {
    background: linear-gradient(7.43deg, #089855 7.64%, #1bb56d 96.11%);
    width: 100%;
    padding: 2rem 0;
    z-index: -2;
    height: 300px;
  }
`;

// about header
export const AboutHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background: ${(props) => props.theme.gray};
  padding: 0 1.8rem;
  height: 32px;
  text-transform: capitalize;
  color: ${(props) => props.theme.text.gray};

  @media (max-width: 600px) {
    display: none;
  }
`;

export const LinkWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  column-gap: 30px;

  @media (max-width: 600px) {
    display: none;
  }
`;

// navbar
export const NavbarWrapper = styled.nav`
  display: flex;
  gap: 20px;
  position: relative;
  width: 100%;
  padding: 10px 1.8rem;
  justify-content: space-between;
  flex-wrap: nowrap;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 0.6rem 0.8rem;
    color: white;
  }
`;

export const Logo = styled.img`
  display: block;
  width: 180px;
  height: 60px;
  object-fit: cover;
  transform: translate(-20px, -10px);

  @media (max-width: 600px) {
    display: none;
  }
`;

export const ButtonCategory = styled.button`
  color: rgba(0, 0, 0, 0.54);
  padding: ${(props) => props.padding || "9px 6px"};
  height: max-content;
  cursor: pointer;
  border-radius: 5px;
  font-weight: 400;

  &:hover {
    background: ${(props) => props.theme.gray};
    color: ${(props) => props.theme.primary};
  }
`;

export const SideContent = styled.div`
  width: max-content;
  display: flex;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const ContentCenterWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  color: ${(props) => props.theme.text.gray};
  gap: 10px;
  align-items: flex-start;

  @media (max-width: 600px) {
    flex-direction: row;
    justify-content: space-between;
    z-index: 9999;
    position: fixed;
    max-width: calc(100% - 25px);
    align-items: center;
    top: 1%;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  opacity: 0.9;
  padding: 8px;

  > input {
    width: 100%;
  }

  @media (max-width: 600px) {
    max-width: 60%;
    background-color: white;
    opacity: 1;
    padding: 9px;
    gap: 10px;

    > input {
      max-width: 100%;
      background-color: white;

      &::placeholder {
        font-size: 0.9rem;
      }
    }
  }
`;

export const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 600px) {
    margin-top: 1rem;
  }
`;

export const ButtonAuthWrapper = styled.div`
  padding-left: 15px;
  position: relative;
  display: flex;
  margin-left: 15px;
  flex-wrap: nowrap;
  gap: 10px;

  &::before {
    height: 90%;
    width: 1.2px;
    left: 0;
    content: "";
    position: absolute;
    background: rgba(0, 0, 0, 0.24);
  }
`;

export const ButtonAuth = styled.button`
  padding: 8px 15px;
  color: ${(props) => props.color || props.theme.primary};
  border: 1px solid ${(props) => props.theme.primary};
  background: ${(props) =>
    props.color === "white" ? props.theme.primary : "white"};
  border-radius: 7px;
  font-weight: 600;

  @media (max-width: 600px) {
    width: 100%;
    padding: 5px 0;

    background: ${(props) =>
      props.color === "white" ? props.theme.darkGreen : "white"};
  }
`;

export const LocationWrapper = styled.button`
  cursor: pointer;
  display: flex;
  gap: 5px;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  align-self: flex-end;
  float: right;
  padding: 0;
  font-size: 0.8rem;
  color: ${(props) => props.theme.text.gray};

  > span {
    font-weight: 700;
    color: black;
  }

  @media (max-width: 600px) {
    color: white;

    > span {
      color: white;
    }
  }
`;

export const MobileIcon = styled.button`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;

  &:focus {
    outline: none;
    border: none;
  }

  @media (min-width: 600px) {
    display: none;
  }
`;

// mobile responsive
export const MobileNavbarWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  top: 0;
  transform: translateY(${(props) => (props.isOpen ? "0" : "100%")});
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  z-index: 99999;
  row-gap: 10px;
  overflow: hidden;
  position: absolute;
  background: white;
  transition: all 0.4s ease-in-out;

  @media (min-width: 600px) {
    display: none;
  }
`;

export const MobileFlex = styled.div`
  display: flex;
  gap: 14px;
  padding: 1rem 1rem;
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.border.gray};
`;

export const MobileContent = styled.div`
  padding: 0 4%;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
`;
