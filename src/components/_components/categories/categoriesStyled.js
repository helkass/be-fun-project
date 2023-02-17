import styled from "styled-components";

export const CategogyWrapper = styled.div`
  width: 100%;
  box-shadow: ${(props) => props.theme.shadow.sm};
  padding: 0 18px;
  border-radius: 10px;
`;

export const FlexWrapper = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: nowrap;
`;

export const FlexContent = styled.div`
  width: 50%;
  line-height: 4rem;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 10px;
`;

export const CardItems = styled.div`
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.border.gray};
  padding: 0.9rem;
  position: relative;
  max-width: 130px;

  > img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

export const PayListWrapper = styled.div`
  border: 1px solid ${(props) => props.theme.border.gray};
  border-radius: 10px;
`;

export const PayButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${(props) => props.theme.border.gray};
`;

export const PayButtons = styled.button`
  font-size: 1rem;
  font-weight: 600;
  padding-top: 10px;
  padding-bottom: 7px;
  align-items: center;
  cursor: pointer;
  width: ${(props) => props.width || "20%"};
  color: ${(props) =>
    (props.active && props.theme.primary) || props.theme.text.gray};
  transition: all;
  border-bottom: 2px solid
    ${(props) => (props.active ? props.theme.primay : "transparent")};
  border-left: 1px solid
    ${(props) => (props.borderLeft ? props.theme.border.gray : "transparent")};
`;

export const PayContents = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
`;
