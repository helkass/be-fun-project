import styled from "styled-components";

export const ButtonWrapper = styled.button`
  background: ${(props) => (props.disabled ? props.theme.gray : "")};
  color: ${(props) => (props.disabled ? props.theme.text.gray : "inherit")};
  border: none;
  height: max-content;
  padding: 12px 28px;
  border-radius: 7px;
  transform: ${(props) => props.transform};
  font-weight: 700;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;
