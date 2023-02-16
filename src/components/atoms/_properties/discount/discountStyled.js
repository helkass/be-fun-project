import styled from "styled-components";

export const DisCountWrapper = styled.div`
  gap: 3px;
  display: flex;
  align-items: center;
  font-size: 10px;
`;

export const DiscountPercent = styled.span`
  background: #ffdbe2;
  display: flex;
  justify-content: center;
  font-weight: 600;
  width: max-content;
  color: ${(props) => props.theme.red};
  border-radius: 4px;
  padding: 2px 4px;
`;

export const AmountDefault = styled.span`
  text-decoration: line-through;
  color: ${(props) => props.theme.text.gray};
`;
