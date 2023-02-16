import styled from "styled-components";

export const SuggestionsWrapper = styled.section`
  margin: 1rem 0;
  padding: 2rem 0;
  line-height: 30px;
`;

export const NavigationsCategories = styled.div`
  display: flex;
  position: sticky;
  padding: 0.5rem 0;
  top: 7.4em;
  z-index: 99;
  background: white;
  gap: 10px;
  width: 100%;
  flex-wrap: nowrap;
  overflow: hidden;
`;

export const CardCategory = styled.div`
  border-radius: 8px;
  height: 64px;
  min-width: 17%;
  position: relative;
  color: white;
  background: url(${(props) => props.urlImage});
  background-repeat: no-repeat;
  background-size: cover;
  padding: 5px 7px;
  > span {
    font-size: 0.9rem;
    text-transform: capitalize;
    font-weight: 600;
  }

  &::before {
    content: "";
    z-index: 1;
    position: absolute;
    top: 7px;
    left: 8px;
    height: 3px;
    width: 23%;
    background: white;
  }
`;

// content list products
export const GridWrapper = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  row-gap: 20px;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  align-items: center;
  text-align: center;
  justify-content: center;
  margin: 1.8rem 0;
`;
export const ButtonNavigate = styled.button`
  border: 1px solid ${(props) => props.theme.primary};
  color: ${(props) => props.theme.primary};
  font-size: 1.1345rem;
  font-weight: 700;
  padding: 0 16px;
  display: inline-block;
  width: 320px;
  border-radius: 8px;
  height: 48px;
  line-height: 22px;
  text-transform: capitalize;

  &:focus {
    border: 1px solid ${(props) => props.theme.primary};
  }
`;
