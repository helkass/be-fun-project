import React from "react";
import {
  NavbarWrapper,
  HeaderWrapper,
  AboutHeaderWrapper,
  LinkWrapper,
  Logo,
  ContentCenterWrapper,
  InputWrapper,
  SideContent,
  ButtonCategory,
  RightWrapper,
  ButtonAuthWrapper,
  ButtonAuth,
  LocationWrapper,
} from "./headerStyled";
import { IoIosPhonePortrait, IoIosArrowDown } from "react-icons/io";
import LinkAboutHaader from "../../atoms/link/Link";
import tokopediaLogo from "../../../assets/tokopedia-logo.svg";
import { Link } from "react-router-dom";
import { BsSearch, BsCartFill } from "react-icons/bs";
import { TfiLocationPin } from "react-icons/tfi";

const Header = () => {
  const [header, setHeader] = React.useState(false);
  const changeColor = () => {
    if (window.scrollY >= 80) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };
  React.useEffect(() => {
    window.addEventListener("scroll", changeColor);
  });
  return (
    <HeaderWrapper shadowEffect={header}>
      <AboutHeader />
      <NavbarWrapper>
        {/* logo */}
        <SideContent>
          <Link to="/">
            <Logo src={tokopediaLogo} alt="logo-tokopedia" />
          </Link>
          <ButtonCategory>Kategori</ButtonCategory>
        </SideContent>
        <ContentCenterWrapper>
          <InputWrapper>
            <BsSearch />
            <input
              type="search"
              name="search"
              placeholder="Cari di Tokopedia"
            />
          </InputWrapper>
          <LinkWrapper>
            {linksRecommendations.map((link) => (
              <LinkAboutHaader key={link} color="rgba(0,0,0,0.64)">
                {link}
              </LinkAboutHaader>
            ))}
          </LinkWrapper>
        </ContentCenterWrapper>
        <RightWrapper>
          <SideContent>
            <ButtonCategory padding="4px">
              <BsCartFill size={20} />
            </ButtonCategory>
            <ButtonAuthWrapper>
              <ButtonAuth>Masuk</ButtonAuth>
              <ButtonAuth color="white">Daftar</ButtonAuth>
            </ButtonAuthWrapper>
          </SideContent>
          <LocationWrapper>
            <TfiLocationPin size={15} />
            Dikirim ke
            <span>Jakarta Pusat</span>
            <IoIosArrowDown size={15} />
          </LocationWrapper>
        </RightWrapper>
      </NavbarWrapper>
    </HeaderWrapper>
  );
};

const AboutHeader = () => {
  return (
    <AboutHeaderWrapper>
      <LinkWrapper>
        <LinkAboutHaader to="/" fs="12px">
          <IoIosPhonePortrait size={20} />
          download tokopedia app
        </LinkAboutHaader>
      </LinkWrapper>
      <LinkWrapper>
        {links.map((link) => (
          <LinkAboutHaader fs="12px" key={link.title} to="/">
            {link.title}
          </LinkAboutHaader>
        ))}
      </LinkWrapper>
    </AboutHeaderWrapper>
  );
};

const links = [
  {
    title: "tentang tokopedia",
    link: "/",
  },
  {
    title: "mitra tokopedia",
    link: "/",
  },
  {
    title: "mulai berjualan",
    link: "/",
  },
  {
    title: "promo",
    link: "/",
  },
  {
    title: "tokopedia care",
    link: "/",
  },
];

const linksRecommendations = [
  "Poco M5",
  "Pel Lantai",
  "Kaos Polos",
  "Iphone 14 Pro Ibox",
  "Lem Sepatu",
  "Jersey Bola",
];

export default Header;
