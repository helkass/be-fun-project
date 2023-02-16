import styled from "styled-components";

export const FooterWrapper = styled.footer`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 38%;
  column-gap: 25px;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 5rem;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  margin-top: 10px;
`;

export const FlexWrapper = styled.div`
  display: flex;
  column-gap: 10px;
  flex-wrap: nowrap;
`;

export const ImageSocial = styled.img`
  width: 100%;
  max-height: 75px;
  object-fit: contain;
`;

export const SocialIcon = styled.span`
  border-radius: 100%;
  display: block;
  height: 25px;
  width: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.bg};
  color: white;
  cursor: pointer;
`;

export const CopyTitle = styled.span`
  color: ${(props) => props.theme.text.gray};
  text-align: center;
  font-weight: 600;
  font-size: 0.9rem;
`;

export const ButtonLanguageWrapper = styled.div`
  display: flex;
  background: ${(props) => props.theme.gray};
  padding: 4px;
  width: max-content;
  margin: 10px auto;
  justify-content: center;
  border-radius: 10px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    width: 50%;
    max-height: calc(100% - 5px);
    left: 5px;
    top: 3px;
    transition: all 0.3s ease;
    bottom: 0;
    border-radius: 6px;
    background: ${(props) => props.theme.button.green};
    transform: translateX(
      ${(props) => (props.setActive === "Id" ? 0 : "100%")}
    );
  }
`;

export const ButtonLanguage = styled.button`
  display: block;
  color: ${(props) => (props.setActive ? "white" : props.theme.text.gray)};
  padding: 6px 20px;
  font-weight: 600;
  border-radius: 6px;
  cursor: pointer;
  z-index: 2;
  background: transparent;
`;
