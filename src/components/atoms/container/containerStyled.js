import styled from "styled-components";

export const ContainerWrapper = styled.div`
  width: min(100%, 1200px);
  margin: 0 auto;

  /* mobile */
  @media (max-width: 600px) {
    padding-top: ${(props) => props.pt};
  }
`;
