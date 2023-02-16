import styled from "styled-components";

export const HeaderWrapper = styled.header`
  width: 100%;
  z-index: 999;
  background: white;
  position: fixed;
  top: 0;
  padding-bottom: 0.5rem;
  box-shadow: ${(props) => props.shadowEffect || props.theme.shadow.sm};
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
`;

// navbar
export const NavbarWrapper = styled.nav`
  display: flex;
  gap: 20px;
  position: relative;
  width: 100%;
  padding: 10px 1.8rem;
  justify-content: space-between;
`;

export const Logo = styled.img`
  display: block;
  width: 180px;
  height: 60px;
  object-fit: cover;
  transform: translate(-20px, -10px);
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
`;

export const ContentCenterWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  color: ${(props) => props.theme.text.gray};
  gap: 10px;
  align-items: flex-start;
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
`;

export const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
`;
