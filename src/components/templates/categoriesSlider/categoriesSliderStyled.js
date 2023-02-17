import styled from "styled-components";

export const CategoriesSliderList = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  ::-webkit-scrollbar {
    height: 5px;
  }
  width: 100%;
  gap: 15px;
  padding: 2.2rem 0 1rem;
  flex-wrap: nowrap;

  @media (max-width: 600px) {
    gap: 0;
    column-gap: 15px;
    padding: 0;
    margin: 5px 10px;
    /* line-height: 1rem; */
  }
`;
export const CategoryItem = styled.div`
  display: flex;
  align-items: center;
  text-transform: capitalize;
  color: ${(props) => props.theme.text.gray};
  font-weight: 600;
  padding: 9px 12px;
  gap: 10px;
  border-radius: 20px;
  border: 1px solid ${(props) => props.theme.border.gray};
  flex-wrap: nowrap;
  /* min-width: max-content; */
  font-size: 0.9rem;
  cursor: pointer;

  > img {
    width: 20px;
    height: 20px;
    object-fit: cover;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    /* flex-wrap: wrap; */
    border: none;
    max-width: 90px;
    padding: 0;
    row-gap: 15px;
    border-radius: 0;
    font-size: 10px;
    font-weight: 600;

    > img {
      width: 30px;
      height: 30px;
      object-fit: cover;
    }
  }
`;
