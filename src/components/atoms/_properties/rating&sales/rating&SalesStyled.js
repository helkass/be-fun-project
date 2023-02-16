import styled from "styled-components";

export const RatingSalesWrapper = styled.div`
  display: flex;
  gap: 7px;
  font-size: 12px;
  font-weight: 500;
  color: ${(props) => props.theme.text.gray};
`;

export const Rating = styled.span`
  align-items: center;
  border-right: 1px solid ${(props) => props.theme.border.gray};
  height: max-content;
  padding-right: 8px;
`;
