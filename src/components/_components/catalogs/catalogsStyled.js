import styled from "styled-components";

export const CatalogsWrapper = styled.section`
  height: 100%;
  padding: 1rem 0 7rem;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;

export const ButtonCatalogsWrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  overflow: hidden;
  border-bottom: 1px solid ${(props) => props.theme.border.gray};
  transition: all 0.3s ease;
  width: 100%;
  flex-wrap: nowrap;
`;

export const ButtonCatalogs = styled.button`
  font-weight: 700;
  border-bottom: 2px solid
    ${(props) => (props.setActive ? props.theme.primary : "transparent")};
  color: ${(props) =>
    props.setActive ? props.theme.primary : props.theme.text.gray};
  font-size: 1rem;
  text-transform: capitalize;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 10px 24px;
  text-align: center;
  line-height: 24px;
  background-color: transparent;
  min-height: 44px;
  cursor: pointer;
  transition: border 300ms cubic-bezier(0.63, 0.01, 0.29, 1) 0s;

  &:focus {
    border-bottom: 2px solid
      ${(props) => (props.setActive ? props.theme.primary : "transparent")};
  }
`;

export const ContentWarpper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width: 100%;
  padding: 0 1rem;
  column-gap: 15px;
`;

export const OfferWrapper = styled.div`
  display: flex;
  margin-top: 1rem;
  padding-bottom: 0.9rem;
  justify-content: space-between;
  border-bottom: 1px dashed rgba(0, 0, 0, 0.27);
`;

export const OfferContent = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 50%;
  row-gap: 20px;

  > h5 {
    color: ${(props) => props.theme.text.midOrange};
    font-size: 1rem;
  }

  > p {
    font-size: 0.8rem;
    font-weight: 600;
    color: ${(props) => props.theme.text.gray};
  }

  > div > a > span {
    color: ${(props) => props.theme.primary};
    font-size: 0.7rem;
    font-weight: 700;

    &:hover {
      color: ${(props) => props.theme.text.orange};
    }
  }

  > img {
    width: 70%;
    object-fit: contain;
    align-self: flex-end;
    position: absolute;
    top: 0;
  }
`;

export const ButtonOpenStore = styled.button`
  background: #00aa5b;
  color: white;
  border-radius: 8px;
  align-items: center;
  text-align: center;
  text-transform: capitalize;
  height: 40px;
  line-height: 20px;
  font-weight: 800;
  transition: background-color 300ms ease 0s;
  outline: none;
  display: inline-block;
  width: auto;
  padding: 0 16px;
  cursor: pointer;
  &:hover {
    background: ${(props) => props.theme.darkGreen};
  }
`;

export const ContentArticle = styled.div`
  font-size: 0.78rem;
  font-weight: 500;
  line-height: 23px;
  color: ${(props) => props.theme.text.gray};
  > h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 6px 0;
    font-size: 0.8rem;
    color: inherit;
    text-transform: capitalize;
  }

  br {
    content: "";
    margin-bottom: 10px;
    display: block;
  }
`;

export const CardCatalogsWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 0;
  column-gap: 20px;
  width: 100%;
`;

export const Card = styled.div`
  display: flex;
  gap: 10px;
  padding-right: 20px;
  line-height: 20px;
  max-width: 28%;

  > img {
    width: 110px;
    object-fit: cover;
  }

  > div > p {
    font-size: 1rem;
    margin: 10px 0;
    font-weight: 700;
    color: ${(props) => props.theme.primary};
  }

  > div > span {
    font-size: 0.78rem;
    color: ${(props) => props.theme.text.gray};
    font-weight: 500;
  }
`;
