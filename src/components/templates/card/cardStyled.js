import styled from "styled-components";

export const CardWrapper = styled.div`
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  background: white;
  overflow: hidden;
  position: relative;
  width: 180px;
  box-shadow: ${(props) => props.theme.shadow.sm};
  justify-items: flex-start;

  > p {
    font-weight: 600;
    font-size: 1rem;
  }
`;
export const CardContent = styled.div`
  padding: 6px;
  margin-top: 5px;
  line-height: 1rem;
  display: flex;
  row-gap: 5px;
  flex-direction: column;
  justify-content: space-between;
`;
