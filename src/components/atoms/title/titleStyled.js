import styled from "styled-components";

export const TitleWrapper = styled.h2`
  font-weight: 600;
  font-size: 1.3rem;
  text-transform: capitalize;
`;

export const LinkTitle = styled.span`
  color: ${(props) =>
    props.green ? props.theme.primary : props.theme.text.gray};
  font-weight: 600;
  text-transform: capitalize;
`;
