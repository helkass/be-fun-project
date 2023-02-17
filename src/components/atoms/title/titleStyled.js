import styled from "styled-components";

export const TitleWrapper = styled.h2`
  font-weight: 600;
  font-size: 1.3rem;
  text-transform: capitalize;

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

export const LinkTitle = styled.span`
  color: ${(props) =>
    props.green ? props.theme.primary : props.theme.text.gray};
  font-weight: 600;
  text-transform: capitalize;

  @media (max-width: 600px) {
    font-size: 0.845rem;
  }
`;
