import styled from "styled-components";

export const CashbackWrapper = styled.span`
  background: ${(props) => props.theme.midGreen};
  color: ${(props) => props.theme.primary};
  padding: 2px 3px;
  border-radius: 5px;
  width: max-content;
  font-size: 0.7rem;
  font-weight: 700;
  text-align: center;
`;
