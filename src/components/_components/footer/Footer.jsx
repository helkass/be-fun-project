import React from "react";
import {
  ButtonLanguage,
  ButtonLanguageWrapper,
  ContentWrapper,
  CopyTitle,
  FlexWrapper,
  FooterWrapper,
  ImageSocial,
  SocialIcon,
} from "./footerStyled";
import { footerContents } from "./data";
import LinkTitle from "../../atoms/link/Link";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { TiSocialPinterest } from "react-icons/ti";
const Footer = () => {
  const [buttonLanguage, setButtonLanguage] = React.useState("Id");
  return (
    <FooterWrapper>
      <ContentWrapper>
        {footerContents.slice(0, 2).map((ct, idx) => (
          <ContentWrapper key={idx}>
            <h4>{ct.title}</h4>
            {ct.content.map((d) => (
              <LinkTitle fs="0.9rem" to="/" key={d}>
                {d}
              </LinkTitle>
            ))}
          </ContentWrapper>
        ))}
      </ContentWrapper>
      <ContentWrapper>
        {footerContents.slice(2, 4).map((ct, idx) => (
          <ContentWrapper key={idx}>
            <h4>{ct.title}</h4>
            {ct.content.map((d) => (
              <LinkTitle fs="0.9rem" to="/" key={d}>
                {d}
              </LinkTitle>
            ))}
          </ContentWrapper>
        ))}
        <ContentWrapper>
          <h4>Keamanan & Privasi</h4>
          <FlexWrapper>
            <a href="/" target="_blank">
              <ImageSocial
                src="https://images.tokopedia.net/img/unify/icon_pci_license.webp"
                alt=""
              />
            </a>
            <a target="_blank" href="/">
              <ImageSocial
                src="https://images.tokopedia.net/img/unify/icon_bsi_license_hd.png"
                alt=""
              />
            </a>
            <a target="_blank" href="/">
              <ImageSocial
                src="https://images.tokopedia.net/img/unify/icon_bsi_license_hd.png"
                alt=""
              />
            </a>
          </FlexWrapper>
        </ContentWrapper>
      </ContentWrapper>
      {/*  */}
      <ContentWrapper>
        <ContentWrapper>
          <h4>Ikuti Kami</h4>
          <FlexWrapper>
            <a href="/" target="_blank">
              <SocialIcon bg="#064884">
                <FaFacebookF size={13} />
              </SocialIcon>
            </a>
            <a href="/" target="_blank">
              <SocialIcon bg="#1DA1F2">
                <FaTwitter size={13} />
              </SocialIcon>
            </a>
            <a href="/" target="_blank">
              <SocialIcon bg="#E60023">
                <TiSocialPinterest size={20} />
              </SocialIcon>
            </a>
            <a href="/" target="_blank">
              <SocialIcon bg="#E1306C ">
                <FaInstagram size={15} />
              </SocialIcon>
            </a>
          </FlexWrapper>
        </ContentWrapper>
      </ContentWrapper>
      {/*  */}
      <ContentWrapper>
        <ContentWrapper>
          <img
            style={{ marginBottom: "10px" }}
            src="https://images.tokopedia.net/img/unify/il_footer_hd_v2.png"
            alt=""
          />
          <FlexWrapper>
            <a href="/" target="_blank">
              <ImageSocial src="https://assets.tokopedia.net/asts/assets-unify/img/icon-download-android.svg" />
            </a>
            <a href="" target="_blank">
              <ImageSocial src="https://assets.tokopedia.net/asts/assets-unify/img/icon-download-ios.svg" />
            </a>
            <a target="_blank" href="/">
              <ImageSocial src="https://assets.tokopedia.net/asts/assets-unify/img/icon-download-huawei.svg" />
            </a>
          </FlexWrapper>
          <ContentWrapper>
            <CopyTitle>&copy; 2009 - 2023, Pt. Tokopedia.</CopyTitle>
            <ButtonLanguageWrapper setActive={buttonLanguage}>
              <ButtonLanguage
                setActive={buttonLanguage === "Id"}
                onClick={() => setButtonLanguage("Id")}
              >
                Indonesia
              </ButtonLanguage>
              <ButtonLanguage
                setActive={buttonLanguage === "Eng"}
                onClick={() => setButtonLanguage("Eng")}
              >
                English
              </ButtonLanguage>
            </ButtonLanguageWrapper>
          </ContentWrapper>
        </ContentWrapper>
      </ContentWrapper>
    </FooterWrapper>
  );
};

export default Footer;
