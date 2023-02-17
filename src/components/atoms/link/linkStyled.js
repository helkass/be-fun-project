import styled from "styled-components";

export const LinkStyled = styled.span`
  color: #003;
  font-size: ${(props) => props.fs || "0.8rem"};
  align-items: center;
  column-gap: 10px;
  display: flex;
  color: ${(props) => props.color || props.theme.text.gray};
  line-height: 23px;
  padding: ${(props) => props.pd};
  border-bottom: 1px solid
    ${(props) => (props.bb ? props.theme.border.gray : "none")};
  &:hover {
    color: ${(props) => props.theme.primary};
    transition: all 0.2s ease;
  }
`;
