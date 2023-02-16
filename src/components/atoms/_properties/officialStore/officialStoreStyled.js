import styled from "styled-components";

export const OfficialStoreWrapper = styled.div`
  display: flex;
  gap: 7px;
  align-items: center;
  text-transform: capitalize;
  font-size: 12px;
  font-weight: 600;
  color: ${(props) => props.theme.text.gray};

  > img {
    width: 15px;
    height: 15px;
    object-fit: cover;
    display: block;
  }
`;
